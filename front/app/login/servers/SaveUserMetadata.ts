"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL не задан");
}

if (!supabaseServiceRoleKey) {
  throw new Error("SUPABASE_SERVICE_ROLE_KEY не задан");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export interface SaveUserMetadataSuccess {
  success: true;
}

export interface SaveUserMetadataFailure {
  success: false;
  error: string;
}

export type SaveUserMetadataResult = SaveUserMetadataSuccess | SaveUserMetadataFailure;

/**
 * Сохраняет метаданные пользователя в таблицу metadata при регистрации
 * @param uid - UUID пользователя
 * @param name - Имя пользователя
 * @param surname - Фамилия пользователя
 * @param company - Компания пользователя
 * @param phone - Телефон пользователя
 * @returns Результат сохранения метаданных
 */
export async function SaveUserMetadata(
  uid: string,
  name: string,
  surname: string,
  company: string,
  phone: string,
): Promise<SaveUserMetadataResult> {
  try {
    // Валидация входных параметров
    const trimmedUid = typeof uid === "string" ? uid.trim() : "";
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedSurname = typeof surname === "string" ? surname.trim() : "";
    const trimmedCompany = typeof company === "string" ? company.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";

    if (!trimmedUid) {
      return { success: false, error: "UUID пользователя не может быть пустым" };
    }

    if (!trimmedName) {
      return { success: false, error: "Имя пользователя не может быть пустым" };
    }

    if (!trimmedSurname) {
      return { success: false, error: "Фамилия пользователя не может быть пустой" };
    }

    if (!trimmedCompany) {
      return { success: false, error: "Компания не может быть пустой" };
    }

    if (!trimmedPhone) {
      return { success: false, error: "Телефон не может быть пустым" };
    }

    // Сохраняем данные в таблицу metadata
    const { error } = await supabaseAdmin
      .from("metadata")
      .insert({
        uid: trimmedUid,
        name: trimmedName,
        surname: trimmedSurname,
        company: trimmedCompany,
        phone: trimmedPhone,
      });

    if (error) {
      return { 
        success: false, 
        error: error.message || "Ошибка при сохранении данных в базу данных" 
      };
    }

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Неизвестная ошибка сервера";
    return { success: false, error: message };
  }
}

