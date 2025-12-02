"use server";

import { createClient } from "@supabase/supabase-js";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

// Next.js автоматически загружает переменные из .env.local в папке front/
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL не задан");
}

if (!supabaseServiceRoleKey) {
  throw new Error("SUPABASE_SERVICE_ROLE_KEY не задан");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

// S3 конфигурация из переменных окружения
const s3AccessKeyId = process.env.S3_ACCESS_KEY_ID;
const s3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
const s3Endpoint = process.env.S3_ENDPOINT;
const s3Bucket = process.env.S3_BUCKET;

if (!s3AccessKeyId || !s3SecretAccessKey || !s3Endpoint || !s3Bucket) {
  throw new Error("S3 переменные окружения не заданы");
}

// Создаем S3 клиент
const s3Client = new S3Client({
  endpoint: s3Endpoint,
  region: "us-east-1",
  credentials: {
    accessKeyId: s3AccessKeyId,
    secretAccessKey: s3SecretAccessKey,
  },
  forcePathStyle: true,
});

/**
 * Извлекает S3 ключ из URL
 * @param url - URL видео (например, "https://endpoint/bucket/key")
 * @returns S3 ключ или null
 */
function extractS3KeyFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split("/").filter(Boolean);
    
    // Если URL содержит bucket в пути (forcePathStyle: true)
    // Формат: /bucket/key
    if (pathParts.length >= 2 && pathParts[0] === s3Bucket) {
      return pathParts.slice(1).join("/");
    }
    
    // Если bucket в hostname, то путь после первого слеша - это ключ
    if (pathParts.length >= 1) {
      return pathParts.join("/");
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

export interface DeleteVideoResult {
  success: boolean;
  error?: string;
}

/**
 * Удаляет видео из таблицы videos по video_title и удаляет файл из S3
 * @param uid - UUID пользователя
 * @param videoTitle - Название видео (video_title)
 * @param videoUrl - URL видео для удаления из S3 (опционально, если не указан - получаем из БД)
 */
export async function DeleteVideo(
  uid: string,
  videoTitle: string,
  videoUrl?: string | null,
): Promise<DeleteVideoResult> {
  try {
    if (!uid || !uid.trim()) {
      return { success: false, error: "UUID пользователя не может быть пустым" };
    }

    if (!videoTitle || !videoTitle.trim()) {
      return { success: false, error: "Название видео не может быть пустым" };
    }

    // Сначала получаем запись из БД, чтобы извлечь оригинальный URL
    // Это важно, так как URL может быть сформирован по старому названию
    const { data: videoData, error: fetchError } = await supabaseAdmin
      .from("videos")
      .select("url")
      .eq("video_title", videoTitle.trim())
      .eq("uid", uid.trim())
      .single();

    if (fetchError) {
      return { success: false, error: fetchError.message };
    }

    // Используем URL из БД, если он есть, иначе используем переданный URL
    const urlToDelete = videoData?.url || videoUrl;

    // Удаляем файл из S3 перед удалением записи из БД
    if (urlToDelete && urlToDelete.trim()) {
      const s3Key = extractS3KeyFromUrl(urlToDelete.trim());
      if (s3Key) {
        try {
          const command = new DeleteObjectCommand({
            Bucket: s3Bucket,
            Key: s3Key,
          });
          await s3Client.send(command);
        } catch (s3Error) {
          // Игнорируем ошибки удаления из S3, продолжаем удаление записи из БД
        }
      }
    }

    // Удаляем запись из таблицы videos по video_title
    const { error } = await supabaseAdmin
      .from("videos")
      .delete()
      .eq("video_title", videoTitle.trim())
      .eq("uid", uid.trim());

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Неизвестная ошибка сервера";
    return { success: false, error: message };
  }
}


