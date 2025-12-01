/**
 * Генерирует UUID v4, совместимый со всеми браузерами
 * Использует crypto.randomUUID() если доступно, иначе fallback на ручную генерацию
 */
export function generateUUID(): string {
  // Проверяем доступность crypto.randomUUID (поддерживается в современных браузерах)
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Fallback: ручная генерация UUID v4
  // Формат: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}



