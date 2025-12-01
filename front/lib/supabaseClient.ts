import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Создаем клиент для браузера с правильной конфигурацией для работы с cookies
// Используем createBrowserClient из @supabase/ssr для правильной работы с refresh tokens
// createBrowserClient автоматически настраивает правильную работу с cookies и localStorage
export const supabase = supabaseUrl && supabaseAnonKey
  ? createBrowserClient(supabaseUrl, supabaseAnonKey)
  : createBrowserClient("https://placeholder.supabase.co", "placeholder-key");

