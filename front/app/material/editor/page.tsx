"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabaseClient";
import { MaterialEditor } from "./components/MaterialEditor";

function MobileMessage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          Редактор недоступен на мобильных устройствах
        </h1>
        <p className="mb-6 text-gray-600">
          Для редактирования и создания видео воспользуйтесь компьютером для лучшего пользовательского опыта.
        </p>
        <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-500">
          Редактор требует точного управления элементами и больший экран для комфортной работы.
        </div>
      </div>
    </div>
  );
}

function MaterialEditorWrapper() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    const checkDevice = () => {
      // Проверка ширины экрана (планшеты обычно до 1024px)
      const isSmallScreen = window.innerWidth < 1024;
      
      // Проверка user agent для мобильных устройств и планшетов
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      // Проверка на touch устройство
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Считаем мобильным, если это маленький экран ИЛИ мобильное устройство И touch устройство
      setIsMobile(isSmallScreen || (isMobileDevice && isTouchDevice));
    };

    checkDevice();
    
    // Проверка при изменении размера окна
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // Показываем загрузку пока проверяем устройство
  if (isMobile === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-gray-500">Загрузка...</div>
      </div>
    );
  }

  // Показываем сообщение на мобильных устройствах
  if (isMobile) {
    return <MobileMessage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <MaterialEditor />
    </div>
  );
}

export default function MaterialEditorPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Загрузка...</div>}>
      <MaterialEditorWrapper />
    </Suspense>
  );
}

