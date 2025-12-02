import { supabase } from "./supabaseClient";
import { AuthError } from "@supabase/supabase-js";

/**
 * Проверяет, является ли ошибка ошибкой невалидного refresh token
 */
export function isRefreshTokenError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  
  const errorMessage = 
    ("message" in error ? String(error.message) : "") ||
    ("error_description" in error ? String(error.error_description) : "");
  
  const normalizedMessage = errorMessage.toLowerCase();
  
  return (
    normalizedMessage.includes("refresh token") &&
    (normalizedMessage.includes("not found") ||
     normalizedMessage.includes("invalid") ||
     normalizedMessage.includes("expired"))
  );
}

/**
 * Проверяет, является ли ошибка ошибкой авторизации (удаленный пользователь, невалидная сессия и т.д.)
 */
export function isAuthError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  
  const errorMessage = 
    ("message" in error ? String(error.message) : "") ||
    ("error_description" in error ? String(error.error_description) : "") ||
    ("name" in error ? String(error.name) : "");
  
  const normalizedMessage = errorMessage.toLowerCase();
  
  // Проверяем различные типы ошибок авторизации
  return (
    isRefreshTokenError(error) ||
    normalizedMessage.includes("user not found") ||
    normalizedMessage.includes("invalid user") ||
    normalizedMessage.includes("session not found") ||
    normalizedMessage.includes("jwt") ||
    normalizedMessage.includes("unauthorized") ||
    normalizedMessage.includes("authentication") ||
    (error instanceof AuthError && error.status === 401)
  );
}

/**
 * Безопасно получает текущего пользователя с обработкой ошибок авторизации
 * @returns Объект с user и error, или null если пользователь не авторизован
 */
export async function safeGetUser() {
  try {
    // Добавляем таймаут для предотвращения зависания запроса
    const getUserPromise = supabase.auth.getUser();
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error("Таймаут получения пользователя"));
      }, 8000); // 8 секунд таймаут
    });

    const {
      data: { user },
      error,
    } = await Promise.race([getUserPromise, timeoutPromise]);

    // Если ошибка связана с авторизацией (удаленный пользователь, невалидная сессия и т.д.), очищаем сессию
    if (error && isAuthError(error)) {
      await supabase.auth.signOut();
      // Очищаем cookie авторизации (только в браузере)
      if (typeof document !== "undefined") {
        document.cookie = "app-auth=; path=/; max-age=0";
      }
      return { user: null, error: null };
    }

    // Если пользователь не найден, но ошибки нет - тоже очищаем сессию на всякий случай
    if (!user && !error) {
      await supabase.auth.signOut();
      if (typeof document !== "undefined") {
        document.cookie = "app-auth=; path=/; max-age=0";
      }
      return { user: null, error: null };
    }

    return { user, error };
  } catch (err) {
    // Обрабатываем таймаут и другие ошибки
    const errorMessage = err instanceof Error ? err.message : String(err);
    
    // Если это таймаут, очищаем сессию и возвращаем null
    if (errorMessage.includes("Таймаут") || errorMessage.includes("timeout")) {
      try {
        await supabase.auth.signOut();
        if (typeof document !== "undefined") {
          document.cookie = "app-auth=; path=/; max-age=0";
        }
      } catch (signOutErr) {
        // Игнорируем ошибки при очистке сессии
      }
      return { user: null, error: null };
    }
    
    // Обрабатываем другие ошибки авторизации
    if (isAuthError(err)) {
      await supabase.auth.signOut();
      if (typeof document !== "undefined") {
        document.cookie = "app-auth=; path=/; max-age=0";
      }
      return { user: null, error: null };
    }
    
    return { user: null, error: err };
  }
}

/**
 * Проверяет, авторизован ли пользователь
 * @returns true если пользователь авторизован, false в противном случае
 */
export async function isAuthenticated(): Promise<boolean> {
  const { user, error } = await safeGetUser();
  return !error && !!user;
}

