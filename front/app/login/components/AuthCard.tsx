"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Toast } from "./Toast";
import { translateError } from "./errorTranslations";

type Mode = "login" | "register";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

export function AuthCard() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastType, setToastType] = useState<"error" | "success">("error");
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

  const showErrorToast = (message: string) => {
    setToastMessage(message);
    setToastType("error");
    setIsToastVisible(true);
  };

  const showSuccessToast = (message: string) => {
    setToastMessage(message);
    setToastType("success");
    setIsToastVisible(true);
  };

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      const input = event.currentTarget;
      const cursorPosition = input.selectionStart || 0;
      const value = input.value;
      
      // Если курсор находится в начале и пытаемся удалить "+7", очищаем поле
      if (cursorPosition <= 2 && value.startsWith("+7")) {
        event.preventDefault();
        setForm((prev) => ({ ...prev, phone: "" }));
        return;
      }
      
      // Если курсор находится на дефисе или скобке, удаляем предыдущую цифру
      if (cursorPosition > 0 && cursorPosition <= value.length) {
        const charBeforeCursor = value[cursorPosition - 1];
        
        // Если пытаемся удалить "7" в "+7", удаляем весь "+7"
        if (charBeforeCursor === "7" && cursorPosition === 2 && value.startsWith("+7")) {
          event.preventDefault();
          setForm((prev) => ({ ...prev, phone: "" }));
          return;
        }
        
        // Если пытаемся удалить "+" в "+7", удаляем весь "+7"
        if (charBeforeCursor === "+" && cursorPosition === 1 && value.startsWith("+7")) {
          event.preventDefault();
          setForm((prev) => ({ ...prev, phone: "" }));
          return;
        }
        
        if (charBeforeCursor === "-" || charBeforeCursor === "(" || charBeforeCursor === ")") {
          event.preventDefault();
          
          // Находим все цифры до позиции курсора
          const beforeCursor = value.slice(0, cursorPosition);
          const digitsBefore = beforeCursor.replace(/\D/g, "");
          const phoneDigitsBefore = digitsBefore.startsWith("7") ? digitsBefore.slice(1) : digitsBefore;
          
          // Удаляем последнюю цифру из части до курсора
          if (phoneDigitsBefore.length > 0) {
            const newDigitsBefore = phoneDigitsBefore.slice(0, -1);
            
            // Находим все цифры после позиции курсора
            const afterCursor = value.slice(cursorPosition);
            const digitsAfter = afterCursor.replace(/\D/g, "");
            
            // Объединяем цифры
            const allNewDigits = newDigitsBefore + digitsAfter;
            const phoneDigits = allNewDigits.startsWith("7") ? allNewDigits.slice(1) : allNewDigits;
            const cleanDigits = phoneDigits.slice(0, 10);
            
            let masked = "";
            if (cleanDigits.length > 0) {
              masked = "+7(";
              masked += cleanDigits.slice(0, 3);
              if (cleanDigits.length >= 3) masked += ")";
              if (cleanDigits.length > 3) masked += cleanDigits.slice(3, 6);
              if (cleanDigits.length >= 6) masked += "-";
              if (cleanDigits.length > 6) masked += cleanDigits.slice(6, 8);
              if (cleanDigits.length >= 8) masked += "-";
              if (cleanDigits.length > 8) masked += cleanDigits.slice(8, 10);
            }
            
            setForm((prev) => ({ ...prev, phone: masked }));
            
            // Устанавливаем курсор в правильное положение после форматирования
            setTimeout(() => {
              // Вычисляем позицию курсора на основе количества цифр до удаленной позиции
              const digitsCount = newDigitsBefore.length;
              let newPos = 3; // Позиция после "+7("
              if (digitsCount > 0) newPos += digitsCount;
              if (digitsCount >= 3) newPos += 1; // Скобка ")"
              if (digitsCount >= 6) newPos += 1; // Первый дефис
              if (digitsCount >= 8) newPos += 1; // Второй дефис
              input.setSelectionRange(newPos, newPos);
            }, 0);
          }
        }
      }
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    // Убираем все ошибки при изменении любого поля
    if (Object.keys(fieldErrors).length > 0) {
      setFieldErrors({});
      setErrorMessages({});
    }
    
    if (field === "phone") {
      // Если пользователь вводит только "+", сразу показываем "+7"
      if (value === "+") {
        setForm((prev) => ({ ...prev, phone: "+7" }));
        return;
      }
      
      // Если пользователь вводит только "7", сразу показываем "+7"
      if (value === "7") {
        setForm((prev) => ({ ...prev, phone: "+7" }));
        return;
      }
      
      // Проверяем, начинается ли значение с "+7"
      const startsWithPlus7 = value.startsWith("+7");
      
      // Извлекаем все цифры
      const digits = value.replace(/\D/g, "");
      
      let phoneDigits: string;
      if (startsWithPlus7) {
        // Если начинается с "+7", убираем первую семерку (так как "+7" уже будет добавлен)
        phoneDigits = digits.startsWith("7") ? digits.slice(1) : digits;
      } else if (digits.startsWith("7")) {
        // Если начинается с "7" без "+", заменяем на "+7"
        phoneDigits = digits.slice(1);
      } else {
        // Если не начинается ни с "+7", ни с "7", просто используем цифры (добавим "+7" автоматически)
        phoneDigits = digits;
      }
      
      const cleanDigits = phoneDigits.slice(0, 10);
      let masked = "";
      if (cleanDigits.length > 0) {
        masked = "+7(";
        masked += cleanDigits.slice(0, 3);
        if (cleanDigits.length >= 3) masked += ")";
        if (cleanDigits.length > 3) masked += cleanDigits.slice(3, 6);
        if (cleanDigits.length >= 6) masked += "-";
        if (cleanDigits.length > 6) masked += cleanDigits.slice(6, 8);
        if (cleanDigits.length >= 8) masked += "-";
        if (cleanDigits.length > 8) masked += cleanDigits.slice(8, 10);
      } else if (value.startsWith("+7") || value.startsWith("+")) {
        // Если введено "+7" или "+" но нет цифр, показываем "+7"
        masked = "+7";
      }
      setForm((prev) => ({ ...prev, phone: masked }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "login" ? "register" : "login"));
    setIsToastVisible(false);
    setFieldErrors({}); // Очищаем ошибки при переключении режима
    setErrorMessages({}); // Очищаем сообщения об ошибках
  };

  const canSubmit = useMemo(() => {
    if (loading) return false;
    if (mode === "login") {
      return Boolean(form.email && form.password);
    }
    // Кнопка активна, если введен хотя бы один символ в любом поле
    return Boolean(
      form.email || 
      form.password || 
      form.confirmPassword ||
      form.firstName ||
      form.lastName ||
      form.company ||
      form.phone
    );
  }, [form, mode, loading]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsToastVisible(false);

    if (mode === "register") {
      const errors: Record<string, boolean> = {};
      const messages: Record<string, string> = {};
      let hasErrors = false;
      
      // Проверка всех обязательных полей
      if (!form.firstName || form.firstName.trim() === "") {
        errors.firstName = true;
        messages.firstName = "Поле имени обязательно для заполнения";
        hasErrors = true;
      }
      
      if (!form.lastName || form.lastName.trim() === "") {
        errors.lastName = true;
        messages.lastName = "Поле фамилии обязательно для заполнения";
        hasErrors = true;
      }
      
      if (!form.company || form.company.trim() === "") {
        errors.company = true;
        messages.company = "Поле компании обязательно для заполнения";
        hasErrors = true;
      }
      
      // Проверка телефона
      const phoneDigits = form.phone.replace(/\D/g, "");
      const phoneDigitsWithout7 = phoneDigits.startsWith("7") ? phoneDigits.slice(1) : phoneDigits;
      if (phoneDigitsWithout7.length < 10) {
        errors.phone = true;
        messages.phone = "Введите корректный номер телефона";
        hasErrors = true;
      }
      
      if (!form.email || form.email.trim() === "") {
        errors.email = true;
        messages.email = "Поле email обязательно для заполнения";
        hasErrors = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = true;
        messages.email = "Введите корректный email адрес";
        hasErrors = true;
      }
      
      if (!form.password || form.password.trim() === "") {
        errors.password = true;
        messages.password = "Поле пароля обязательно для заполнения";
        hasErrors = true;
      } else if (!passwordRegex.test(form.password)) {
        errors.password = true;
        messages.password = "Пароль должен содержать минимум 8 символов, одну заглавную букву, одну строчную букву и один спецсимвол";
        hasErrors = true;
      }
      
      if (!form.confirmPassword || form.confirmPassword.trim() === "") {
        errors.confirmPassword = true;
        messages.confirmPassword = "Подтвердите пароль";
        hasErrors = true;
      } else if (form.password !== form.confirmPassword) {
        errors.confirmPassword = true;
        messages.confirmPassword = "Пароли не совпадают";
        hasErrors = true;
      }
      
      // Устанавливаем ошибки полей
      if (hasErrors) {
        setFieldErrors(errors);
        setErrorMessages(messages);
        return;
      }
      
      // Очищаем ошибки полей перед отправкой
      setFieldErrors({});
      setErrorMessages({});
    }

    setLoading(true);
    try {
      if (mode === "login") {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });
        if (signInError) throw signInError;
        showSuccessToast("Вход выполнен успешно");
      } else {
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            data: {
              firstName: form.firstName.trim(),
              lastName: form.lastName.trim(),
              company: form.company.trim(),
              phone: form.phone,
            },
          },
        });
        if (signUpError) throw signUpError;
        
        // Сохраняем метаданные пользователя в таблицу metadata через API
        if (signUpData?.user?.id) {
          try {
            if (
              form.firstName?.trim() &&
              form.lastName?.trim() &&
              form.company?.trim() &&
              form.phone?.trim()
            ) {
              const response = await fetch("/api/metadata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  uid: signUpData.user.id,
                  name: form.firstName.trim(),
                  surname: form.lastName.trim(),
                  company: form.company.trim(),
                  phone: form.phone.trim(),
                }),
              });

              if (!response.ok) {
                // Игнорируем ошибки сохранения метаданных
              }
            }
          } catch (metadataError) {
            // Игнорируем ошибки сохранения метаданных
          }

          // Отправляем вебхук с UUID пользователя после успешной регистрации
          try {
            await fetch("https://rueleven.ru/webhook/373bb6fa-8fae-49fd-83b6-b503e7f286c4", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ uuid: signUpData.user.id }),
            });
          } catch (webhookError) {
            // Игнорируем ошибки вебхука, но не прерываем процесс регистрации
          }
        }
        
        showSuccessToast("Регистрация выполнена успешно");
      }

      document.cookie = "app-auth=1; path=/; max-age=604800";

      router.push("/");
    } catch (err) {
      const message =
        typeof err === "object" && err && "message" in err
          ? String((err as { message?: string }).message)
          : "Не удалось выполнить запрос";
      showErrorToast(translateError(message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-auto mt-16 w-full max-w-md rounded-3xl border border-black/10 bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-2xl font-semibold text-black">
          {mode === "login" ? "Вход в сервис" : "Регистрация"}
        </h1>

        {mode === "register" && (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
            <p className="text-sm font-medium text-amber-800">
              Регистрация временно недоступна
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {mode === "register" && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Имя"
                  value={form.firstName}
                  onChange={(event) =>
                    handleChange("firstName", event.currentTarget.value)
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition ${
                    fieldErrors.firstName
                      ? "border-red-500 focus:border-red-600"
                      : "border-black/15 focus:border-black"
                  }`}
                />
                {fieldErrors.firstName && errorMessages.firstName && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errorMessages.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Фамилия"
                  value={form.lastName}
                  onChange={(event) =>
                    handleChange("lastName", event.currentTarget.value)
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition ${
                    fieldErrors.lastName
                      ? "border-red-500 focus:border-red-600"
                      : "border-black/15 focus:border-black"
                  }`}
                />
                {fieldErrors.lastName && errorMessages.lastName && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errorMessages.lastName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Компания"
                  value={form.company}
                  onChange={(event) =>
                    handleChange("company", event.currentTarget.value)
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition ${
                    fieldErrors.company
                      ? "border-red-500 focus:border-red-600"
                      : "border-black/15 focus:border-black"
                  }`}
                />
                {fieldErrors.company && errorMessages.company && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errorMessages.company}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="+7(XXX)XXX-XX-XX"
                  value={form.phone}
                  onChange={(event) =>
                    handleChange("phone", event.currentTarget.value)
                  }
                  onKeyDown={handlePhoneKeyDown}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition ${
                    fieldErrors.phone
                      ? "border-red-500 focus:border-red-600"
                      : "border-black/15 focus:border-black"
                  }`}
                />
                {fieldErrors.phone && errorMessages.phone && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errorMessages.phone}
                  </p>
                )}
              </div>
            </>
          )}

          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(event) =>
                handleChange("email", event.currentTarget.value)
              }
              className={`w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition ${
                fieldErrors.email
                  ? "border-red-500 focus:border-red-600"
                  : "border-black/15 focus:border-black"
              }`}
            />
            {fieldErrors.email && errorMessages.email && (
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errorMessages.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Пароль"
              value={form.password}
              onChange={(event) =>
                handleChange("password", event.currentTarget.value)
              }
              className={`w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition ${
                fieldErrors.password
                  ? "border-red-500 focus:border-red-600"
                  : "border-black/15 focus:border-black"
              }`}
            />
            {fieldErrors.password && errorMessages.password && (
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errorMessages.password}
              </p>
            )}
          </div>

          {mode === "register" && (
            <div>
              <input
                type="password"
                placeholder="Подтвердите пароль"
                value={form.confirmPassword}
                onChange={(event) =>
                  handleChange("confirmPassword", event.currentTarget.value)
                }
                className={`w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition ${
                  fieldErrors.confirmPassword
                    ? "border-red-500 focus:border-red-600"
                    : "border-black/15 focus:border-black"
                }`}
              />
              {fieldErrors.confirmPassword && errorMessages.confirmPassword && (
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {errorMessages.confirmPassword}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={mode === "register" || !canSubmit}
            className="w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
          {loading
            ? mode === "login"
              ? "Выполняем вход..."
              : "Создаём аккаунт..."
            : mode === "login"
            ? "Войти"
            : "Зарегистрироваться"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-black">
          {mode === "login" ? (
            <button
              type="button"
              onClick={toggleMode}
              className="font-medium underline-offset-4 hover:underline"
            >
              Нет аккаунта? Зарегистрироваться
            </button>
          ) : (
            <button
              type="button"
              onClick={toggleMode}
              className="font-medium underline-offset-4 hover:underline"
            >
              Уже есть аккаунт? Войти
            </button>
          )}
        </div>
      </div>

      <Toast
        message={toastMessage || ""}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
        type={toastType}
      />
    </>
  );
}

