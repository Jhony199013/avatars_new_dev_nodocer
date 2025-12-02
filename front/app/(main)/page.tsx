"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { safeGetUser } from "@/lib/authUtils";
import { supabase } from "@/lib/supabaseClient";
import { Header } from "@/components/ui/Header";
import { Dashboard } from "./components/Dashboard";
import { CosmoLoader } from "@/components/ui/CosmoLoader";

export const dynamic = 'force-dynamic';

export default function Home() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout | null = null;

    const checkAuth = async () => {
      try {
        const { user, error } = await safeGetUser();
        
        // Очищаем таймаут, так как проверка завершилась
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        
        if (!isMounted) return;

        if (error || !user) {
          // Очищаем куку авторизации перед редиректом на логин
          if (typeof document !== "undefined") {
            document.cookie = "app-auth=; path=/; max-age=0";
          }
          router.push("/login");
          return;
        }

        setIsCheckingAuth(false);
      } catch (error) {
        // Очищаем таймаут при ошибке
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        
        console.error("[Home] Ошибка проверки авторизации:", error);
        if (isMounted) {
          // Очищаем куку авторизации перед редиректом на логин
          if (typeof document !== "undefined") {
            document.cookie = "app-auth=; path=/; max-age=0";
          }
          router.push("/login");
        }
      } finally {
        if (isMounted && timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    };

    // Таймаут на случай зависания
    timeoutId = setTimeout(async () => {
      if (isMounted) {
        console.warn("[Home] Таймаут проверки авторизации");
        // Очищаем сессию перед редиректом
        try {
          await supabase.auth.signOut();
          if (typeof document !== "undefined") {
            document.cookie = "app-auth=; path=/; max-age=0";
          }
        } catch (err) {
          console.error("[Home] Ошибка при очистке сессии:", err);
        }
        setIsCheckingAuth(false);
        router.push("/login");
      }
    }, 10000); // Увеличиваем до 10 секунд

    checkAuth();

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {isCheckingAuth ? (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
          <CosmoLoader ariaLabel="Проверка авторизации..." />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
