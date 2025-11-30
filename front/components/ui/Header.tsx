"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutModal } from "./LogoutModal";
import { prefetchAvatarsData } from "@/lib/prefetchAvatars";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/avatars", label: "Аватары" },
  { href: "/voices", label: "Голоса" },
  { href: "/material", label: "Материал" },
];

export function Header() {
  const pathname = usePathname();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Закрытие меню при переходе на другую страницу
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-lg border-b border-gray-100">
        <div className="mx-auto flex h-full w-full max-w-[1350px] items-center justify-between px-4 sm:px-6">
          {/* Десктопная навигация */}
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              const handleMouseEnter = () => {
                // Prefetch данные для страницы аватаров при наведении
                if ((href === "/avatars" || href === "/") && !isActive) {
                  prefetchAvatarsData();
                }
              };
              
              return (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={handleMouseEnter}
                  prefetch={true}
                  className={`text-lg font-semibold transition ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Мобильная кнопка меню */}
          <div className="flex md:hidden flex-1 items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900"
              aria-label="Открыть меню"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Кнопка выхода */}
          <div className="flex flex-none justify-end">
            <button
              type="button"
              onClick={() => setIsLogoutModalOpen(true)}
              className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 sm:px-4"
            >
              <span className="hidden sm:inline">Выйти</span>
              <span className="sm:hidden">Выход</span>
            </button>
          </div>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 right-0 z-40 md:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <nav className="mx-auto max-w-[1350px] px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (href === "/avatars" || href === "/") {
                          prefetchAvatarsData();
                        }
                      }}
                      prefetch={true}
                      className={`rounded-lg px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="h-16" aria-hidden />
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
    </>
  );
}

