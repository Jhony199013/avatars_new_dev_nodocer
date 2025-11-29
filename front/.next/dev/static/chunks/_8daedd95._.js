(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://base.lect-gen.ru") || "";
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzYzNDEzMjAwLCJleHAiOjE5MjExNzk2MDB9.idPB37uPfkR0tioORf3PqSuFUCPp6ZDTrdBWtUou_9Y") || "";
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey) : "TURBOPACK unreachable";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Toast({ message, isVisible, onClose, type = "error" }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            if (!isVisible) return;
            const timer = setTimeout(onClose, 5000);
            return ({
                "Toast.useEffect": ()=>clearTimeout(timer)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        isVisible,
        onClose
    ]);
    if (!isVisible || !message) {
        return null;
    }
    const baseStyles = "fixed bottom-6 right-6 z-50 flex max-w-sm items-start gap-3 rounded-lg border px-4 py-3 shadow-lg animate-slide-in-right";
    const typeStyles = type === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-green-200 bg-green-50 text-green-800";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${baseStyles} ${typeStyles}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-sm font-medium",
                children: message
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/Toast.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClose,
                className: "text-gray-400 transition hover:text-gray-600",
                "aria-label": "Закрыть уведомление",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/Toast.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/Toast.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/Toast.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/Toast.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/errorTranslations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translateError",
    ()=>translateError
]);
const translations = [
    {
        matchers: [
            "invalid login credentials",
            "invalid credentials",
            "invalid email or password"
        ],
        message: "Неверный email или пароль"
    },
    {
        matchers: [
            "email not confirmed",
            "email confirmation required"
        ],
        message: "Email не подтверждён. Проверьте почту."
    },
    {
        matchers: [
            "user not found"
        ],
        message: "Пользователь не найден."
    },
    {
        matchers: [
            "user already registered",
            "already registered",
            "email already"
        ],
        message: "Пользователь с таким email уже зарегистрирован."
    },
    {
        matchers: [
            "password too short",
            "at least 8 characters",
            "minimum length"
        ],
        message: "Пароль слишком короткий. Минимум 8 символов."
    },
    {
        matchers: [
            "weak password"
        ],
        message: "Пароль слишком слабый."
    },
    {
        matchers: [
            "invalid email",
            "malformed email"
        ],
        message: "Некорректный email адрес."
    },
    {
        matchers: [
            "network error",
            "fetch error"
        ],
        message: "Ошибка сети. Проверьте подключение к интернету."
    },
    {
        matchers: [
            "rate limit",
            "too many requests"
        ],
        message: "Слишком много запросов. Попробуйте позже."
    },
    {
        matchers: [
            "server error",
            "internal error"
        ],
        message: "Ошибка сервера. Попробуйте позже."
    }
];
function translateError(message) {
    if (!message) {
        return "Произошла ошибка. Попробуйте ещё раз.";
    }
    const normalized = message.toLowerCase();
    const matched = translations.find(({ matchers })=>matchers.some((matcher)=>normalized.includes(matcher)));
    return matched ? matched.message : message;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/AuthCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthCard",
    ()=>AuthCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$errorTranslations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/errorTranslations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
function AuthCard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isToastVisible, setIsToastVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastType, setToastType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("error");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        company: "",
        phone: ""
    });
    const showErrorToast = (message)=>{
        setToastMessage(message);
        setToastType("error");
        setIsToastVisible(true);
    };
    const showSuccessToast = (message)=>{
        setToastMessage(message);
        setToastType("success");
        setIsToastVisible(true);
    };
    const handleChange = (field, value)=>{
        if (field === "phone") {
            const digits = value.replace(/\D/g, "").slice(0, 10);
            let masked = "";
            if (digits.length > 0) {
                masked = "+7(";
                masked += digits.slice(0, 3);
                if (digits.length >= 3) masked += ")";
                if (digits.length > 3) masked += digits.slice(3, 6);
                if (digits.length >= 6) masked += "-";
                if (digits.length > 6) masked += digits.slice(6, 8);
                if (digits.length >= 8) masked += "-";
                if (digits.length > 8) masked += digits.slice(8, 10);
            }
            setForm((prev)=>({
                    ...prev,
                    phone: masked
                }));
        } else {
            setForm((prev)=>({
                    ...prev,
                    [field]: value
                }));
        }
    };
    const toggleMode = ()=>{
        setMode((prev)=>prev === "login" ? "register" : "login");
        setIsToastVisible(false);
    };
    const canSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthCard.useMemo[canSubmit]": ()=>{
            if (loading) return false;
            if (mode === "login") {
                return Boolean(form.email && form.password);
            }
            return Boolean(form.email && form.password && form.confirmPassword) && passwordRegex.test(form.password) && form.password === form.confirmPassword;
        }
    }["AuthCard.useMemo[canSubmit]"], [
        form,
        mode,
        loading
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setIsToastVisible(false);
        if (mode === "register") {
            if (form.password !== form.confirmPassword) {
                showErrorToast("Пароли не совпадают");
                return;
            }
            if (!passwordRegex.test(form.password)) {
                showErrorToast("Пароль: ≥8 символов, минимум одна заглавная, одна строчная и один спецсимвол");
                return;
            }
        }
        setLoading(true);
        try {
            if (mode === "login") {
                const { error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                    email: form.email,
                    password: form.password
                });
                if (signInError) throw signInError;
                showSuccessToast("Вход выполнен успешно");
            } else {
                const { data: signUpData, error: signUpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                    email: form.email,
                    password: form.password,
                    options: {
                        data: {
                            firstName: form.firstName || null,
                            lastName: form.lastName || null,
                            company: form.company || null,
                            phone: form.phone || null
                        }
                    }
                });
                if (signUpError) throw signUpError;
                // Отправляем вебхук с UUID пользователя после успешной регистрации
                if (signUpData?.user?.id) {
                    try {
                        await fetch("https://rueleven.ru/webhook/373bb6fa-8fae-49fd-83b6-b503e7f286c4", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                uuid: signUpData.user.id
                            })
                        });
                    } catch (webhookError) {
                        // Логируем ошибку вебхука, но не прерываем процесс регистрации
                        console.error("[AuthCard] Ошибка отправки вебхука регистрации:", webhookError);
                    }
                }
                showSuccessToast("Регистрация выполнена успешно");
            }
            document.cookie = "app-auth=1; path=/; max-age=604800";
            router.push("/");
        } catch (err) {
            const message = typeof err === "object" && err && "message" in err ? String(err.message) : "Не удалось выполнить запрос";
            showErrorToast((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$errorTranslations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateError"])(message));
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mt-16 w-full max-w-md rounded-3xl border border-black/10 bg-white p-8 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-6 text-center text-2xl font-semibold text-black",
                        children: mode === "login" ? "Вход в сервис" : "Регистрация"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AuthCard.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            mode === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Имя",
                                        value: form.firstName,
                                        onChange: (event)=>handleChange("firstName", event.currentTarget.value),
                                        className: "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Фамилия (необязательно)",
                                        value: form.lastName,
                                        onChange: (event)=>handleChange("lastName", event.currentTarget.value),
                                        className: "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Компания (необязательно)",
                                        value: form.company,
                                        onChange: (event)=>handleChange("company", event.currentTarget.value),
                                        className: "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        placeholder: "+7(XXX)XXX-XX-XX",
                                        value: form.phone,
                                        onChange: (event)=>handleChange("phone", event.currentTarget.value),
                                        className: "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "E-mail",
                                value: form.email,
                                onChange: (event)=>handleChange("email", event.currentTarget.value),
                                required: true,
                                className: "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                placeholder: "Пароль",
                                value: form.password,
                                onChange: (event)=>handleChange("password", event.currentTarget.value),
                                required: true,
                                className: "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            mode === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                placeholder: "Подтвердите пароль",
                                value: form.confirmPassword,
                                onChange: (event)=>handleChange("confirmPassword", event.currentTarget.value),
                                required: true,
                                className: "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !canSubmit,
                                className: "w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-40",
                                children: loading ? mode === "login" ? "Выполняем вход..." : "Создаём аккаунт..." : mode === "login" ? "Войти" : "Зарегистрироваться"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/AuthCard.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/components/AuthCard.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-center text-sm text-black",
                        children: mode === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: toggleMode,
                            className: "font-medium underline-offset-4 hover:underline",
                            children: "Нет аккаунта? Зарегистрироваться"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/components/AuthCard.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: toggleMode,
                            className: "font-medium underline-offset-4 hover:underline",
                            children: "Уже есть аккаунт? Войти"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/components/AuthCard.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AuthCard.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/AuthCard.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: toastMessage || "",
                isVisible: isToastVisible,
                onClose: ()=>setIsToastVisible(false),
                type: toastType
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AuthCard.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AuthCard, "IyZCwuhYABrKJjiaiatgV2JhR3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthCard;
var _c;
__turbopack_context__.k.register(_c, "AuthCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/LogoutModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoutModal",
    ()=>LogoutModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LogoutModal({ isOpen, onClose }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLoggingOut, setIsLoggingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        setIsLoggingOut(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            document.cookie = "app-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            router.push("/");
            onClose();
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        } finally{
            setIsLoggingOut(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Выход"
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoutModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 text-gray-600",
                    children: "Вы действительно хотите выйти из аккаунта?"
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoutModal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isLoggingOut,
                            className: "flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                            children: "Отмена"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LogoutModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleLogout,
                            disabled: isLoggingOut,
                            className: "flex-1 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50",
                            children: isLoggingOut ? "Выходим..." : "Выйти"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LogoutModal.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/LogoutModal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/LogoutModal.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/LogoutModal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(LogoutModal, "vDdgfpELN2BxUehSwJzpqwfk/ig=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LogoutModal;
var _c;
__turbopack_context__.k.register(_c, "LogoutModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/prefetchAvatars.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearPrefetchCache",
    ()=>clearPrefetchCache,
    "getPrefetchedAvatars",
    ()=>getPrefetchedAvatars,
    "prefetchAvatarsData",
    ()=>prefetchAvatarsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
;
// Кеш для prefetch данных
let prefetchCache = {
    data: null,
    timestamp: 0,
    userId: null
};
const CACHE_DURATION = 30000; // 30 секунд
async function prefetchAvatarsData() {
    try {
        // Проверяем кеш
        const now = Date.now();
        if (prefetchCache.data && prefetchCache.userId && now - prefetchCache.timestamp < CACHE_DURATION) {
            return; // Данные уже в кеше и свежие
        }
        // Получаем пользователя
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            return;
        }
        // Проверяем, не загружаем ли мы те же данные
        if (prefetchCache.userId === user.id && now - prefetchCache.timestamp < CACHE_DURATION) {
            return;
        }
        // Загружаем данные в фоне
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", user.id).order("created_at", {
            ascending: false
        });
        if (!error && data) {
            prefetchCache = {
                data,
                timestamp: now,
                userId: user.id
            };
        }
    } catch (error) {
        // Игнорируем ошибки prefetch - это не критично
        console.debug("[prefetch] Ошибка prefetch аватаров:", error);
    }
}
function getPrefetchedAvatars() {
    const now = Date.now();
    if (prefetchCache.data && now - prefetchCache.timestamp < CACHE_DURATION) {
        return prefetchCache.data;
    }
    return null;
}
function clearPrefetchCache() {
    prefetchCache = {
        data: null,
        timestamp: 0,
        userId: null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LogoutModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prefetchAvatars.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navLinks = [
    {
        href: "/",
        label: "Главная"
    },
    {
        href: "/avatars",
        label: "Аватары"
    },
    {
        href: "/voices",
        label: "Голоса"
    },
    {
        href: "/material",
        label: "Материал"
    }
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "h-16 w-full bg-white shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-full w-full max-w-[1350px] items-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-1 items-center gap-8",
                            children: navLinks.map(({ href, label })=>{
                                const isActive = pathname === href;
                                const handleMouseEnter = ()=>{
                                    // Prefetch данные для страницы аватаров при наведении
                                    if (href === "/avatars" && !isActive) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefetchAvatarsData"])();
                                    }
                                };
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    onMouseEnter: handleMouseEnter,
                                    prefetch: true,
                                    className: `text-lg font-semibold transition ${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-800"}`,
                                    children: label
                                }, href, false, {
                                    fileName: "[project]/components/ui/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Header.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-none justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsLogoutModalOpen(true),
                                className: "rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800",
                                children: "Выйти"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/Header.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Header.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/Header.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Header.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoutModal"], {
                isOpen: isLogoutModalOpen,
                onClose: ()=>setIsLogoutModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/ui/Header.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "o6UmqZPMPAz6YWHcQt9y55jT2hk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CosmoLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CosmoLoader",
    ()=>CosmoLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CosmoLoader({ ariaLabel = "Загрузка..." }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 animate-spin rounded-full border-[3px] border-transparent shadow-[0_0_18px_rgba(255,192,76,0.55)]",
                        style: {
                            borderTopColor: "#FFB347",
                            borderRightColor: "#FFC94C"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/CosmoLoader.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute h-3 w-3 rounded-full bg-[#FFB347] opacity-70 blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/CosmoLoader.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/CosmoLoader.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: ariaLabel
            }, void 0, false, {
                fileName: "[project]/components/ui/CosmoLoader.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/CosmoLoader.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = CosmoLoader;
var _c;
__turbopack_context__.k.register(_c, "CosmoLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/avatars/servers/data:69c0a9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404ef6fa38aced2d34bba744ff0fb1ae23c6121202":"DeletePhotoAvatar"},"app/avatars/servers/DeletePhotoAvatar.ts",""] */ __turbopack_context__.s([
    "DeletePhotoAvatar",
    ()=>DeletePhotoAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var DeletePhotoAvatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404ef6fa38aced2d34bba744ff0fb1ae23c6121202", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "DeletePhotoAvatar"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vRGVsZXRlUGhvdG9BdmF0YXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XHJcbmNvbnN0IGhleWdlbkFwaUtleSA9IHByb2Nlc3MuZW52LkhFWUdFTl9BUElfS0VZO1xyXG5cclxuaWYgKCFzdXBhYmFzZVVybCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCDQvdC1INC30LDQtNCw0L1cIik7XHJcbn1cclxuXHJcbmlmICghc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkg0L3QtSDQt9Cw0LTQsNC9XCIpO1xyXG59XHJcblxyXG5jb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZVNlcnZpY2VSb2xlS2V5KTtcclxuXHJcbmludGVyZmFjZSBEZWxldGVQaG90b0F2YXRhcklucHV0IHtcclxuICB1aWQ6IHN0cmluZztcclxuICByZWNvcmRJZD86IHN0cmluZyB8IG51bGw7XHJcbiAgZ3JvdXBJZD86IHN0cmluZyB8IG51bGw7XHJcbiAgaW1hZ2VLZXk/OiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsZXRlUGhvdG9BdmF0YXJSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZyb21IZXlnZW4oZ3JvdXBJZD86IHN0cmluZyB8IG51bGwpIHtcclxuICBpZiAoIWdyb3VwSWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghaGV5Z2VuQXBpS2V5KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIRVlHRU5fQVBJX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLmhleWdlbi5jb20vdjIvcGhvdG9fYXZhdGFyX2dyb3VwLyR7Z3JvdXBJZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtQXBpLUtleVwiOiBoZXlnZW5BcGlLZXksXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYNCd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LDQstCw0YLQsNGAINCyIEhleUdlbjogJHttZXNzYWdlIHx8IHJlc3BvbnNlLnN0YXR1c1RleHR9YFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBEZWxldGVQaG90b0F2YXRhcih7XHJcbiAgdWlkLFxyXG4gIHJlY29yZElkLFxyXG4gIGdyb3VwSWQsXHJcbiAgaW1hZ2VLZXksXHJcbn06IERlbGV0ZVBob3RvQXZhdGFySW5wdXQpOiBQcm9taXNlPERlbGV0ZVBob3RvQXZhdGFyUmVzdWx0PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghdWlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10L1cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVjb3JkSWQgJiYgIWdyb3VwSWQgJiYgIWltYWdlS2V5KSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQndC10YIg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YDQsCDQt9Cw0L/QuNGB0LhcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRlbGV0ZUZyb21IZXlnZW4oZ3JvdXBJZCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VBZG1pbi5mcm9tKFwicGhvdG9fYXZhdGFyc1wiKS5kZWxldGUoKS5lcShcInVpZFwiLCB1aWQpO1xyXG5cclxuICAgIGlmIChyZWNvcmRJZCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKFwiaWRcIiwgcmVjb3JkSWQpO1xyXG4gICAgfSBlbHNlIGlmIChncm91cElkKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJncm91cF9pZFwiLCBncm91cElkKTtcclxuICAgIH0gZWxzZSBpZiAoaW1hZ2VLZXkpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcShcImltYWdlX2tleVwiLCBpbWFnZUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwi0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LBcIjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJbRGVsZXRlUGhvdG9BdmF0YXJdXCIsIG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1UQXlEc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/avatars/servers/data:e88a97 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406d5b6e083f7879367c2bfcb42f10d02bcd7af836":"UpdateAvatarName"},"app/avatars/servers/UpdateAvatarName.ts",""] */ __turbopack_context__.s([
    "UpdateAvatarName",
    ()=>UpdateAvatarName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var UpdateAvatarName = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406d5b6e083f7879367c2bfcb42f10d02bcd7af836", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UpdateAvatarName"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vVXBkYXRlQXZhdGFyTmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZVNlcnZpY2VSb2xlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWTtcclxuXHJcbmlmICghc3VwYWJhc2VVcmwpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwg0L3QtSDQt9Cw0LTQsNC9XCIpO1xyXG59XHJcblxyXG5pZiAoIXN1cGFiYXNlU2VydmljZVJvbGVLZXkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZINC90LUg0LfQsNC00LDQvVwiKTtcclxufVxyXG5cclxuY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSk7XHJcblxyXG5pbnRlcmZhY2UgVXBkYXRlQXZhdGFyTmFtZUlucHV0IHtcclxuICB1aWQ6IHN0cmluZztcclxuICByZWNvcmRJZDogc3RyaW5nO1xyXG4gIG5ld05hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZUF2YXRhck5hbWVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGRhdGVBdmF0YXJOYW1lKHtcclxuICB1aWQsXHJcbiAgcmVjb3JkSWQsXHJcbiAgbmV3TmFtZSxcclxufTogVXBkYXRlQXZhdGFyTmFtZUlucHV0KTogUHJvbWlzZTxVcGRhdGVBdmF0YXJOYW1lUmVzdWx0PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghdWlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10L1cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVjb3JkSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIklEINC30LDQv9C40YHQuCDQvdC1INGD0LrQsNC30LDQvVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFuZXdOYW1lIHx8ICFuZXdOYW1lLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi0JjQvNGPINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LxcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyaW1tZWROYW1lID0gbmV3TmFtZS50cmltKCk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxyXG4gICAgICAuZnJvbShcInBob3RvX2F2YXRhcnNcIilcclxuICAgICAgLnVwZGF0ZSh7IG5hbWU6IHRyaW1tZWROYW1lIH0pXHJcbiAgICAgIC5lcShcImlkXCIsIHJlY29yZElkKVxyXG4gICAgICAuZXEoXCJ1aWRcIiwgdWlkKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9XHJcbiAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCLQndC10LjQt9Cy0LXRgdGC0L3QsNGPINC+0YjQuNCx0LrQsFwiO1xyXG4gICAgY29uc29sZS5lcnJvcihcIltVcGRhdGVBdmF0YXJOYW1lXVwiLCBtZXNzYWdlKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogbWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBNEJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/avatars/components/DeleteAvatarModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteAvatarModal",
    ()=>DeleteAvatarModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function DeleteAvatarModal({ isOpen, onClose, onConfirm, avatarName, isDeleting = false }) {
    if (!isOpen) return null;
    const handleConfirm = async ()=>{
        await onConfirm();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Удаление аватара"
                }, void 0, false, {
                    fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 text-gray-600",
                    children: [
                        "Вы действительно хотите удалить аватар «",
                        avatarName,
                        "»?"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isDeleting,
                            className: "flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                            children: "Отмена"
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleConfirm,
                            disabled: isDeleting,
                            className: "flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50",
                            children: isDeleting ? "Удаляем..." : "Удалить"
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = DeleteAvatarModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteAvatarModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/avatars/components/EditAvatarModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditAvatarModal",
    ()=>EditAvatarModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function EditAvatarModal({ isOpen, onClose, onConfirm, currentName, isSaving = false }) {
    _s();
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditAvatarModal.useEffect": ()=>{
            if (isOpen) {
                setNewName(currentName);
            }
        }
    }["EditAvatarModal.useEffect"], [
        isOpen,
        currentName
    ]);
    if (!isOpen) return null;
    const handleConfirm = async ()=>{
        if (!newName.trim()) {
            return;
        }
        await onConfirm(newName.trim());
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !isSaving && newName.trim()) {
            handleConfirm();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Редактировать имя"
                }, void 0, false, {
                    fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: newName,
                    onChange: (e)=>setNewName(e.target.value),
                    onKeyDown: handleKeyDown,
                    disabled: isSaving,
                    placeholder: "Введите новое имя",
                    className: "mb-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 outline-none transition focus:border-gray-400 disabled:opacity-50",
                    autoFocus: true
                }, void 0, false, {
                    fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isSaving,
                            className: "flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                            children: "Отмена"
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleConfirm,
                            disabled: isSaving || !newName.trim(),
                            className: "flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50",
                            children: isSaving ? "Сохраняем..." : "Сохранить"
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(EditAvatarModal, "9UJ5j6np+431XQnPNlxtD6qpFmg=");
_c = EditAvatarModal;
var _c;
__turbopack_context__.k.register(_c, "EditAvatarModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/DashboardAvatarCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardAvatarCard",
    ()=>DashboardAvatarCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$69c0a9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/avatars/servers/data:69c0a9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$e88a97__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/avatars/servers/data:e88a97 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$DeleteAvatarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/DeleteAvatarModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$EditAvatarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/EditAvatarModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DashboardAvatarCard({ avatar, currentUserId, onAvatarChanged }) {
    _s();
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeMenuTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const key = avatar.id ?? avatar.hey_gen_id ?? avatar.group_id ?? `${avatar.uid}-${avatar.image_key}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAvatarCard.useEffect": ()=>{
            const handleClickOutside = {
                "DashboardAvatarCard.useEffect.handleClickOutside": (event)=>{
                    if (openMenu && menuRef.current && !menuRef.current.contains(event.target)) {
                        setOpenMenu(false);
                    }
                }
            }["DashboardAvatarCard.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "DashboardAvatarCard.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["DashboardAvatarCard.useEffect"];
        }
    }["DashboardAvatarCard.useEffect"], [
        openMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardAvatarCard.useEffect": ()=>{
            return ({
                "DashboardAvatarCard.useEffect": ()=>{
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                    }
                }
            })["DashboardAvatarCard.useEffect"];
        }
    }["DashboardAvatarCard.useEffect"], []);
    const handleMenuClick = (event)=>{
        event.stopPropagation();
        setOpenMenu(!openMenu);
    };
    const handleEditClick = ()=>{
        setOpenMenu(false);
        setIsEditModalOpen(true);
    };
    const handleDeleteClick = ()=>{
        setOpenMenu(false);
        if (!currentUserId) {
            alert("Не удалось определить пользователя");
            return;
        }
        setIsDeleteModalOpen(true);
    };
    const handleEditConfirm = async (newName)=>{
        if (!currentUserId || !avatar.id) {
            return;
        }
        try {
            setEditingId(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$e88a97__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateAvatarName"])({
                uid: currentUserId,
                recordId: avatar.id,
                newName
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось обновить имя");
            }
            setIsEditModalOpen(false);
            await onAvatarChanged?.();
        } catch (error) {
            console.error("[DashboardAvatarCard] Ошибка редактирования:", error);
            alert(`Ошибка при редактировании: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setEditingId(false);
        }
    };
    const handleDeleteConfirm = async ()=>{
        if (!currentUserId) {
            return;
        }
        try {
            setDeletingId(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$69c0a9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["DeletePhotoAvatar"])({
                uid: currentUserId,
                recordId: avatar.id ?? null,
                groupId: avatar.group_id ?? avatar.hey_gen_id ?? null,
                imageKey: avatar.image_key
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось удалить аватар");
            }
            setIsDeleteModalOpen(false);
            await onAvatarChanged?.();
        } catch (error) {
            console.error("[DashboardAvatarCard] Ошибка удаления:", error);
            alert(`Ошибка при удалении: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setDeletingId(false);
        }
    };
    const showMenuButton = hovered || openMenu;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "group relative rounded-3xl border border-gray-100 bg-white p-4 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
                onMouseLeave: ()=>{
                    setHovered(false);
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                    }
                    closeMenuTimeoutRef.current = setTimeout(()=>{
                        if (openMenu) {
                            setOpenMenu(false);
                        }
                    }, 500);
                },
                onMouseEnter: ()=>{
                    setHovered(true);
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                        closeMenuTimeoutRef.current = null;
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-center text-lg font-semibold text-gray-900 line-clamp-2",
                        children: avatar.name
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[3/4] w-full overflow-hidden rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: avatar.photo,
                                alt: `Фото аватара ${avatar.name}`,
                                fill: true,
                                sizes: "(min-width: 1280px) 16vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
                                className: "object-contain",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-3 top-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleMenuClick,
                                        className: `flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md transition-all duration-200 hover:bg-white hover:text-gray-900 ${showMenuButton ? "opacity-100" : "opacity-0"}`,
                                        "aria-label": "Меню",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2.5,
                                            className: "h-4 w-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "5",
                                                    cy: "12",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "19",
                                                    cy: "12",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    openMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: menuRef,
                                        className: "absolute right-0 top-10 z-50 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleEditClick,
                                                disabled: editingId || deletingId,
                                                className: "w-full rounded-t-lg px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                                                children: "Редактировать"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleDeleteClick,
                                                disabled: editingId || deletingId,
                                                className: "w-full rounded-b-lg px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-50",
                                                children: "Удалить"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    avatar.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-center text-xs text-gray-400",
                        children: new Intl.DateTimeFormat("ru-RU", {
                            dateStyle: "medium",
                            timeStyle: "short"
                        }).format(new Date(avatar.created_at))
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$DeleteAvatarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteAvatarModal"], {
                isOpen: isDeleteModalOpen,
                onClose: ()=>setIsDeleteModalOpen(false),
                onConfirm: handleDeleteConfirm,
                avatarName: avatar.name,
                isDeleting: deletingId
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$EditAvatarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditAvatarModal"], {
                isOpen: isEditModalOpen,
                onClose: ()=>setIsEditModalOpen(false),
                onConfirm: handleEditConfirm,
                currentName: avatar.name,
                isSaving: editingId
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardAvatarCard.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DashboardAvatarCard, "ygXQAd+85fyvy/Y0Wmpb0WP56/4=");
_c = DashboardAvatarCard;
var _c;
__turbopack_context__.k.register(_c, "DashboardAvatarCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/avatars/servers/data:7a96d0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40cd6299375834d156b90e590d5d7df8fc8ed2c79b":"UploadAvatar"},"app/avatars/servers/UploadAvatar.ts",""] */ __turbopack_context__.s([
    "UploadAvatar",
    ()=>UploadAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var UploadAvatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40cd6299375834d156b90e590d5d7df8fc8ed2c79b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UploadAvatar"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vVXBsb2FkQXZhdGFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGhvdG9BdmF0YXJSb3cge1xuICBpZD86IHN0cmluZztcbiAgdWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGhvdG86IHN0cmluZztcbiAgaW1hZ2Vfa2V5OiBzdHJpbmc7XG4gIGhleV9nZW5faWQ6IHN0cmluZyB8IG51bGw7XG4gIGdyb3VwX2lkOiBzdHJpbmcgfCBudWxsO1xuICBzdGF0dXM6IFwiZG9uZVwiIHwgXCJlcnJvclwiO1xuICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVXBsb2FkQXZhdGFyU3VjY2VzcyB7XG4gIHN1Y2Nlc3M6IHRydWU7XG4gIGF2YXRhcjogUGhvdG9BdmF0YXJSb3c7XG59XG5cbmludGVyZmFjZSBVcGxvYWRBdmF0YXJGYWlsdXJlIHtcbiAgc3VjY2VzczogZmFsc2U7XG4gIGVycm9yOiBzdHJpbmc7XG59XG5cbnR5cGUgVXBsb2FkQXZhdGFyUmVzdWx0ID0gVXBsb2FkQXZhdGFyU3VjY2VzcyB8IFVwbG9hZEF2YXRhckZhaWx1cmU7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XG5jb25zdCBoZXlnZW5BcGlLZXkgPSBwcm9jZXNzLmVudi5IRVlHRU5fQVBJX0tFWTtcblxuaWYgKCFzdXBhYmFzZVVybCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwg0L3QtSDQt9Cw0LTQsNC9XCIpO1xufVxuXG5pZiAoIXN1cGFiYXNlU2VydmljZVJvbGVLZXkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XG59XG5cbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZVJvbGVLZXkpO1xuXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRQaG90b1RvSGV5Z2VuKGZpbGU6IEZpbGUpIHtcbiAgaWYgKCFoZXlnZW5BcGlLZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIRVlHRU5fQVBJX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly91cGxvYWQuaGV5Z2VuLmNvbS92MS9hc3NldFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtQXBpLUtleVwiOiBoZXlnZW5BcGlLZXksXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBmaWxlLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICB9LFxuICAgIGJvZHk6IGJ1ZmZlcixcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBg0J7RiNC40LHQutCwINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L46ICR7ZXJyb3JUZXh0IHx8IHJlc3BvbnNlLnN0YXR1c1RleHR9YFxuICAgICk7XG4gIH1cblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBwYXlsb2FkID0gQXJyYXkuaXNBcnJheShqc29uKSA/IGpzb25bMF0gOiBqc29uO1xuICBjb25zdCBkYXRhID0gcGF5bG9hZD8uZGF0YTtcblxuICBpZiAoIWRhdGE/LmltYWdlX2tleSB8fCAhZGF0YT8udXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INC+0YLQstC10YIgSGV5Z2VuINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGE0L7RgtC+XCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbWFnZUtleTogZGF0YS5pbWFnZV9rZXkgYXMgc3RyaW5nLFxuICAgIHBob3RvVXJsOiBkYXRhLnVybCBhcyBzdHJpbmcsXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBob3RvQXZhdGFySW5IZXlnZW4obmFtZTogc3RyaW5nLCBpbWFnZUtleTogc3RyaW5nKSB7XG4gIGlmICghaGV5Z2VuQXBpS2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSEVZR0VOX0FQSV9LRVkg0L3QtSDQt9Cw0LTQsNC9XCIpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmhleWdlbi5jb20vdjIvcGhvdG9fYXZhdGFyL2F2YXRhcl9ncm91cC9jcmVhdGVcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtQXBpLUtleVwiOiBoZXlnZW5BcGlLZXksXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaW1hZ2Vfa2V5OiBpbWFnZUtleSxcbiAgICAgIH0pLFxuICAgIH1cbiAgKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGDQntGI0LjQsdC60LAg0YHQvtC30LTQsNC90LjRjyDRhNC+0YLQvi3QsNCy0LDRgtCw0YDQsDogJHtlcnJvclRleHQgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dH1gXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHBheWxvYWQgPSBBcnJheS5pc0FycmF5KGpzb24pID8ganNvblswXSA6IGpzb247XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcjogcGF5bG9hZD8uZXJyb3IgPz8gbnVsbCxcbiAgICBkYXRhOiBwYXlsb2FkPy5kYXRhID8/IG51bGwsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGxvYWRBdmF0YXIoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxVcGxvYWRBdmF0YXJSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1aWQgPSBmb3JtRGF0YS5nZXQoXCJ1aWRcIik7XG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcImF2YXRhcl9uYW1lXCIpO1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJwaG90b1wiKTtcblxuICAgIGlmICh0eXBlb2YgdWlkICE9PSBcInN0cmluZ1wiIHx8ICF1aWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQndC1INGD0LTQsNC70L7RgdGMINC+0L/RgNC10LTQtdC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcItCS0LLQtdC00LjRgtC1INC40LzRjyDQsNCy0LDRgtCw0YDQsFwiIH07XG4gICAgfVxuXG4gICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi0KTQsNC50Lsg0L3QtSDQvdCw0LnQtNC10L1cIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHRyaW1tZWROYW1lID0gbmFtZS50cmltKCk7XG5cbiAgICBjb25zdCB7IGltYWdlS2V5LCBwaG90b1VybCB9ID0gYXdhaXQgdXBsb2FkUGhvdG9Ub0hleWdlbihmaWxlKTtcbiAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjcmVhdGVQaG90b0F2YXRhckluSGV5Z2VuKFxuICAgICAgdHJpbW1lZE5hbWUsXG4gICAgICBpbWFnZUtleVxuICAgICk7XG5cbiAgICBjb25zdCBzdGF0dXM6IFwiZG9uZVwiIHwgXCJlcnJvclwiID0gY3JlYXRlUmVzdWx0LmVycm9yID8gXCJlcnJvclwiIDogXCJkb25lXCI7XG4gICAgY29uc3QgcmVjb3JkOiBQaG90b0F2YXRhclJvdyA9IHtcbiAgICAgIHVpZCxcbiAgICAgIG5hbWU6IHRyaW1tZWROYW1lLFxuICAgICAgcGhvdG86IHBob3RvVXJsLFxuICAgICAgaW1hZ2Vfa2V5OiBpbWFnZUtleSxcbiAgICAgIGhleV9nZW5faWQ6IGNyZWF0ZVJlc3VsdC5kYXRhPy5pZCA/PyBudWxsLFxuICAgICAgZ3JvdXBfaWQ6XG4gICAgICAgIGNyZWF0ZVJlc3VsdC5kYXRhPy5ncm91cF9pZCA/P1xuICAgICAgICBjcmVhdGVSZXN1bHQuZGF0YT8uaWQgPz9cbiAgICAgICAgY3JlYXRlUmVzdWx0LmRhdGE/Lmdyb3VwID8/XG4gICAgICAgIG51bGwsXG4gICAgICBzdGF0dXMsXG4gICAgfTtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAgIC5mcm9tKFwicGhvdG9fYXZhdGFyc1wiKVxuICAgICAgLmluc2VydChyZWNvcmQpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGF2YXRhcjogZGF0YSBhcyBQaG90b0F2YXRhclJvdyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcItCd0LXQuNC30LLQtdGB0YLQvdCw0Y8g0L7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwXCI7XG4gICAgY29uc29sZS5lcnJvcihcIltVcGxvYWRBdmF0YXJdXCIsIG1lc3NhZ2UpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogbWVzc2FnZSB9O1xuICB9XG59XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBbUhzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/avatars/components/AvatarUploadModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarUploadModal",
    ()=>AvatarUploadModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$7a96d0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/avatars/servers/data:7a96d0 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png"
];
const sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
function AvatarUploadModal({ isOpen, onClose, onAvatarUploaded }) {
    _s();
    const [avatarName, setAvatarName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewUrls, setPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const stopProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[stopProgressLoop]": ()=>{
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
                progressIntervalRef.current = null;
            }
        }
    }["AvatarUploadModal.useCallback[stopProgressLoop]"], []);
    const startProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[startProgressLoop]": ()=>{
            stopProgressLoop();
            const startTime = Date.now();
            progressIntervalRef.current = setInterval({
                "AvatarUploadModal.useCallback[startProgressLoop]": ()=>{
                    setProgress({
                        "AvatarUploadModal.useCallback[startProgressLoop]": (prev)=>{
                            const elapsed = Date.now() - startTime;
                            const nextValue = Math.min(90, elapsed / 20000 * 90);
                            return nextValue > prev ? nextValue : prev;
                        }
                    }["AvatarUploadModal.useCallback[startProgressLoop]"]);
                }
            }["AvatarUploadModal.useCallback[startProgressLoop]"], 200);
        }
    }["AvatarUploadModal.useCallback[startProgressLoop]"], [
        stopProgressLoop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvatarUploadModal.useEffect": ()=>{
            return ({
                "AvatarUploadModal.useEffect": ()=>{
                    previewUrls.forEach({
                        "AvatarUploadModal.useEffect": (url)=>URL.revokeObjectURL(url)
                    }["AvatarUploadModal.useEffect"]);
                }
            })["AvatarUploadModal.useEffect"];
        }
    }["AvatarUploadModal.useEffect"], [
        previewUrls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvatarUploadModal.useEffect": ()=>{
            return ({
                "AvatarUploadModal.useEffect": ()=>{
                    isMountedRef.current = false;
                    stopProgressLoop();
                }
            })["AvatarUploadModal.useEffect"];
        }
    }["AvatarUploadModal.useEffect"], [
        stopProgressLoop
    ]);
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[resetState]": ()=>{
            setAvatarName("");
            setSelectedFiles([]);
            previewUrls.forEach({
                "AvatarUploadModal.useCallback[resetState]": (url)=>URL.revokeObjectURL(url)
            }["AvatarUploadModal.useCallback[resetState]"]);
            setPreviewUrls([]);
            setProgress(0);
            stopProgressLoop();
        }
    }["AvatarUploadModal.useCallback[resetState]"], [
        previewUrls,
        stopProgressLoop
    ]);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[closeModal]": ()=>{
            resetState();
            onClose();
        }
    }["AvatarUploadModal.useCallback[closeModal]"], [
        onClose,
        resetState
    ]);
    const validateFileTypes = (files)=>{
        const validFiles = [];
        const invalidFormat = [];
        const tooLarge = [];
        files.forEach((file)=>{
            if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
                invalidFormat.push(file.name);
            } else if (file.size > MAX_FILE_SIZE) {
                tooLarge.push(`${file.name} (${(file.size / 1024 / 1024).toFixed(1)} МБ)`);
            } else {
                validFiles.push(file);
            }
        });
        if (invalidFormat.length || tooLarge.length) {
            let message = "";
            if (invalidFormat.length) {
                message += `Файлы с неподдерживаемым форматом:\n${invalidFormat.join("\n")}\n\nДопустимы только PNG или JPG.\n\n`;
            }
            if (tooLarge.length) {
                message += `Файлы превышают лимит 10 МБ:\n${tooLarge.join("\n")}`;
            }
            alert(message.trim());
        }
        return validFiles;
    };
    const createPreviews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[createPreviews]": (files)=>{
            previewUrls.forEach({
                "AvatarUploadModal.useCallback[createPreviews]": (url)=>URL.revokeObjectURL(url)
            }["AvatarUploadModal.useCallback[createPreviews]"]);
            const limitedFiles = files.slice(0, 1);
            setSelectedFiles(limitedFiles);
            setPreviewUrls(limitedFiles.map({
                "AvatarUploadModal.useCallback[createPreviews]": (file)=>URL.createObjectURL(file)
            }["AvatarUploadModal.useCallback[createPreviews]"]));
        }
    }["AvatarUploadModal.useCallback[createPreviews]"], [
        previewUrls
    ]);
    const handleDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[handleDrag]": (event)=>{
            event.preventDefault();
            event.stopPropagation();
            if (event.type === "dragenter" || event.type === "dragover") {
                setDragActive(true);
            } else if (event.type === "dragleave") {
                setDragActive(false);
            }
        }
    }["AvatarUploadModal.useCallback[handleDrag]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[handleDrop]": (event)=>{
            event.preventDefault();
            event.stopPropagation();
            setDragActive(false);
            if (event.dataTransfer.files?.[0]) {
                const validFiles = validateFileTypes([
                    event.dataTransfer.files[0]
                ]);
                if (validFiles.length) {
                    createPreviews(validFiles);
                }
            }
        }
    }["AvatarUploadModal.useCallback[handleDrop]"], [
        createPreviews
    ]);
    const handleFileSelect = (event)=>{
        if (event.target.files?.[0]) {
            const validFiles = validateFileTypes([
                event.target.files[0]
            ]);
            if (validFiles.length) {
                createPreviews(validFiles);
            }
        }
    };
    const removeFile = (index)=>{
        const newPreviews = previewUrls.filter((_, i)=>i !== index);
        const revokedUrl = previewUrls[index];
        if (revokedUrl) {
            URL.revokeObjectURL(revokedUrl);
        }
        setPreviewUrls(newPreviews);
        setSelectedFiles(selectedFiles.filter((_, i)=>i !== index));
    };
    const waitForAvatarCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarUploadModal.useCallback[waitForAvatarCompletion]": async (recordId, initialStatus)=>{
            if (!recordId) {
                console.warn("[avatars] Нет ID записи для проверки статуса");
                return true;
            }
            // Если статус уже done сразу после создания, не ждём
            if (initialStatus === "done") {
                console.log("[avatars] Статус уже 'done', не требуется ожидание");
                return true;
            }
            if (initialStatus === "error") {
                console.error("[avatars] Статус 'error' при создании записи");
                return false;
            }
            const timeoutMs = 2 * 60 * 1000;
            const pollDelayMs = 2000;
            const deadline = Date.now() + timeoutMs;
            let attemptCount = 0;
            console.log(`[avatars] Начинаем проверку статуса для записи ${recordId}`);
            while(isMountedRef.current && Date.now() < deadline){
                attemptCount++;
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("status").eq("id", recordId).single();
                if (error) {
                    console.error(`[avatars] Ошибка проверки статуса (попытка ${attemptCount}):`, error);
                    // Если запись не найдена, продолжаем попытки
                    if (error.code === "PGRST116") {
                        await sleep(pollDelayMs);
                        continue;
                    }
                } else if (data?.status === "done") {
                    console.log(`[avatars] Статус 'done' получен после ${attemptCount} попыток`);
                    return true;
                } else if (data?.status === "error") {
                    console.error(`[avatars] Статус 'error' получен после ${attemptCount} попыток`);
                    return false;
                } else {
                    console.log(`[avatars] Попытка ${attemptCount}: статус = ${data?.status || "неизвестен"}`);
                }
                await sleep(pollDelayMs);
            }
            console.warn(`[avatars] Таймаут ожидания статуса после ${attemptCount} попыток`);
            return false;
        }
    }["AvatarUploadModal.useCallback[waitForAvatarCompletion]"], []);
    const handleUpload = async ()=>{
        if (isUploading || !avatarName.trim() || selectedFiles.length === 0) {
            return;
        }
        setIsUploading(true);
        setProgress(0);
        startProgressLoop();
        try {
            const { data: { user }, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (authError) {
                throw new Error(authError.message);
            }
            if (!user) {
                throw new Error("Пользователь не найден");
            }
            const formData = new FormData();
            formData.append("avatar_name", avatarName.trim());
            formData.append("uid", user.id);
            formData.append("photo", selectedFiles[0]);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$7a96d0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UploadAvatar"])(formData);
            if (!result.success) {
                throw new Error(result.error);
            }
            // Проверяем статус сразу после создания
            const initialStatus = result.avatar.status;
            console.log(`[avatars] Аватар создан с ID ${result.avatar.id}, начальный статус: ${initialStatus}`);
            // Если статус уже done, сразу устанавливаем прогресс в 100%
            if (initialStatus === "done") {
                stopProgressLoop();
                setProgress(100);
                await onAvatarUploaded?.();
                await sleep(400);
                closeModal();
                return;
            }
            const isReady = await waitForAvatarCompletion(result.avatar.id ?? null, initialStatus);
            if (!isReady) {
                throw new Error("Не удалось дождаться завершения обработки аватара. Попробуйте позже.");
            }
            stopProgressLoop();
            setProgress(100);
            await onAvatarUploaded?.();
            await sleep(400);
            closeModal();
        } catch (error) {
            console.error("[avatars] Ошибка при загрузке:", error);
            alert(`Ошибка при загрузке: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
            setProgress(0);
        } finally{
            stopProgressLoop();
            setIsUploading(false);
        }
    };
    const dropZoneClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvatarUploadModal.useMemo[dropZoneClasses]": ()=>{
            const base = "rounded-2xl border border-dashed border-blue-400/50 bg-blue-50/30 p-6 text-center transition-all duration-200";
            if (dragActive) {
                return `${base} shadow-lg -translate-y-0.5`;
            }
            return `${base} hover:shadow-md hover:-translate-y-0.5`;
        }
    }["AvatarUploadModal.useMemo[dropZoneClasses]"], [
        dragActive
    ]);
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-[32px] bg-white shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-center border-b px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Загрузите фото для аватара"
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: closeModal,
                            className: "absolute right-6 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Закрыть"
                                }, void 0, false, {
                                    fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                "✕"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[70vh] overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "avatar-name",
                                        className: "mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                        children: "Имя аватара"
                                    }, void 0, false, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "avatar-name",
                                        value: avatarName,
                                        onChange: (event)=>setAvatarName(event.target.value),
                                        placeholder: "Придумайте любое имя",
                                        className: "w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: dropZoneClasses,
                                onDragEnter: handleDrag,
                                onDragLeave: handleDrag,
                                onDragOver: handleDrag,
                                onDrop: handleDrop,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex max-w-sm flex-col items-center gap-3 text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-blue-200 bg-white p-3 text-blue-500",
                                            children: "↑"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold",
                                            children: "Перетащите фотографию сюда"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "PNG или JPG до 10 МБ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-500",
                                            onClick: ()=>fileInputRef.current?.click(),
                                            children: "Выбрать файл"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            accept: "image/jpeg,image/jpg,image/png",
                                            className: "hidden",
                                            onChange: handleFileSelect
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this),
                            selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700",
                                children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    previewUrls[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: previewUrls[index],
                                                        alt: file.name,
                                                        width: 40,
                                                        height: 40,
                                                        className: "h-10 w-10 rounded-lg object-cover",
                                                        unoptimized: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "truncate",
                                                        children: file.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 405,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>removeFile(index),
                                                className: "text-gray-400 transition hover:text-red-500",
                                                children: "Удалить"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 418,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${file.name}-${index}`, true, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 401,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 text-xs text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-3 text-sm font-semibold text-gray-800",
                                        children: "Требования к фото"
                                    }, void 0, false, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Фото в анфас (лицо прямо в камеру)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Хорошее качество изображения, чёткое и резкое"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Без теней на лице, равномерное освещение"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Без других людей на фото, только вы"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Без открытой улыбки, нейтральное выражение лица"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-t border-gray-200 px-6 py-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeModal,
                                    className: "rounded-lg border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50",
                                    disabled: isUploading,
                                    children: "Отмена"
                                }, void 0, false, {
                                    fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this),
                                (isUploading || progress > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-1 flex-1 overflow-hidden rounded-full bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#FFB347] via-[#FFC94C] to-[#FFB347] transition-[width] duration-500 ease-out",
                                        style: {
                                            width: `${progress}%`
                                        },
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleUpload,
                            disabled: isUploading || !avatarName.trim() || selectedFiles.length === 0,
                            className: "rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:ml-auto",
                            children: isUploading ? "Создаем..." : "Создать"
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
            lineNumber: 334,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
_s(AvatarUploadModal, "f1w5L+IhpSx6GxCp8OShaf9hhEA=");
_c = AvatarUploadModal;
var _c;
__turbopack_context__.k.register(_c, "AvatarUploadModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/DashboardAvatarsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardAvatarsSection",
    ()=>DashboardAvatarsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardAvatarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/DashboardAvatarCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$AvatarUploadModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/AvatarUploadModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DashboardAvatarsSection({ avatars, currentUserId, onAvatarsChanged }) {
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Мои аватары"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsModalOpen(true),
                        className: "min-w-[170px] rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500",
                        children: "Создать аватар"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            avatars.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "У вас пока нет аватаров"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsModalOpen(true),
                        className: "mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500",
                        children: "Создать аватар"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
                children: avatars.map((avatar)=>{
                    const key = avatar.id ?? avatar.hey_gen_id ?? avatar.group_id ?? `${avatar.uid}-${avatar.image_key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardAvatarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAvatarCard"], {
                        avatar: avatar,
                        currentUserId: currentUserId,
                        onAvatarChanged: onAvatarsChanged
                    }, key, false, {
                        fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                        lineNumber: 53,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$AvatarUploadModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarUploadModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onAvatarUploaded: onAvatarsChanged
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/DashboardAvatarsSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(DashboardAvatarsSection, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");
_c = DashboardAvatarsSection;
var _c;
__turbopack_context__.k.register(_c, "DashboardAvatarsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/voices/servers/data:bbae30 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40283b640ad833f930e378e3009dbbd29e474a640a":"DeleteVoice"},"app/voices/servers/DeleteVoice.ts",""] */ __turbopack_context__.s([
    "DeleteVoice",
    ()=>DeleteVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var DeleteVoice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40283b640ad833f930e378e3009dbbd29e474a640a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "DeleteVoice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vRGVsZXRlVm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkw7XG5jb25zdCBzdXBhYmFzZVNlcnZpY2VSb2xlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWTtcblxuaWYgKCFzdXBhYmFzZVVybCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwg0L3QtSDQt9Cw0LTQsNC9XCIpO1xufVxuXG5pZiAoIXN1cGFiYXNlU2VydmljZVJvbGVLZXkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XG59XG5cbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZVJvbGVLZXkpO1xuXG5pbnRlcmZhY2UgRGVsZXRlVm9pY2VJbnB1dCB7XG4gIHVpZDogc3RyaW5nO1xuICB2b2ljZUlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEZWxldGVWb2ljZVJlc3VsdCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gRGVsZXRlVm9pY2Uoe1xuICB1aWQsXG4gIHZvaWNlSWQsXG59OiBEZWxldGVWb2ljZUlucHV0KTogUHJvbWlzZTxEZWxldGVWb2ljZVJlc3VsdD4ge1xuICB0cnkge1xuICAgIGlmICghdWlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9XCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIXZvaWNlSWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJRCDQs9C+0LvQvtGB0LAg0L3QtSDRg9C60LDQt9Cw0L1cIiB9O1xuICAgIH1cblxuICAgIC8vINCh0L3QsNGH0LDQu9CwINC/0L7Qu9GD0YfQsNC10Lwg0LfQsNC/0LjRgdGMINC40Lcg0YLQsNCx0LvQuNGG0YssINGH0YLQvtCx0Ysg0LjQt9Cy0LvQtdGH0Ywgdm9pY2VfaWQg0Lgg0L3QsNC30LLQsNC90LjQtSDQs9C+0LvQvtGB0LBcbiAgICBjb25zdCB7IGRhdGE6IHZvaWNlUmVjb3JkLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxuICAgICAgLmZyb20oXCJ2b2ljZXNcIilcbiAgICAgIC5zZWxlY3QoXCJ2b2ljZV9pZCwgbmFtZVwiKVxuICAgICAgLmVxKFwiaWRcIiwgdm9pY2VJZClcbiAgICAgIC5lcShcInVpZFwiLCB1aWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoZmV0Y2hFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGDQndC1INGD0LTQsNC70L7RgdGMINC90LDQudGC0Lgg0LPQvtC70L7RgTogJHtmZXRjaEVycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgaWYgKCF2b2ljZVJlY29yZCB8fCAhdm9pY2VSZWNvcmQudm9pY2VfaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCd0LUg0L3QsNC50LTQtdC90L4g0LfQvdCw0YfQtdC90LjQtSB2b2ljZV9pZCDQtNC70Y8g0Y3RgtC+0LPQviDQs9C+0LvQvtGB0LBcIik7XG4gICAgfVxuXG4gICAgLy8g0J7RgtC/0YDQsNCy0LvRj9C10Lwg0LLQtdCx0YXRg9C6INGBIHZvaWNlX2lkLCDQvdCw0LfQstCw0L3QuNC10Lwg0LPQvtC70L7RgdCwINC4IFVVSUQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gICAgY29uc3Qgd2ViaG9va1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vcnVlbGV2ZW4ucnUvd2ViaG9vay85MzJhZWU2Zi1iNTU0LTQ1ZTktYjIzMi1mNzgyOWIwYTFkMDZcIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxuICAgICAgICAgIHZvaWNlX2lkOiB2b2ljZVJlY29yZC52b2ljZV9pZCxcbiAgICAgICAgICB2b2ljZV9uYW1lOiB2b2ljZVJlY29yZC5uYW1lIHx8IG51bGwsXG4gICAgICAgICAgdXVpZDogdWlkLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCF3ZWJob29rUmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB3ZWJob29rUmVzcG9uc2UudGV4dCgpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBg0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0L/RgNCw0LLQuNGC0Ywg0LLQtdCx0YXRg9C6OiAke1xuICAgICAgICAgIG1lc3NhZ2UgfHwgd2ViaG9va1Jlc3BvbnNlLnN0YXR1c1RleHRcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8g0KPQtNCw0LvRj9C10Lwg0LfQsNC/0LjRgdGMINC40Lcg0YLQsNCx0LvQuNGG0YtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXG4gICAgICAuZnJvbShcInZvaWNlc1wiKVxuICAgICAgLmRlbGV0ZSgpXG4gICAgICAuZXEoXCJpZFwiLCB2b2ljZUlkKVxuICAgICAgLmVxKFwidWlkXCIsIHVpZCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwi0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LBcIjtcbiAgICBjb25zb2xlLmVycm9yKFwiW0RlbGV0ZVZvaWNlXVwiLCBtZXNzYWdlKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBMkJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/voices/servers/data:f4bb9c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40db8994e698b2000fa8f50a7e0d97e8cf222ef9c0":"UpdateVoice"},"app/voices/servers/UpdateVoice.ts",""] */ __turbopack_context__.s([
    "UpdateVoice",
    ()=>UpdateVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var UpdateVoice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40db8994e698b2000fa8f50a7e0d97e8cf222ef9c0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UpdateVoice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vVXBkYXRlVm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XHJcblxyXG5pZiAoIXN1cGFiYXNlVXJsKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMINC90LUg0LfQsNC00LDQvVwiKTtcclxufVxyXG5cclxuaWYgKCFzdXBhYmFzZVNlcnZpY2VSb2xlS2V5KSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XHJcbn1cclxuXHJcbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZVJvbGVLZXkpO1xyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZVZvaWNlSW5wdXQge1xyXG4gIHVpZDogc3RyaW5nO1xyXG4gIHZvaWNlSWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVXBkYXRlVm9pY2VSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGRhdGVWb2ljZSh7XHJcbiAgdWlkLFxyXG4gIHZvaWNlSWQsXHJcbiAgbmFtZSxcclxuICBkZXNjcmlwdGlvbixcclxufTogVXBkYXRlVm9pY2VJbnB1dCk6IFByb21pc2U8VXBkYXRlVm9pY2VSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCF1aWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcItCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC90LDQudC00LXQvVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2b2ljZUlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJRCDQs9C+0LvQvtGB0LAg0L3QtSDRg9C60LDQt9Cw0L1cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbmFtZSB8fCAhbmFtZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcItCY0LzRjyDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8XCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmltbWVkTmFtZSA9IG5hbWUudHJpbSgpO1xyXG4gICAgY29uc3QgdHJpbW1lZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24/LnRyaW0oKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXHJcbiAgICAgIC5mcm9tKFwidm9pY2VzXCIpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIG5hbWU6IHRyaW1tZWROYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0cmltbWVkRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgfSlcclxuICAgICAgLmVxKFwiaWRcIiwgdm9pY2VJZClcclxuICAgICAgLmVxKFwidWlkXCIsIHVpZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwi0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LBcIjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJbVXBkYXRlVm9pY2VdXCIsIG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0E2QnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/voices/components/VoiceDeleteModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceDeleteModal",
    ()=>VoiceDeleteModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function VoiceDeleteModal({ isOpen, onClose, onConfirm, voiceName, isDeleting = false }) {
    if (!isOpen) {
        return null;
    }
    const handleConfirm = async ()=>{
        await onConfirm();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Удаление голоса"
                }, void 0, false, {
                    fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 text-gray-600",
                    children: [
                        "Вы действительно хотите удалить голос «",
                        voiceName,
                        "»?"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isDeleting,
                            className: "flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                            children: "Отмена"
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleConfirm,
                            disabled: isDeleting,
                            className: "flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50",
                            children: isDeleting ? "Удаляем..." : "Удалить"
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = VoiceDeleteModal;
var _c;
__turbopack_context__.k.register(_c, "VoiceDeleteModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/voices/components/VoiceEditModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceEditModal",
    ()=>VoiceEditModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const MAX_DESCRIPTION_LENGTH = 100;
function VoiceEditModal({ isOpen, onClose, onConfirm, currentName, currentDescription, isSaving = false }) {
    _s();
    const [formValues, setFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: currentName,
        description: currentDescription
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceEditModal.useEffect": ()=>{
            if (isOpen) {
                setFormValues({
                    name: currentName,
                    description: currentDescription
                });
            }
        }
    }["VoiceEditModal.useEffect"], [
        isOpen,
        currentName,
        currentDescription
    ]);
    if (!isOpen) {
        return null;
    }
    const handleConfirm = async ()=>{
        if (!formValues.name.trim()) {
            return;
        }
        await onConfirm({
            name: formValues.name.trim(),
            description: formValues.description.trim().slice(0, MAX_DESCRIPTION_LENGTH)
        });
    };
    const handleKeyDown = (event)=>{
        const isTextarea = event.currentTarget.tagName === "TEXTAREA";
        if (event.key === "Enter" && !isTextarea && !isSaving && formValues.name.trim()) {
            event.preventDefault();
            handleConfirm();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Редактировать голос"
                }, void 0, false, {
                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "voice-name",
                                    className: "mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                    children: "Имя"
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "voice-name",
                                    type: "text",
                                    value: formValues.name,
                                    onChange: (event)=>setFormValues((prev)=>({
                                                ...prev,
                                                name: event.target.value
                                            })),
                                    onKeyDown: handleKeyDown,
                                    disabled: isSaving,
                                    placeholder: "Введите новое имя",
                                    className: "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 outline-none transition focus:border-gray-400 disabled:opacity-50",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "voice-description",
                                            className: "block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                            children: "Описание"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs ${formValues.description.length > MAX_DESCRIPTION_LENGTH ? "text-red-500" : "text-gray-400"}`,
                                            children: [
                                                formValues.description.length,
                                                "/",
                                                MAX_DESCRIPTION_LENGTH
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "voice-description",
                                    value: formValues.description,
                                    onChange: (event)=>{
                                        const value = event.target.value;
                                        if (value.length <= MAX_DESCRIPTION_LENGTH) {
                                            setFormValues((prev)=>({
                                                    ...prev,
                                                    description: value
                                                }));
                                        }
                                    },
                                    maxLength: MAX_DESCRIPTION_LENGTH,
                                    onKeyDown: handleKeyDown,
                                    disabled: isSaving,
                                    placeholder: "Добавьте описание голоса",
                                    className: "h-28 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 outline-none transition focus:border-gray-400 disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isSaving,
                            className: "flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                            children: "Отмена"
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleConfirm,
                            disabled: isSaving || !formValues.name.trim(),
                            className: "flex-1 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50",
                            children: isSaving ? "Сохраняем..." : "Сохранить"
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(VoiceEditModal, "eud1EdBEAliRhB+M4MKfdDhxw5A=");
_c = VoiceEditModal;
var _c;
__turbopack_context__.k.register(_c, "VoiceEditModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/DashboardVoiceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardVoiceCard",
    ()=>DashboardVoiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$bbae30__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/voices/servers/data:bbae30 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$f4bb9c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/voices/servers/data:f4bb9c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceDeleteModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceDeleteModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceEditModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceEditModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardVoiceCard({ voice, currentUserId, onVoiceChanged }) {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeMenuTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formattedDescription = voice.description?.trim() ?? "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardVoiceCard.useEffect": ()=>{
            const handleClickOutside = {
                "DashboardVoiceCard.useEffect.handleClickOutside": (event)=>{
                    if (openMenu && menuRef.current && !menuRef.current.contains(event.target)) {
                        setOpenMenu(false);
                    }
                }
            }["DashboardVoiceCard.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "DashboardVoiceCard.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["DashboardVoiceCard.useEffect"];
        }
    }["DashboardVoiceCard.useEffect"], [
        openMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardVoiceCard.useEffect": ()=>{
            return ({
                "DashboardVoiceCard.useEffect": ()=>{
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                    }
                    if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                    }
                }
            })["DashboardVoiceCard.useEffect"];
        }
    }["DashboardVoiceCard.useEffect"], []);
    const handlePlay = ()=>{
        if (!audioRef.current) {
            audioRef.current = new Audio(voice.url);
            audioRef.current.onended = ()=>setIsPlaying(false);
            audioRef.current.onerror = ()=>{
                setIsPlaying(false);
                alert("Ошибка воспроизведения аудио");
            };
        }
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    const handleMenuClick = (event)=>{
        event.stopPropagation();
        setOpenMenu(!openMenu);
    };
    const handleEditClick = ()=>{
        if (!currentUserId || !voice.id) {
            alert("Не удалось определить пользователя или идентификатор голоса");
            return;
        }
        setOpenMenu(false);
        setIsEditModalOpen(true);
    };
    const handleDeleteClick = ()=>{
        if (!currentUserId || !voice.id) {
            alert("Не удалось определить пользователя или идентификатор голоса");
            return;
        }
        setOpenMenu(false);
        setIsDeleteModalOpen(true);
    };
    const handleEditConfirm = async ({ name, description })=>{
        if (!currentUserId || !voice.id) {
            return;
        }
        try {
            setEditingId(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$f4bb9c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateVoice"])({
                uid: currentUserId,
                voiceId: voice.id,
                name,
                description
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось обновить голос");
            }
            setIsEditModalOpen(false);
            await onVoiceChanged?.();
        } catch (error) {
            console.error("[DashboardVoiceCard] Ошибка редактирования:", error);
            alert(`Ошибка при редактировании: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setEditingId(false);
        }
    };
    const handleDeleteConfirm = async ()=>{
        if (!currentUserId || !voice.id) {
            return;
        }
        try {
            setDeletingId(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$bbae30__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["DeleteVoice"])({
                uid: currentUserId,
                voiceId: voice.id
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось удалить голос");
            }
            setIsDeleteModalOpen(false);
            await onVoiceChanged?.();
        } catch (error) {
            console.error("[DashboardVoiceCard] Ошибка удаления:", error);
            alert(`Ошибка при удалении: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setDeletingId(false);
        }
    };
    const showMenuButton = hovered || openMenu;
    const isProcessing = deletingId || editingId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
                onMouseEnter: ()=>{
                    setHovered(true);
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                        closeMenuTimeoutRef.current = null;
                    }
                },
                onMouseLeave: ()=>{
                    setHovered(false);
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                    }
                    closeMenuTimeoutRef.current = setTimeout(()=>{
                        if (openMenu) {
                            setOpenMenu(false);
                        }
                    }, 500);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-3 top-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleMenuClick,
                                className: `flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md transition-all duration-200 hover:bg-white hover:text-gray-900 ${showMenuButton ? "opacity-100" : "opacity-0"}`,
                                "aria-label": "Меню",
                                disabled: isProcessing,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2.5,
                                    className: "h-4 w-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "5",
                                            cy: "12",
                                            r: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "19",
                                            cy: "12",
                                            r: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            openMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: menuRef,
                                className: "absolute right-0 top-10 z-50 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleEditClick,
                                        disabled: isProcessing || !voice.id || !currentUserId,
                                        className: "w-full rounded-t-lg px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                                        children: "Редактировать"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleDeleteClick,
                                        disabled: isProcessing || !voice.id || !currentUserId,
                                        className: "w-full rounded-b-lg px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-50",
                                        children: "Удалить"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handlePlay,
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white transition hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
                                "aria-label": isPlaying ? "Остановить воспроизведение" : "Проиграть голос",
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    className: "h-6 w-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    className: "h-6 w-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 5v14l11-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-gray-900 line-clamp-2",
                                    children: voice.name
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    formattedDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 line-clamp-2 text-sm text-gray-600",
                        children: formattedDescription
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceDeleteModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceDeleteModal"], {
                isOpen: isDeleteModalOpen,
                onClose: ()=>setIsDeleteModalOpen(false),
                onConfirm: handleDeleteConfirm,
                voiceName: voice.name,
                isDeleting: deletingId
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceEditModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceEditModal"], {
                isOpen: isEditModalOpen,
                onClose: ()=>setIsEditModalOpen(false),
                onConfirm: handleEditConfirm,
                currentName: voice.name,
                currentDescription: voice.description ?? "",
                isSaving: editingId
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardVoiceCard.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DashboardVoiceCard, "+V92f3foaG2N27VI6sbK2Q0XYTU=");
_c = DashboardVoiceCard;
var _c;
__turbopack_context__.k.register(_c, "DashboardVoiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/voices/components/VoiceCreateModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceCreateModal",
    ()=>VoiceCreateModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 МБ
const ALLOWED_TYPES = [
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/webm",
    "audio/ogg"
];
const MAX_DESCRIPTION_LENGTH = 100;
function VoiceCreateModal({ isOpen, onClose, onVoiceCreated }) {
    _s();
    const [voiceName, setVoiceName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [voiceDescription, setVoiceDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordedBlob, setRecordedBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recordedAudioUrl, setRecordedAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWaiting, setIsWaiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const progressIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioPlayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceCreateModal.useCallback[stopProgressLoop]": ()=>{
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
                progressIntervalRef.current = null;
            }
        }
    }["VoiceCreateModal.useCallback[stopProgressLoop]"], []);
    const startProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceCreateModal.useCallback[startProgressLoop]": ()=>{
            stopProgressLoop();
            setProgress(0);
            const startTime = Date.now();
            progressIntervalRef.current = setInterval({
                "VoiceCreateModal.useCallback[startProgressLoop]": ()=>{
                    const elapsed = Date.now() - startTime;
                    const nextValue = Math.min(100, elapsed / 15000 * 100);
                    setProgress(nextValue);
                }
            }["VoiceCreateModal.useCallback[startProgressLoop]"], 50);
        }
    }["VoiceCreateModal.useCallback[startProgressLoop]"], [
        stopProgressLoop
    ]);
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceCreateModal.useCallback[resetState]": ()=>{
            setVoiceName("");
            setVoiceDescription("");
            setSelectedFile(null);
            setRecordedBlob(null);
            // Очищаем URL для освобождения памяти
            if (recordedAudioUrl) {
                URL.revokeObjectURL(recordedAudioUrl);
            }
            setRecordedAudioUrl(null);
            setIsRecording(false);
            setIsWaiting(false);
            setProgress(0);
            stopProgressLoop();
            audioChunksRef.current = [];
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
                mediaRecorderRef.current.stop();
            }
            if (mediaRecorderRef.current?.stream) {
                mediaRecorderRef.current.stream.getTracks().forEach({
                    "VoiceCreateModal.useCallback[resetState]": (track)=>track.stop()
                }["VoiceCreateModal.useCallback[resetState]"]);
            }
        }
    }["VoiceCreateModal.useCallback[resetState]"], [
        recordedAudioUrl,
        stopProgressLoop
    ]);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceCreateModal.useCallback[closeModal]": ()=>{
            resetState();
            onClose();
        }
    }["VoiceCreateModal.useCallback[closeModal]"], [
        onClose,
        resetState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceCreateModal.useEffect": ()=>{
            return ({
                "VoiceCreateModal.useEffect": ()=>{
                    if (mediaRecorderRef.current?.stream) {
                        mediaRecorderRef.current.stream.getTracks().forEach({
                            "VoiceCreateModal.useEffect": (track)=>track.stop()
                        }["VoiceCreateModal.useEffect"]);
                    }
                    // Очищаем URL при размонтировании
                    if (recordedAudioUrl) {
                        URL.revokeObjectURL(recordedAudioUrl);
                    }
                    stopProgressLoop();
                }
            })["VoiceCreateModal.useEffect"];
        }
    }["VoiceCreateModal.useEffect"], [
        recordedAudioUrl,
        stopProgressLoop
    ]);
    const validateFile = (file)=>{
        if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
            alert("Неподдерживаемый формат файла. Допустимы только MP3, WAV, WebM или OGG.");
            return false;
        }
        if (file.size > MAX_FILE_SIZE) {
            alert(`Файл превышает лимит 50 МБ. Размер файла: ${(file.size / 1024 / 1024).toFixed(1)} МБ`);
            return false;
        }
        return true;
    };
    const handleFileSelect = (event)=>{
        if (event.target.files?.[0]) {
            const file = event.target.files[0];
            if (validateFile(file)) {
                setSelectedFile(file);
                setRecordedBlob(null); // Сбрасываем запись если выбрали файл
            }
        }
    };
    const handleDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceCreateModal.useCallback[handleDrag]": (event)=>{
            event.preventDefault();
            event.stopPropagation();
            if (event.type === "dragenter" || event.type === "dragover") {
                setDragActive(true);
            } else if (event.type === "dragleave") {
                setDragActive(false);
            }
        }
    }["VoiceCreateModal.useCallback[handleDrag]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceCreateModal.useCallback[handleDrop]": (event)=>{
            event.preventDefault();
            event.stopPropagation();
            setDragActive(false);
            if (event.dataTransfer.files?.[0]) {
                const file = event.dataTransfer.files[0];
                if (validateFile(file)) {
                    setSelectedFile(file);
                    setRecordedBlob(null); // Сбрасываем запись если выбрали файл
                }
            }
        }
    }["VoiceCreateModal.useCallback[handleDrop]"], []);
    const startRecording = async ()=>{
        try {
            // Проверяем доступность API
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                alert("Ваш браузер не поддерживает запись с микрофона. Пожалуйста, используйте современный браузер (Chrome, Firefox, Edge).");
                return;
            }
            // Проверяем разрешения перед запросом
            try {
                const permissionStatus = await navigator.permissions.query({
                    name: "microphone"
                });
                if (permissionStatus.state === "denied") {
                    alert("Доступ к микрофону запрещен. Пожалуйста, разрешите доступ к микрофону в настройках браузера и обновите страницу.");
                    return;
                }
            } catch (permError) {
                // Некоторые браузеры не поддерживают permissions API, продолжаем
                console.log("Permissions API не поддерживается, продолжаем запрос");
            }
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }
            });
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus" : "audio/mp4"
            });
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (event)=>{
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = ()=>{
                const mimeType = mediaRecorder.mimeType || "audio/webm";
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: mimeType
                });
                setRecordedBlob(audioBlob);
                // Создаем URL для воспроизведения
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudioUrl(audioUrl);
                setSelectedFile(null); // Сбрасываем файл если записали
                stream.getTracks().forEach((track)=>track.stop());
            };
            mediaRecorder.onerror = (event)=>{
                console.error("Ошибка записи:", event);
                setIsRecording(false);
                stream.getTracks().forEach((track)=>track.stop());
                alert("Произошла ошибка при записи. Попробуйте еще раз.");
            };
            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Ошибка доступа к микрофону:", error);
            setIsRecording(false);
            let errorMessage = "Не удалось получить доступ к микрофону.";
            if (error instanceof Error) {
                if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
                    errorMessage = "Доступ к микрофону запрещен.\n\n" + "Пожалуйста:\n" + "1. Нажмите на иконку замка в адресной строке браузера\n" + "2. Разрешите доступ к микрофону\n" + "3. Обновите страницу и попробуйте снова";
                } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
                    errorMessage = "Микрофон не найден. Убедитесь, что микрофон подключен и включен.";
                } else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
                    errorMessage = "Микрофон уже используется другим приложением.\n\n" + "Закройте другие приложения, использующие микрофон, и попробуйте снова.";
                } else {
                    errorMessage = `Ошибка: ${error.message}`;
                }
            }
            alert(errorMessage);
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };
    const loadLameJs = ()=>{
        return new Promise((resolve, reject)=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.lamejs) {
                resolve(window.lamejs);
                return;
            }
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js";
            script.onload = ()=>resolve(window.lamejs);
            script.onerror = ()=>reject(new Error("Не удалось загрузить библиотеку конвертации"));
            document.head.appendChild(script);
        });
    };
    const convertWebmToMp3 = async (webmBlob)=>{
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const arrayBuffer = await webmBlob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        try {
            // Пытаемся использовать lamejs для конвертации в MP3
            const Lame = await loadLameJs();
            const mp3encoder = new Lame.Mp3Encoder(audioBuffer.numberOfChannels, audioBuffer.sampleRate, 128 // bitrate
            );
            // Конвертируем float32 в int16
            const samples = [];
            for(let i = 0; i < audioBuffer.numberOfChannels; i++){
                const channelData = audioBuffer.getChannelData(i);
                const int16Array = new Int16Array(channelData.length);
                for(let j = 0; j < channelData.length; j++){
                    int16Array[j] = Math.max(-32768, Math.min(32767, channelData[j] * 32768));
                }
                samples.push(int16Array);
            }
            const mp3Data = [];
            const sampleBlockSize = 1152;
            for(let i = 0; i < samples[0].length; i += sampleBlockSize){
                const left = samples[0].subarray(i, i + sampleBlockSize);
                const right = audioBuffer.numberOfChannels > 1 ? samples[1].subarray(i, i + sampleBlockSize) : left;
                const mp3buf = mp3encoder.encodeBuffer(left, right);
                if (mp3buf.length > 0) {
                    mp3Data.push(mp3buf);
                }
            }
            const mp3buf = mp3encoder.flush();
            if (mp3buf.length > 0) {
                mp3Data.push(mp3buf);
            }
            const mp3Blob = new Blob(mp3Data, {
                type: "audio/mpeg"
            });
            return new File([
                mp3Blob
            ], "recording.mp3", {
                type: "audio/mpeg"
            });
        } catch (error) {
            // Fallback: если lamejs не загрузился, конвертируем в WAV
            console.warn("Не удалось использовать lamejs, используем WAV формат:", error);
            const wavBlob = audioBufferToWav(audioBuffer);
            // Отправляем как WAV с расширением mp3 (сервер может конвертировать)
            return new File([
                wavBlob
            ], "recording.mp3", {
                type: "audio/mpeg"
            });
        }
    };
    const audioBufferToWav = (buffer)=>{
        const length = buffer.length;
        const numberOfChannels = buffer.numberOfChannels;
        const sampleRate = buffer.sampleRate;
        const arrayBuffer = new ArrayBuffer(44 + length * numberOfChannels * 2);
        const view = new DataView(arrayBuffer);
        // WAV header
        const writeString = (offset, string)=>{
            for(let i = 0; i < string.length; i++){
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };
        writeString(0, "RIFF");
        view.setUint32(4, 36 + length * numberOfChannels * 2, true);
        writeString(8, "WAVE");
        writeString(12, "fmt ");
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numberOfChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * numberOfChannels * 2, true);
        view.setUint16(32, numberOfChannels * 2, true);
        view.setUint16(34, 16, true);
        writeString(36, "data");
        view.setUint32(40, length * numberOfChannels * 2, true);
        // Convert float samples to 16-bit PCM
        let offset = 44;
        for(let i = 0; i < length; i++){
            for(let channel = 0; channel < numberOfChannels; channel++){
                const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
                view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
                offset += 2;
            }
        }
        return new Blob([
            arrayBuffer
        ], {
            type: "audio/wav"
        });
    };
    const handleCloneVoice = async ()=>{
        if (!voiceName.trim()) {
            alert("Введите название голоса");
            return;
        }
        // Запускаем прогресс-бар сразу при нажатии на кнопку
        setIsUploading(true);
        setIsWaiting(true);
        startProgressLoop();
        let audioFile = null;
        if (selectedFile) {
            // Если файл загружен, используем его как есть
            audioFile = selectedFile;
        } else if (recordedBlob) {
            // Если запись с микрофона, конвертируем webm в mp3
            try {
                audioFile = await convertWebmToMp3(recordedBlob);
            } catch (error) {
                console.error("[voices] Ошибка конвертации:", error);
                stopProgressLoop();
                setIsUploading(false);
                setIsWaiting(false);
                alert("Ошибка при конвертации записи. Попробуйте еще раз.");
                return;
            }
        } else {
            stopProgressLoop();
            setIsUploading(false);
            setIsWaiting(false);
            alert("Загрузите файл или запишите голос с микрофона");
            return;
        }
        try {
            // Получаем UUID авторизованного пользователя
            const { data: { user }, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (authError || !user) {
                throw new Error("Не удалось получить данные пользователя");
            }
            const formData = new FormData();
            formData.append("name", voiceName.trim());
            if (voiceDescription.trim()) {
                const trimmedDescription = voiceDescription.trim().slice(0, MAX_DESCRIPTION_LENGTH);
                formData.append("description", trimmedDescription);
            }
            formData.append("file", audioFile);
            formData.append("uuid", user.id);
            const response = await fetch("https://rueleven.ru/webhook/053aa1a5-396c-4cff-b9c4-a71ca8910a22", {
                method: "POST",
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Ошибка отправки: ${response.statusText}`);
            }
            // Отправляем вебхук с UUID пользователя при клонировании голоса
            try {
                await fetch("https://rueleven.ru/webhook/373bb6fa-8fae-49fd-83b6-b503e7f286c4", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        uuid: user.id
                    })
                });
            } catch (webhookError) {
                // Логируем ошибку вебхука, но не прерываем процесс клонирования
                console.error("[VoiceCreateModal] Ошибка отправки вебхука UUID:", webhookError);
            }
            // Продолжаем ждать появления записи в таблице (прогресс-бар уже запущен)
            setIsUploading(false);
            // Ждем появления записи в таблице voices
            const timeoutMs = 30000; // 30 секунд максимум
            const pollDelayMs = 1000; // Проверяем каждую секунду
            const deadline = Date.now() + timeoutMs;
            let found = false;
            while(Date.now() < deadline && !found){
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", user.id).eq("name", voiceName.trim()).order("created_at", {
                    ascending: false
                }).limit(1);
                if (!error && data && data.length > 0) {
                    found = true;
                    stopProgressLoop();
                    setProgress(100);
                    await new Promise((resolve)=>setTimeout(resolve, 300)); // Небольшая задержка для завершения анимации
                    setIsWaiting(false);
                    await onVoiceCreated?.();
                    closeModal();
                    return;
                }
                await new Promise((resolve)=>setTimeout(resolve, pollDelayMs));
            }
            // Если не нашли за отведенное время
            stopProgressLoop();
            setIsWaiting(false);
            alert("Голос отправлен на обработку. Проверьте список голосов через несколько секунд.");
            await onVoiceCreated?.();
            closeModal();
        } catch (error) {
            console.error("[voices] Ошибка клонирования голоса:", error);
            stopProgressLoop();
            setIsUploading(false);
            setIsWaiting(false);
            alert(`Ошибка при клонировании голоса: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        }
    };
    const dropZoneClasses = `rounded-2xl border border-dashed border-purple-400/50 bg-purple-50/30 p-6 text-center transition-all duration-200 ${dragActive ? "shadow-lg -translate-y-0.5 border-purple-500" : "hover:shadow-md hover:-translate-y-0.5"}`;
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-[32px] bg-white shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-center border-b px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Создать голос"
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: closeModal,
                            className: "absolute right-6 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600",
                            disabled: isUploading || isRecording,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Закрыть"
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                "✕"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                    lineNumber: 507,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[70vh] overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "voice-name",
                                        className: "mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                        children: "Название голоса"
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "voice-name",
                                        value: voiceName,
                                        onChange: (event)=>setVoiceName(event.target.value),
                                        placeholder: "Придумайте название голоса",
                                        className: "w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-400",
                                        disabled: isUploading || isRecording
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "voice-description",
                                                className: "block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                                children: [
                                                    "Описание голоса ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: "(необязательно)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                lineNumber: 542,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs ${voiceDescription.length > MAX_DESCRIPTION_LENGTH ? "text-red-500" : "text-gray-400"}`,
                                                children: [
                                                    voiceDescription.length,
                                                    "/",
                                                    MAX_DESCRIPTION_LENGTH
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "voice-description",
                                        value: voiceDescription,
                                        onChange: (event)=>{
                                            const value = event.target.value;
                                            if (value.length <= MAX_DESCRIPTION_LENGTH) {
                                                setVoiceDescription(value);
                                            }
                                        },
                                        maxLength: MAX_DESCRIPTION_LENGTH,
                                        placeholder: "Добавьте описание голоса",
                                        className: "h-28 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-400",
                                        disabled: isUploading || isRecording
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                lineNumber: 540,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: dropZoneClasses,
                                onDragEnter: handleDrag,
                                onDragLeave: handleDrag,
                                onDragOver: handleDrag,
                                onDrop: handleDrop,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex max-w-sm flex-col items-center gap-3 text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-purple-200 bg-white p-3 text-purple-500",
                                            children: "↑"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold",
                                            children: "Перетащите аудио файл сюда"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "MP3, WAV, WebM или OGG до 50 МБ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 587,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:opacity-50",
                                            onClick: ()=>fileInputRef.current?.click(),
                                            disabled: isUploading || isRecording,
                                            children: "Выбрать файл"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 588,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            accept: "audio/*",
                                            className: "hidden",
                                            onChange: handleFileSelect,
                                            disabled: isUploading || isRecording
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                    lineNumber: 580,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this),
                            selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-purple-100 p-2 text-purple-600",
                                                    children: "🎵"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: selectedFile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500",
                                                            children: [
                                                                (selectedFile.size / 1024 / 1024).toFixed(2),
                                                                " МБ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 611,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedFile(null),
                                            className: "text-gray-400 transition hover:text-red-500",
                                            disabled: isUploading || isRecording,
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 622,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                    lineNumber: 610,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                lineNumber: 609,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full border-t border-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 637,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex justify-center text-xs uppercase",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-white px-2 text-gray-500",
                                            children: "или"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 639,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex max-w-sm flex-col items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-full border-4 border-purple-200 bg-white p-4",
                                            children: isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 w-12 animate-pulse rounded-full bg-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                lineNumber: 649,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 w-12 rounded-full bg-purple-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                lineNumber: 651,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 647,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-semibold text-gray-900",
                                                    children: isRecording ? "Идет запись..." : "Записать с микрофона"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-gray-500",
                                                    children: isRecording ? "Нажмите остановить для завершения записи" : "Нажмите начать для записи голоса"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 654,
                                            columnNumber: 17
                                        }, this),
                                        !isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: startRecording,
                                            className: "rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:opacity-50",
                                            disabled: isUploading || !!selectedFile,
                                            children: "Начать запись"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 665,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: stopRecording,
                                            className: "rounded-lg bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-500",
                                            children: "Остановить запись"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 674,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                    lineNumber: 646,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                lineNumber: 645,
                                columnNumber: 13
                            }, this),
                            recordedBlob && !isRecording && recordedAudioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg bg-green-100 p-2 text-green-600",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: "Запись завершена"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                                    lineNumber: 695,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        (recordedBlob.size / 1024).toFixed(2),
                                                                        " КБ"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                                    lineNumber: 696,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setRecordedBlob(null);
                                                        if (recordedAudioUrl) {
                                                            URL.revokeObjectURL(recordedAudioUrl);
                                                        }
                                                        setRecordedAudioUrl(null);
                                                    },
                                                    className: "text-gray-400 transition hover:text-red-500",
                                                    disabled: isUploading,
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 689,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 rounded-lg bg-white p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                ref: audioPlayerRef,
                                                src: recordedAudioUrl,
                                                controls: true,
                                                className: "flex-1",
                                                style: {
                                                    height: "32px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                lineNumber: 718,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 717,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                    lineNumber: 688,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                lineNumber: 687,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                        lineNumber: 522,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-t border-gray-200 px-6 py-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeModal,
                                    className: "rounded-lg border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50",
                                    disabled: isUploading || isRecording || isWaiting,
                                    children: "Отмена"
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                    lineNumber: 734,
                                    columnNumber: 13
                                }, this),
                                (isUploading || isWaiting || progress > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-1 flex-1 overflow-hidden rounded-full bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transition-[width] duration-100 ease-out",
                                        style: {
                                            width: `${progress}%`
                                        },
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 744,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                    lineNumber: 743,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                            lineNumber: 733,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCloneVoice,
                            disabled: isUploading || isRecording || isWaiting || !voiceName.trim() || !selectedFile && !recordedBlob,
                            className: "rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:ml-auto",
                            children: isUploading ? "Клонируем..." : isWaiting ? "Ожидаем..." : "Клонировать голос"
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                            lineNumber: 752,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                    lineNumber: 732,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
            lineNumber: 506,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
_s(VoiceCreateModal, "TXG+DIQ3+YdslZIkrwVlVanmnTk=");
_c = VoiceCreateModal;
var _c;
__turbopack_context__.k.register(_c, "VoiceCreateModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/DashboardVoicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardVoicesSection",
    ()=>DashboardVoicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardVoiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/DashboardVoiceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceCreateModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DashboardVoicesSection({ voices, currentUserId, onVoicesChanged }) {
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Мои голоса"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsModalOpen(true),
                        className: "min-w-[170px] rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500",
                        children: "Создать голос"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            voices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "У вас пока нет голосов"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsModalOpen(true),
                        className: "mt-4 inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500",
                        children: "Создать голос"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
                children: voices.map((voice)=>{
                    const key = voice.id ?? `${voice.uid}-${voice.name}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardVoiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardVoiceCard"], {
                        voice: voice,
                        currentUserId: currentUserId,
                        onVoiceChanged: onVoicesChanged
                    }, key, false, {
                        fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                        lineNumber: 57,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCreateModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceCreateModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onVoiceCreated: onVoicesChanged
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/DashboardVoicesSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(DashboardVoicesSection, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");
_c = DashboardVoicesSection;
var _c;
__turbopack_context__.k.register(_c, "DashboardVoicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AuthCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/AuthCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CosmoLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardAvatarsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/DashboardAvatarsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardVoicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/DashboardVoicesSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const dynamic = 'force-dynamic';
function Home() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [avatars, setAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingData, setIsLoadingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const checkAuth = {
                "Home.useEffect.checkAuth": async ()=>{
                    const { data: { user: currentUser } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    setUser(currentUser);
                    setIsLoading(false);
                    if (currentUser) {
                        fetchDashboardData();
                    }
                }
            }["Home.useEffect.checkAuth"];
            checkAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Home.useEffect"], []);
    const fetchDashboardData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchDashboardData]": async ()=>{
            setIsLoadingData(true);
            const { data: { user: currentUser } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!currentUser) {
                setIsLoadingData(false);
                return;
            }
            // Загружаем аватары (первые 6)
            const { data: avatarsData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", currentUser.id).order("created_at", {
                ascending: false
            }).limit(6);
            // Загружаем голоса (первые 6)
            const { data: voicesData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", currentUser.id).order("created_at", {
                ascending: false
            }).limit(6);
            setAvatars(avatarsData ?? []);
            setVoices((voicesData ?? []).filter({
                "Home.useCallback[fetchDashboardData]": (v)=>v.url && v.name
            }["Home.useCallback[fetchDashboardData]"]));
            setIsLoadingData(false);
        }
    }["Home.useCallback[fetchDashboardData]"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                ariaLabel: "Загрузка..."
            }, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(main)/page.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-white px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AuthCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthCard"], {}, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(main)/page.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto w-full max-w-[1350px] px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Главная"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-gray-600",
                                children: "Обзор ваших аватаров, голосов и материалов"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    isLoadingData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                            ariaLabel: "Загружаем данные..."
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/page.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardAvatarsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAvatarsSection"], {
                                avatars: avatars,
                                currentUserId: user.id,
                                onAvatarsChanged: fetchDashboardData
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$DashboardVoicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardVoicesSection"], {
                                voices: voices,
                                currentUserId: user.id,
                                onVoicesChanged: fetchDashboardData
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: "Мои материалы"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/material",
                                                className: "text-green-600 hover:text-green-700 font-semibold transition",
                                                children: "Все материалы →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "У вас пока нет материалов"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/material/editor",
                                                className: "mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500",
                                                children: "Создать материал"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/page.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(Home, "MJA/s6HDPBYwfaj135sRhIlOnIw=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8daedd95._.js.map