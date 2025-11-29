module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://base.lect-gen.ru") || "";
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzYzNDEzMjAwLCJleHAiOjE5MjExNzk2MDB9.idPB37uPfkR0tioORf3PqSuFUCPp6ZDTrdBWtUou_9Y") || "";
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey) : "TURBOPACK unreachable";
}),
"[project]/components/ui/LogoutModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoutModal",
    ()=>LogoutModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LogoutModal({ isOpen, onClose }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLoggingOut, setIsLoggingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        setIsLoggingOut(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            document.cookie = "app-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            router.push("/login");
            onClose();
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        } finally{
            setIsLoggingOut(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Выход"
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoutModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 text-gray-600",
                    children: "Вы действительно хотите выйти из аккаунта?"
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoutModal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/lib/prefetchAvatars.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearPrefetchCache",
    ()=>clearPrefetchCache,
    "getPrefetchedAvatars",
    ()=>getPrefetchedAvatars,
    "prefetchAvatarsData",
    ()=>prefetchAvatarsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
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
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            return;
        }
        // Проверяем, не загружаем ли мы те же данные
        if (prefetchCache.userId === user.id && now - prefetchCache.timestamp < CACHE_DURATION) {
            return;
        }
        // Загружаем данные в фоне
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", user.id).order("created_at", {
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
}),
"[project]/components/ui/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoutModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LogoutModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prefetchAvatars.ts [app-ssr] (ecmascript)");
"use client";
;
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
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "h-16 w-full bg-white shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-full w-full max-w-[1350px] items-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-1 items-center gap-8",
                            children: navLinks.map(({ href, label })=>{
                                const isActive = pathname === href;
                                const handleMouseEnter = ()=>{
                                    // Prefetch данные для страницы аватаров при наведении
                                    if ((href === "/avatars" || href === "/") && !isActive) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefetchAvatarsData"])();
                                    }
                                };
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-none justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoutModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoutModal"], {
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
}),
"[project]/components/ui/CosmoLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CosmoLoader",
    ()=>CosmoLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CosmoLoader({ ariaLabel = "Загрузка..." }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/app/avatars/servers/data:69c0a9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404ef6fa38aced2d34bba744ff0fb1ae23c6121202":"DeletePhotoAvatar"},"app/avatars/servers/DeletePhotoAvatar.ts",""] */ __turbopack_context__.s([
    "DeletePhotoAvatar",
    ()=>DeletePhotoAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var DeletePhotoAvatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("404ef6fa38aced2d34bba744ff0fb1ae23c6121202", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "DeletePhotoAvatar"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vRGVsZXRlUGhvdG9BdmF0YXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XHJcbmNvbnN0IGhleWdlbkFwaUtleSA9IHByb2Nlc3MuZW52LkhFWUdFTl9BUElfS0VZO1xyXG5cclxuaWYgKCFzdXBhYmFzZVVybCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCDQvdC1INC30LDQtNCw0L1cIik7XHJcbn1cclxuXHJcbmlmICghc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkg0L3QtSDQt9Cw0LTQsNC9XCIpO1xyXG59XHJcblxyXG5jb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZVNlcnZpY2VSb2xlS2V5KTtcclxuXHJcbmludGVyZmFjZSBEZWxldGVQaG90b0F2YXRhcklucHV0IHtcclxuICB1aWQ6IHN0cmluZztcclxuICByZWNvcmRJZD86IHN0cmluZyB8IG51bGw7XHJcbiAgZ3JvdXBJZD86IHN0cmluZyB8IG51bGw7XHJcbiAgaW1hZ2VLZXk/OiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsZXRlUGhvdG9BdmF0YXJSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZyb21IZXlnZW4oZ3JvdXBJZD86IHN0cmluZyB8IG51bGwpIHtcclxuICBpZiAoIWdyb3VwSWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghaGV5Z2VuQXBpS2V5KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIRVlHRU5fQVBJX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLmhleWdlbi5jb20vdjIvcGhvdG9fYXZhdGFyX2dyb3VwLyR7Z3JvdXBJZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtQXBpLUtleVwiOiBoZXlnZW5BcGlLZXksXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYNCd0LUg0YPQtNCw0LvQvtGB0Ywg0YPQtNCw0LvQuNGC0Ywg0LDQstCw0YLQsNGAINCyIEhleUdlbjogJHttZXNzYWdlIHx8IHJlc3BvbnNlLnN0YXR1c1RleHR9YFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBEZWxldGVQaG90b0F2YXRhcih7XHJcbiAgdWlkLFxyXG4gIHJlY29yZElkLFxyXG4gIGdyb3VwSWQsXHJcbiAgaW1hZ2VLZXksXHJcbn06IERlbGV0ZVBob3RvQXZhdGFySW5wdXQpOiBQcm9taXNlPERlbGV0ZVBob3RvQXZhdGFyUmVzdWx0PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghdWlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10L1cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVjb3JkSWQgJiYgIWdyb3VwSWQgJiYgIWltYWdlS2V5KSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQndC10YIg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YDQsCDQt9Cw0L/QuNGB0LhcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRlbGV0ZUZyb21IZXlnZW4oZ3JvdXBJZCk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2VBZG1pbi5mcm9tKFwicGhvdG9fYXZhdGFyc1wiKS5kZWxldGUoKS5lcShcInVpZFwiLCB1aWQpO1xyXG5cclxuICAgIGlmIChyZWNvcmRJZCkge1xyXG4gICAgICBxdWVyeSA9IHF1ZXJ5LmVxKFwiaWRcIiwgcmVjb3JkSWQpO1xyXG4gICAgfSBlbHNlIGlmIChncm91cElkKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuZXEoXCJncm91cF9pZFwiLCBncm91cElkKTtcclxuICAgIH0gZWxzZSBpZiAoaW1hZ2VLZXkpIHtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5lcShcImltYWdlX2tleVwiLCBpbWFnZUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwi0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LBcIjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJbRGVsZXRlUGhvdG9BdmF0YXJdXCIsIG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1UQXlEc0IifQ==
}),
"[project]/app/avatars/servers/data:e88a97 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406d5b6e083f7879367c2bfcb42f10d02bcd7af836":"UpdateAvatarName"},"app/avatars/servers/UpdateAvatarName.ts",""] */ __turbopack_context__.s([
    "UpdateAvatarName",
    ()=>UpdateAvatarName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var UpdateAvatarName = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406d5b6e083f7879367c2bfcb42f10d02bcd7af836", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UpdateAvatarName"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vVXBkYXRlQXZhdGFyTmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZVNlcnZpY2VSb2xlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWTtcclxuXHJcbmlmICghc3VwYWJhc2VVcmwpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwg0L3QtSDQt9Cw0LTQsNC9XCIpO1xyXG59XHJcblxyXG5pZiAoIXN1cGFiYXNlU2VydmljZVJvbGVLZXkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZINC90LUg0LfQsNC00LDQvVwiKTtcclxufVxyXG5cclxuY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSk7XHJcblxyXG5pbnRlcmZhY2UgVXBkYXRlQXZhdGFyTmFtZUlucHV0IHtcclxuICB1aWQ6IHN0cmluZztcclxuICByZWNvcmRJZDogc3RyaW5nO1xyXG4gIG5ld05hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZUF2YXRhck5hbWVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGRhdGVBdmF0YXJOYW1lKHtcclxuICB1aWQsXHJcbiAgcmVjb3JkSWQsXHJcbiAgbmV3TmFtZSxcclxufTogVXBkYXRlQXZhdGFyTmFtZUlucHV0KTogUHJvbWlzZTxVcGRhdGVBdmF0YXJOYW1lUmVzdWx0PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghdWlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0LnQtNC10L1cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVjb3JkSWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIklEINC30LDQv9C40YHQuCDQvdC1INGD0LrQsNC30LDQvVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFuZXdOYW1lIHx8ICFuZXdOYW1lLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi0JjQvNGPINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LxcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyaW1tZWROYW1lID0gbmV3TmFtZS50cmltKCk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxyXG4gICAgICAuZnJvbShcInBob3RvX2F2YXRhcnNcIilcclxuICAgICAgLnVwZGF0ZSh7IG5hbWU6IHRyaW1tZWROYW1lIH0pXHJcbiAgICAgIC5lcShcImlkXCIsIHJlY29yZElkKVxyXG4gICAgICAuZXEoXCJ1aWRcIiwgdWlkKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9XHJcbiAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCLQndC10LjQt9Cy0LXRgdGC0L3QsNGPINC+0YjQuNCx0LrQsFwiO1xyXG4gICAgY29uc29sZS5lcnJvcihcIltVcGRhdGVBdmF0YXJOYW1lXVwiLCBtZXNzYWdlKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogbWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBNEJzQiJ9
}),
"[project]/app/avatars/components/DeleteAvatarModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteAvatarModal",
    ()=>DeleteAvatarModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function DeleteAvatarModal({ isOpen, onClose, onConfirm, avatarName, isDeleting = false }) {
    if (!isOpen) return null;
    const handleConfirm = async ()=>{
        await onConfirm();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Удаление аватара"
                }, void 0, false, {
                    fileName: "[project]/app/avatars/components/DeleteAvatarModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/avatars/components/EditAvatarModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditAvatarModal",
    ()=>EditAvatarModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function EditAvatarModal({ isOpen, onClose, onConfirm, currentName, isSaving = false }) {
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setNewName(currentName);
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Редактировать имя"
                }, void 0, false, {
                    fileName: "[project]/app/avatars/components/EditAvatarModal.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/avatars/components/PhotoAvatarGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoAvatarGrid",
    ()=>PhotoAvatarGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$69c0a9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/avatars/servers/data:69c0a9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$e88a97__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/avatars/servers/data:e88a97 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$DeleteAvatarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/DeleteAvatarModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$EditAvatarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/EditAvatarModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function PhotoAvatarGrid({ avatars, currentUserId, onAvatarDeleted }) {
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredCardId, setHoveredCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarToDelete, setAvatarToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarToEdit, setAvatarToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const closeMenuTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Закрываем меню при клике вне его
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (openMenuId) {
                const menuElement = menuRefs.current[openMenuId];
                if (menuElement && !menuElement.contains(event.target)) {
                    setOpenMenuId(null);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        openMenuId
    ]);
    // Очищаем таймер при размонтировании
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (closeMenuTimeoutRef.current) {
                clearTimeout(closeMenuTimeoutRef.current);
            }
        };
    }, []);
    const handleMenuClick = (key, event)=>{
        event.stopPropagation();
        setOpenMenuId(openMenuId === key ? null : key);
    };
    const handleEditClick = (avatar, key)=>{
        setOpenMenuId(null);
        setAvatarToEdit({
            avatar,
            key
        });
        setIsEditModalOpen(true);
    };
    const handleDeleteClick = (avatar, key)=>{
        setOpenMenuId(null);
        if (!currentUserId) {
            alert("Не удалось определить пользователя");
            return;
        }
        setAvatarToDelete({
            avatar,
            key
        });
        setIsDeleteModalOpen(true);
    };
    const handleEditConfirm = async (newName)=>{
        if (!avatarToEdit || !currentUserId || !avatarToEdit.avatar.id) {
            return;
        }
        const { avatar, key } = avatarToEdit;
        // Проверяем наличие id после деструктуризации
        if (!avatar.id) {
            return;
        }
        try {
            setEditingId(key);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$e88a97__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateAvatarName"])({
                uid: currentUserId,
                recordId: avatar.id,
                newName
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось обновить имя");
            }
            setIsEditModalOpen(false);
            setAvatarToEdit(null);
            await onAvatarDeleted?.();
        } catch (error) {
            console.error("[avatars] Ошибка редактирования:", error);
            alert(`Ошибка при редактировании: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setEditingId(null);
        }
    };
    const handleDeleteConfirm = async ()=>{
        if (!avatarToDelete || !currentUserId) {
            return;
        }
        const { avatar, key } = avatarToDelete;
        try {
            setDeletingId(key);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$69c0a9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["DeletePhotoAvatar"])({
                uid: currentUserId,
                recordId: avatar.id ?? null,
                groupId: avatar.group_id ?? avatar.hey_gen_id ?? null,
                imageKey: avatar.image_key
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось удалить аватар");
            }
            setIsDeleteModalOpen(false);
            setAvatarToDelete(null);
            await onAvatarDeleted?.();
        } catch (error) {
            console.error("[avatars] Ошибка удаления:", error);
            alert(`Ошибка при удалении: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setDeletingId(null);
        }
    };
    const handleDeleteCancel = ()=>{
        setIsDeleteModalOpen(false);
        setAvatarToDelete(null);
    };
    const handleEditCancel = ()=>{
        setIsEditModalOpen(false);
        setAvatarToEdit(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        children: [
            avatars.map((avatar)=>{
                const key = avatar.id ?? avatar.hey_gen_id ?? avatar.group_id ?? `${avatar.uid}-${avatar.image_key}`;
                const isHovered = hoveredCardId === key;
                const showMenuButton = isHovered || openMenuId === key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "group relative rounded-3xl border border-gray-100 bg-white p-4 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
                    onMouseLeave: ()=>{
                        setHoveredCardId(null);
                        // Закрываем меню через 1 секунду после ухода курсора
                        if (closeMenuTimeoutRef.current) {
                            clearTimeout(closeMenuTimeoutRef.current);
                        }
                        closeMenuTimeoutRef.current = setTimeout(()=>{
                            if (openMenuId === key) {
                                setOpenMenuId(null);
                            }
                        }, 500);
                    },
                    onMouseEnter: ()=>{
                        setHoveredCardId(key);
                        // Отменяем закрытие меню если курсор вернулся
                        if (closeMenuTimeoutRef.current) {
                            clearTimeout(closeMenuTimeoutRef.current);
                            closeMenuTimeoutRef.current = null;
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-3 text-center text-xl font-semibold text-gray-900",
                            children: avatar.name
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-[3/4] w-full overflow-hidden rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: avatar.photo,
                                    alt: `Фото аватара ${avatar.name}`,
                                    fill: true,
                                    sizes: "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
                                    className: "object-contain",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-3 top-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (e)=>handleMenuClick(key, e),
                                            className: `flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md transition-all duration-200 hover:bg-white hover:text-gray-900 ${showMenuButton ? "opacity-100" : "opacity-0"}`,
                                            "aria-label": "Меню",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2.5,
                                                className: "h-4 w-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "5",
                                                        cy: "12",
                                                        r: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "19",
                                                        cy: "12",
                                                        r: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        openMenuId === key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                menuRefs.current[key] = el;
                                            },
                                            className: "absolute right-0 top-10 z-50 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleEditClick(avatar, key),
                                                    disabled: editingId === key || deletingId === key,
                                                    className: "w-full rounded-t-lg px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                                                    children: "Редактировать"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleDeleteClick(avatar, key),
                                                    disabled: editingId === key || deletingId === key,
                                                    className: "w-full rounded-b-lg px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-50",
                                                    children: "Удалить"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        avatar.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-center text-xs text-gray-400",
                            children: new Intl.DateTimeFormat("ru-RU", {
                                dateStyle: "medium",
                                timeStyle: "short"
                            }).format(new Date(avatar.created_at))
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                            lineNumber: 271,
                            columnNumber: 15
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$DeleteAvatarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteAvatarModal"], {
                isOpen: isDeleteModalOpen,
                onClose: handleDeleteCancel,
                onConfirm: handleDeleteConfirm,
                avatarName: avatarToDelete?.avatar.name ?? "",
                isDeleting: avatarToDelete !== null && deletingId === avatarToDelete.key
            }, void 0, false, {
                fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$EditAvatarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditAvatarModal"], {
                isOpen: isEditModalOpen,
                onClose: handleEditCancel,
                onConfirm: handleEditConfirm,
                currentName: avatarToEdit?.avatar.name ?? "",
                isSaving: avatarToEdit !== null && editingId === avatarToEdit.key
            }, void 0, false, {
                fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/components/AvatarsEmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarsEmptyState",
    ()=>AvatarsEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function AvatarsEmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex flex-col items-center justify-center py-8 text-center sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-transform group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20 md:h-24 md:w-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 text-blue-600 sm:h-10 sm:w-10 md:h-12 md:w-12",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 text-lg font-bold text-gray-900 sm:text-xl",
                children: "Нет аватаров"
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-sm text-xs text-gray-600 sm:text-sm",
                children: "Создайте аватар для начала работы с видео"
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/components/AvatarsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarsSection",
    ()=>AvatarsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prefetchAvatars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CosmoLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$PhotoAvatarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/PhotoAvatarGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/AvatarsEmptyState.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function AvatarsSection() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isFetchingAvatars, setIsFetchingAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [photoAvatars, setPhotoAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const fetchPhotoAvatars = async ()=>{
            const prefetchedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrefetchedAvatars"])();
            if (prefetchedData) {
                setPhotoAvatars(prefetchedData);
                setIsFetchingAvatars(false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearPrefetchCache"])();
                const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!isMounted) return;
                if (!user) {
                    router.push("/login");
                    setCurrentUserId(null);
                    setPhotoAvatars([]);
                    return;
                }
                setCurrentUserId(user.id);
                return;
            }
            setIsFetchingAvatars(true);
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!isMounted) return;
            if (!user) {
                router.push("/login");
                setCurrentUserId(null);
                setPhotoAvatars([]);
                setIsFetchingAvatars(false);
                return;
            }
            setCurrentUserId(user.id);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", user.id).order("created_at", {
                ascending: false
            });
            if (!isMounted) return;
            if (error) {
                console.error("[avatars] Ошибка загрузки аватаров:", error);
            } else {
                setPhotoAvatars(data ?? []);
            }
            setIsFetchingAvatars(false);
        };
        fetchPhotoAvatars();
        return ()=>{
            isMounted = false;
        };
    }, [
        router
    ]);
    const refetchPhotoAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentUserId) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearPrefetchCache"])();
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", currentUserId).order("created_at", {
            ascending: false
        });
        if (error) {
            console.error("[avatars] Ошибка загрузки аватаров:", error);
        } else {
            setPhotoAvatars(data ?? []);
        }
    }, [
        currentUserId
    ]);
    const hasPhotoAvatars = photoAvatars.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-8 sm:mb-10 md:mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 sm:mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-gray-900 sm:text-2xl",
                    children: "Мои аватары"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-4 sm:rounded-3xl sm:p-6 md:p-8",
                children: isFetchingAvatars ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-[200px] items-center justify-center sm:min-h-[300px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                        ariaLabel: "Загружаем фото-аватары..."
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this) : !hasPhotoAvatars ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarsEmptyState"], {}, void 0, false, {
                    fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$PhotoAvatarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhotoAvatarGrid"], {
                    avatars: photoAvatars,
                    currentUserId: currentUserId,
                    onAvatarDeleted: refetchPhotoAvatars
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/voices/components/VoiceCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceCard",
    ()=>VoiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function VoiceCard({ name, url, description, menuSlot, onMouseEnter, onMouseLeave }) {
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formattedDescription = description?.trim() ?? "";
    const handlePlay = ()=>{
        if (!audioRef.current) {
            audioRef.current = new Audio(url);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: [
            menuSlot,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handlePlay,
                        className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white transition hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
                        "aria-label": isPlaying ? "Остановить воспроизведение" : "Проиграть голос",
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "h-6 w-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                            }, void 0, false, {
                                fileName: "[project]/app/voices/components/VoiceCard.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceCard.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "h-6 w-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 5v14l11-7z"
                            }, void 0, false, {
                                fileName: "[project]/app/voices/components/VoiceCard.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceCard.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/voices/components/VoiceCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl font-semibold text-gray-900",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceCard.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/voices/components/VoiceCard.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/voices/components/VoiceCard.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-gray-900",
                        children: "Описание:"
                    }, void 0, false, {
                        fileName: "[project]/app/voices/components/VoiceCard.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    " ",
                    formattedDescription || "Не указано"
                ]
            }, void 0, true, {
                fileName: "[project]/app/voices/components/VoiceCard.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/voices/components/VoiceCard.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/voices/components/VoiceDeleteModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceDeleteModal",
    ()=>VoiceDeleteModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function VoiceDeleteModal({ isOpen, onClose, onConfirm, voiceName, isDeleting = false }) {
    if (!isOpen) {
        return null;
    }
    const handleConfirm = async ()=>{
        await onConfirm();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Удаление голоса"
                }, void 0, false, {
                    fileName: "[project]/app/voices/components/VoiceDeleteModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/voices/components/VoiceEditModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceEditModal",
    ()=>VoiceEditModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const MAX_DESCRIPTION_LENGTH = 100;
function VoiceEditModal({ isOpen, onClose, onConfirm, currentName, currentDescription, isSaving = false }) {
    const [formValues, setFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: currentName,
        description: currentDescription
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setFormValues({
                name: currentName,
                description: currentDescription
            });
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-semibold text-gray-900",
                    children: "Редактировать голос"
                }, void 0, false, {
                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "voice-name",
                                    className: "mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                    children: "Имя"
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "voice-description",
                                            className: "block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                            children: "Описание"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceEditModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/voices/servers/data:bbae30 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40283b640ad833f930e378e3009dbbd29e474a640a":"DeleteVoice"},"app/voices/servers/DeleteVoice.ts",""] */ __turbopack_context__.s([
    "DeleteVoice",
    ()=>DeleteVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var DeleteVoice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40283b640ad833f930e378e3009dbbd29e474a640a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "DeleteVoice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vRGVsZXRlVm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkw7XG5jb25zdCBzdXBhYmFzZVNlcnZpY2VSb2xlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWTtcblxuaWYgKCFzdXBhYmFzZVVybCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwg0L3QtSDQt9Cw0LTQsNC9XCIpO1xufVxuXG5pZiAoIXN1cGFiYXNlU2VydmljZVJvbGVLZXkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XG59XG5cbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZVJvbGVLZXkpO1xuXG5pbnRlcmZhY2UgRGVsZXRlVm9pY2VJbnB1dCB7XG4gIHVpZDogc3RyaW5nO1xuICB2b2ljZUlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEZWxldGVWb2ljZVJlc3VsdCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gRGVsZXRlVm9pY2Uoe1xuICB1aWQsXG4gIHZvaWNlSWQsXG59OiBEZWxldGVWb2ljZUlucHV0KTogUHJvbWlzZTxEZWxldGVWb2ljZVJlc3VsdD4ge1xuICB0cnkge1xuICAgIGlmICghdWlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9XCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIXZvaWNlSWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJRCDQs9C+0LvQvtGB0LAg0L3QtSDRg9C60LDQt9Cw0L1cIiB9O1xuICAgIH1cblxuICAgIC8vINCh0L3QsNGH0LDQu9CwINC/0L7Qu9GD0YfQsNC10Lwg0LfQsNC/0LjRgdGMINC40Lcg0YLQsNCx0LvQuNGG0YssINGH0YLQvtCx0Ysg0LjQt9Cy0LvQtdGH0Ywgdm9pY2VfaWQg0Lgg0L3QsNC30LLQsNC90LjQtSDQs9C+0LvQvtGB0LBcbiAgICBjb25zdCB7IGRhdGE6IHZvaWNlUmVjb3JkLCBlcnJvcjogZmV0Y2hFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxuICAgICAgLmZyb20oXCJ2b2ljZXNcIilcbiAgICAgIC5zZWxlY3QoXCJ2b2ljZV9pZCwgbmFtZVwiKVxuICAgICAgLmVxKFwiaWRcIiwgdm9pY2VJZClcbiAgICAgIC5lcShcInVpZFwiLCB1aWQpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoZmV0Y2hFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGDQndC1INGD0LTQsNC70L7RgdGMINC90LDQudGC0Lgg0LPQvtC70L7RgTogJHtmZXRjaEVycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgaWYgKCF2b2ljZVJlY29yZCB8fCAhdm9pY2VSZWNvcmQudm9pY2VfaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCd0LUg0L3QsNC50LTQtdC90L4g0LfQvdCw0YfQtdC90LjQtSB2b2ljZV9pZCDQtNC70Y8g0Y3RgtC+0LPQviDQs9C+0LvQvtGB0LBcIik7XG4gICAgfVxuXG4gICAgLy8g0J7RgtC/0YDQsNCy0LvRj9C10Lwg0LLQtdCx0YXRg9C6INGBIHZvaWNlX2lkLCDQvdCw0LfQstCw0L3QuNC10Lwg0LPQvtC70L7RgdCwINC4IFVVSUQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gICAgY29uc3Qgd2ViaG9va1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vcnVlbGV2ZW4ucnUvd2ViaG9vay85MzJhZWU2Zi1iNTU0LTQ1ZTktYjIzMi1mNzgyOWIwYTFkMDZcIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxuICAgICAgICAgIHZvaWNlX2lkOiB2b2ljZVJlY29yZC52b2ljZV9pZCxcbiAgICAgICAgICB2b2ljZV9uYW1lOiB2b2ljZVJlY29yZC5uYW1lIHx8IG51bGwsXG4gICAgICAgICAgdXVpZDogdWlkLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCF3ZWJob29rUmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB3ZWJob29rUmVzcG9uc2UudGV4dCgpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBg0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0L/RgNCw0LLQuNGC0Ywg0LLQtdCx0YXRg9C6OiAke1xuICAgICAgICAgIG1lc3NhZ2UgfHwgd2ViaG9va1Jlc3BvbnNlLnN0YXR1c1RleHRcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8g0KPQtNCw0LvRj9C10Lwg0LfQsNC/0LjRgdGMINC40Lcg0YLQsNCx0LvQuNGG0YtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXG4gICAgICAuZnJvbShcInZvaWNlc1wiKVxuICAgICAgLmRlbGV0ZSgpXG4gICAgICAuZXEoXCJpZFwiLCB2b2ljZUlkKVxuICAgICAgLmVxKFwidWlkXCIsIHVpZCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwi0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LBcIjtcbiAgICBjb25zb2xlLmVycm9yKFwiW0RlbGV0ZVZvaWNlXVwiLCBtZXNzYWdlKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBMkJzQiJ9
}),
"[project]/app/voices/servers/data:f4bb9c [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40db8994e698b2000fa8f50a7e0d97e8cf222ef9c0":"UpdateVoice"},"app/voices/servers/UpdateVoice.ts",""] */ __turbopack_context__.s([
    "UpdateVoice",
    ()=>UpdateVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var UpdateVoice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40db8994e698b2000fa8f50a7e0d97e8cf222ef9c0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UpdateVoice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vVXBkYXRlVm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XHJcblxyXG5pZiAoIXN1cGFiYXNlVXJsKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMINC90LUg0LfQsNC00LDQvVwiKTtcclxufVxyXG5cclxuaWYgKCFzdXBhYmFzZVNlcnZpY2VSb2xlS2V5KSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XHJcbn1cclxuXHJcbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZVJvbGVLZXkpO1xyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZVZvaWNlSW5wdXQge1xyXG4gIHVpZDogc3RyaW5nO1xyXG4gIHZvaWNlSWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVXBkYXRlVm9pY2VSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGRhdGVWb2ljZSh7XHJcbiAgdWlkLFxyXG4gIHZvaWNlSWQsXHJcbiAgbmFtZSxcclxuICBkZXNjcmlwdGlvbixcclxufTogVXBkYXRlVm9pY2VJbnB1dCk6IFByb21pc2U8VXBkYXRlVm9pY2VSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCF1aWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcItCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC90LDQudC00LXQvVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2b2ljZUlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJRCDQs9C+0LvQvtGB0LAg0L3QtSDRg9C60LDQt9Cw0L1cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbmFtZSB8fCAhbmFtZS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcItCY0LzRjyDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8XCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmltbWVkTmFtZSA9IG5hbWUudHJpbSgpO1xyXG4gICAgY29uc3QgdHJpbW1lZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24/LnRyaW0oKTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXHJcbiAgICAgIC5mcm9tKFwidm9pY2VzXCIpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIG5hbWU6IHRyaW1tZWROYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0cmltbWVkRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgfSlcclxuICAgICAgLmVxKFwiaWRcIiwgdm9pY2VJZClcclxuICAgICAgLmVxKFwidWlkXCIsIHVpZCk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwi0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LBcIjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJbVXBkYXRlVm9pY2VdXCIsIG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0E2QnNCIn0=
}),
"[project]/app/voices/components/VoiceGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceGrid",
    ()=>VoiceGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceDeleteModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceDeleteModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceEditModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceEditModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$bbae30__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/voices/servers/data:bbae30 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$f4bb9c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/voices/servers/data:f4bb9c [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
function VoiceGrid({ voices, currentUserId, onVoicesChanged }) {
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredCardId, setHoveredCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [voiceToDelete, setVoiceToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [voiceToEdit, setVoiceToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const closeMenuTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (openMenuId) {
                const menuElement = menuRefs.current[openMenuId];
                if (menuElement && !menuElement.contains(event.target)) {
                    setOpenMenuId(null);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        openMenuId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (closeMenuTimeoutRef.current) {
                clearTimeout(closeMenuTimeoutRef.current);
            }
        };
    }, []);
    if (voices.length === 0) {
        return null;
    }
    const validVoices = voices.filter((voice)=>voice.url && voice.name);
    if (validVoices.length === 0) {
        console.warn("[VoiceGrid] Нет валидных голосов для отображения");
        return null;
    }
    const handleMenuClick = (key, event)=>{
        event.stopPropagation();
        setOpenMenuId((prev)=>prev === key ? null : key);
    };
    const handleDeleteClick = (voice, key)=>{
        if (!currentUserId) {
            alert("Не удалось определить пользователя");
            return;
        }
        if (!voice.id) {
            alert("Не удалось определить идентификатор голоса");
            return;
        }
        setOpenMenuId(null);
        setVoiceToDelete({
            voice,
            key
        });
        setIsDeleteModalOpen(true);
    };
    const handleEditClick = (voice, key)=>{
        if (!currentUserId) {
            alert("Не удалось определить пользователя");
            return;
        }
        if (!voice.id) {
            alert("Не удалось определить идентификатор голоса");
            return;
        }
        setOpenMenuId(null);
        setVoiceToEdit({
            voice,
            key
        });
        setIsEditModalOpen(true);
    };
    const handleDeleteConfirm = async ()=>{
        if (!voiceToDelete || !currentUserId || !voiceToDelete.voice.id) {
            return;
        }
        try {
            setDeletingId(voiceToDelete.voice.id);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$bbae30__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["DeleteVoice"])({
                uid: currentUserId,
                voiceId: voiceToDelete.voice.id
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось удалить голос");
            }
            setIsDeleteModalOpen(false);
            setVoiceToDelete(null);
            await onVoicesChanged?.();
        } catch (error) {
            console.error("[voices] Ошибка удаления:", error);
            alert(`Ошибка при удалении: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setDeletingId(null);
        }
    };
    const handleEditConfirm = async ({ name, description })=>{
        if (!voiceToEdit || !currentUserId || !voiceToEdit.voice.id) {
            return;
        }
        try {
            setEditingId(voiceToEdit.voice.id);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$f4bb9c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateVoice"])({
                uid: currentUserId,
                voiceId: voiceToEdit.voice.id,
                name,
                description
            });
            if (!result.success) {
                throw new Error(result.error || "Не удалось обновить голос");
            }
            setIsEditModalOpen(false);
            setVoiceToEdit(null);
            await onVoicesChanged?.();
        } catch (error) {
            console.error("[voices] Ошибка редактирования:", error);
            alert(`Ошибка при редактировании: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
        } finally{
            setEditingId(null);
        }
    };
    const handleDeleteCancel = ()=>{
        setIsDeleteModalOpen(false);
        setVoiceToDelete(null);
    };
    const handleEditCancel = ()=>{
        setIsEditModalOpen(false);
        setVoiceToEdit(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        children: [
            validVoices.map((voice)=>{
                const key = voice.id ?? `${voice.uid}-${voice.name}`;
                const isHovered = hoveredCardId === key;
                const showMenuButton = isHovered || openMenuId === key;
                const isProcessing = !!voice.id && (voice.id === deletingId || voice.id === editingId);
                const menuSlot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-3 top-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (event)=>handleMenuClick(key, event),
                            className: `flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md transition-all duration-200 hover:bg-white hover:text-gray-900 ${showMenuButton ? "opacity-100" : "opacity-0"}`,
                            "aria-label": "Меню",
                            disabled: isProcessing,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: 2.5,
                                className: "h-4 w-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "5",
                                        cy: "12",
                                        r: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "19",
                                        cy: "12",
                                        r: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        openMenuId === key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                menuRefs.current[key] = el;
                            },
                            className: "absolute right-0 top-10 z-50 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleEditClick(voice, key),
                                    disabled: isProcessing || !voice.id || !currentUserId,
                                    className: "w-full rounded-t-lg px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50 disabled:opacity-50",
                                    children: "Редактировать"
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleDeleteClick(voice, key),
                                    disabled: isProcessing || !voice.id || !currentUserId,
                                    className: "w-full rounded-b-lg px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-50",
                                    children: "Удалить"
                                }, void 0, false, {
                                    fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                    lineNumber: 247,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                            lineNumber: 229,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceCard"], {
                    name: voice.name,
                    url: voice.url,
                    description: voice.description,
                    menuSlot: menuSlot,
                    onMouseEnter: ()=>{
                        setHoveredCardId(key);
                        if (closeMenuTimeoutRef.current) {
                            clearTimeout(closeMenuTimeoutRef.current);
                            closeMenuTimeoutRef.current = null;
                        }
                    },
                    onMouseLeave: ()=>{
                        setHoveredCardId((current)=>current === key ? null : current);
                        if (closeMenuTimeoutRef.current) {
                            clearTimeout(closeMenuTimeoutRef.current);
                        }
                        closeMenuTimeoutRef.current = setTimeout(()=>{
                            if (openMenuId === key) {
                                setOpenMenuId(null);
                            }
                        }, 500);
                    }
                }, key, false, {
                    fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                    lineNumber: 265,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceDeleteModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceDeleteModal"], {
                isOpen: isDeleteModalOpen,
                onClose: handleDeleteCancel,
                onConfirm: handleDeleteConfirm,
                voiceName: voiceToDelete?.voice.name ?? "",
                isDeleting: voiceToDelete?.voice.id !== undefined && voiceToDelete.voice.id === deletingId
            }, void 0, false, {
                fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceEditModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceEditModal"], {
                isOpen: isEditModalOpen,
                onClose: handleEditCancel,
                onConfirm: handleEditConfirm,
                currentName: voiceToEdit?.voice.name ?? "",
                currentDescription: voiceToEdit?.voice.description ?? "",
                isSaving: voiceToEdit?.voice.id !== undefined && voiceToEdit.voice.id === editingId
            }, void 0, false, {
                fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/voices/components/VoiceGrid.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/components/VoicesEmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoicesEmptyState",
    ()=>VoicesEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function VoicesEmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex flex-col items-center justify-center py-8 text-center sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 transition-transform group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20 md:h-24 md:w-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 text-purple-600 sm:h-10 sm:w-10 md:h-12 md:w-12",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-2 text-lg font-bold text-gray-900 sm:text-xl",
                children: "Нет голосов"
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-sm text-xs text-gray-600 sm:text-sm",
                children: "Создайте голос для использования в видео"
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/components/VoicesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoicesSection",
    ()=>VoicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CosmoLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VoicesEmptyState.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function VoicesSection() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isFetchingVoices, setIsFetchingVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchVoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsFetchingVoices(true);
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            router.push("/login");
            setCurrentUserId(null);
            setVoices([]);
            setIsFetchingVoices(false);
            return;
        }
        setCurrentUserId(user.id);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", user.id).order("created_at", {
            ascending: false
        });
        if (error) {
            console.error("[voices] Ошибка загрузки голосов:", error);
            setVoices([]);
        } else {
            console.log("[voices] Загружено голосов:", data?.length ?? 0, data);
            const validVoices = (data ?? []).filter((voice)=>voice.url && voice.name);
            console.log("[voices] Валидных голосов:", validVoices.length);
            setVoices(validVoices);
        }
        setIsFetchingVoices(false);
    }, [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchVoices();
    }, [
        fetchVoices
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-8 sm:mb-10 md:mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 sm:mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-gray-900 sm:text-2xl",
                    children: "Мои голоса"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border-2 border-dashed border-purple-200 bg-gradient-to-br from-purple-50/50 to-pink-50/50 p-4 sm:rounded-3xl sm:p-6 md:p-8",
                children: isFetchingVoices ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-[200px] items-center justify-center sm:min-h-[300px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                        ariaLabel: "Загружаем голоса..."
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this) : voices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoicesEmptyState"], {}, void 0, false, {
                    fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceGrid"], {
                    voices: voices,
                    currentUserId: currentUserId,
                    onVoicesChanged: fetchVoices
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/VoicesSection.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/components/VideosEmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideosEmptyState",
    ()=>VideosEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function VideosEmptyState({ onCreateClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-2xl border-2 border-dashed border-green-200 bg-gradient-to-br from-green-50/50 to-emerald-50/50 p-6 transition-all hover:border-green-300 hover:shadow-lg sm:rounded-3xl sm:p-8 md:p-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-transform group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20 md:h-24 md:w-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-8 w-8 text-green-600 sm:h-10 sm:w-10 md:h-12 md:w-12",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 1.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 text-lg font-bold text-gray-900 sm:text-xl",
                        children: "Создайте свое первое видео"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 max-w-sm text-xs text-gray-600 sm:mb-6 sm:text-sm",
                        children: "Используйте аватары и голоса для создания профессиональных видео с помощью нашего редактора"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCreateClick,
                        className: "w-full rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg active:scale-95 sm:w-auto sm:py-3",
                        children: "Создать видео"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-4 top-4 h-24 w-24 rounded-full bg-green-400 blur-3xl sm:left-10 sm:top-10 sm:h-32 sm:w-32"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-4 h-32 w-32 rounded-full bg-emerald-400 blur-3xl sm:bottom-10 sm:right-10 sm:h-40 sm:w-40"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/avatars/servers/data:7a96d0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40cd6299375834d156b90e590d5d7df8fc8ed2c79b":"UploadAvatar"},"app/avatars/servers/UploadAvatar.ts",""] */ __turbopack_context__.s([
    "UploadAvatar",
    ()=>UploadAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var UploadAvatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40cd6299375834d156b90e590d5d7df8fc8ed2c79b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "UploadAvatar"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vVXBsb2FkQXZhdGFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGhvdG9BdmF0YXJSb3cge1xuICBpZD86IHN0cmluZztcbiAgdWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGhvdG86IHN0cmluZztcbiAgaW1hZ2Vfa2V5OiBzdHJpbmc7XG4gIGhleV9nZW5faWQ6IHN0cmluZyB8IG51bGw7XG4gIGdyb3VwX2lkOiBzdHJpbmcgfCBudWxsO1xuICBzdGF0dXM6IFwiZG9uZVwiIHwgXCJlcnJvclwiO1xuICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVXBsb2FkQXZhdGFyU3VjY2VzcyB7XG4gIHN1Y2Nlc3M6IHRydWU7XG4gIGF2YXRhcjogUGhvdG9BdmF0YXJSb3c7XG59XG5cbmludGVyZmFjZSBVcGxvYWRBdmF0YXJGYWlsdXJlIHtcbiAgc3VjY2VzczogZmFsc2U7XG4gIGVycm9yOiBzdHJpbmc7XG59XG5cbnR5cGUgVXBsb2FkQXZhdGFyUmVzdWx0ID0gVXBsb2FkQXZhdGFyU3VjY2VzcyB8IFVwbG9hZEF2YXRhckZhaWx1cmU7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlUm9sZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XG5jb25zdCBoZXlnZW5BcGlLZXkgPSBwcm9jZXNzLmVudi5IRVlHRU5fQVBJX0tFWTtcblxuaWYgKCFzdXBhYmFzZVVybCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwg0L3QtSDQt9Cw0LTQsNC9XCIpO1xufVxuXG5pZiAoIXN1cGFiYXNlU2VydmljZVJvbGVLZXkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XG59XG5cbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZVJvbGVLZXkpO1xuXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRQaG90b1RvSGV5Z2VuKGZpbGU6IEZpbGUpIHtcbiAgaWYgKCFoZXlnZW5BcGlLZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIRVlHRU5fQVBJX0tFWSDQvdC1INC30LDQtNCw0L1cIik7XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly91cGxvYWQuaGV5Z2VuLmNvbS92MS9hc3NldFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtQXBpLUtleVwiOiBoZXlnZW5BcGlLZXksXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBmaWxlLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICB9LFxuICAgIGJvZHk6IGJ1ZmZlcixcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBg0J7RiNC40LHQutCwINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L46ICR7ZXJyb3JUZXh0IHx8IHJlc3BvbnNlLnN0YXR1c1RleHR9YFxuICAgICk7XG4gIH1cblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBwYXlsb2FkID0gQXJyYXkuaXNBcnJheShqc29uKSA/IGpzb25bMF0gOiBqc29uO1xuICBjb25zdCBkYXRhID0gcGF5bG9hZD8uZGF0YTtcblxuICBpZiAoIWRhdGE/LmltYWdlX2tleSB8fCAhZGF0YT8udXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INC+0YLQstC10YIgSGV5Z2VuINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGE0L7RgtC+XCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbWFnZUtleTogZGF0YS5pbWFnZV9rZXkgYXMgc3RyaW5nLFxuICAgIHBob3RvVXJsOiBkYXRhLnVybCBhcyBzdHJpbmcsXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBob3RvQXZhdGFySW5IZXlnZW4obmFtZTogc3RyaW5nLCBpbWFnZUtleTogc3RyaW5nKSB7XG4gIGlmICghaGV5Z2VuQXBpS2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSEVZR0VOX0FQSV9LRVkg0L3QtSDQt9Cw0LTQsNC9XCIpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmhleWdlbi5jb20vdjIvcGhvdG9fYXZhdGFyL2F2YXRhcl9ncm91cC9jcmVhdGVcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtQXBpLUtleVwiOiBoZXlnZW5BcGlLZXksXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaW1hZ2Vfa2V5OiBpbWFnZUtleSxcbiAgICAgIH0pLFxuICAgIH1cbiAgKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGDQntGI0LjQsdC60LAg0YHQvtC30LTQsNC90LjRjyDRhNC+0YLQvi3QsNCy0LDRgtCw0YDQsDogJHtlcnJvclRleHQgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dH1gXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHBheWxvYWQgPSBBcnJheS5pc0FycmF5KGpzb24pID8ganNvblswXSA6IGpzb247XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcjogcGF5bG9hZD8uZXJyb3IgPz8gbnVsbCxcbiAgICBkYXRhOiBwYXlsb2FkPy5kYXRhID8/IG51bGwsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGxvYWRBdmF0YXIoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxVcGxvYWRBdmF0YXJSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1aWQgPSBmb3JtRGF0YS5nZXQoXCJ1aWRcIik7XG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcImF2YXRhcl9uYW1lXCIpO1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJwaG90b1wiKTtcblxuICAgIGlmICh0eXBlb2YgdWlkICE9PSBcInN0cmluZ1wiIHx8ICF1aWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCLQndC1INGD0LTQsNC70L7RgdGMINC+0L/RgNC10LTQtdC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8ICFuYW1lLnRyaW0oKSkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcItCS0LLQtdC00LjRgtC1INC40LzRjyDQsNCy0LDRgtCw0YDQsFwiIH07XG4gICAgfVxuXG4gICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwi0KTQsNC50Lsg0L3QtSDQvdCw0LnQtNC10L1cIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHRyaW1tZWROYW1lID0gbmFtZS50cmltKCk7XG5cbiAgICBjb25zdCB7IGltYWdlS2V5LCBwaG90b1VybCB9ID0gYXdhaXQgdXBsb2FkUGhvdG9Ub0hleWdlbihmaWxlKTtcbiAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBjcmVhdGVQaG90b0F2YXRhckluSGV5Z2VuKFxuICAgICAgdHJpbW1lZE5hbWUsXG4gICAgICBpbWFnZUtleVxuICAgICk7XG5cbiAgICBjb25zdCBzdGF0dXM6IFwiZG9uZVwiIHwgXCJlcnJvclwiID0gY3JlYXRlUmVzdWx0LmVycm9yID8gXCJlcnJvclwiIDogXCJkb25lXCI7XG4gICAgY29uc3QgcmVjb3JkOiBQaG90b0F2YXRhclJvdyA9IHtcbiAgICAgIHVpZCxcbiAgICAgIG5hbWU6IHRyaW1tZWROYW1lLFxuICAgICAgcGhvdG86IHBob3RvVXJsLFxuICAgICAgaW1hZ2Vfa2V5OiBpbWFnZUtleSxcbiAgICAgIGhleV9nZW5faWQ6IGNyZWF0ZVJlc3VsdC5kYXRhPy5pZCA/PyBudWxsLFxuICAgICAgZ3JvdXBfaWQ6XG4gICAgICAgIGNyZWF0ZVJlc3VsdC5kYXRhPy5ncm91cF9pZCA/P1xuICAgICAgICBjcmVhdGVSZXN1bHQuZGF0YT8uaWQgPz9cbiAgICAgICAgY3JlYXRlUmVzdWx0LmRhdGE/Lmdyb3VwID8/XG4gICAgICAgIG51bGwsXG4gICAgICBzdGF0dXMsXG4gICAgfTtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAgIC5mcm9tKFwicGhvdG9fYXZhdGFyc1wiKVxuICAgICAgLmluc2VydChyZWNvcmQpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5zaW5nbGUoKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGF2YXRhcjogZGF0YSBhcyBQaG90b0F2YXRhclJvdyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcItCd0LXQuNC30LLQtdGB0YLQvdCw0Y8g0L7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwXCI7XG4gICAgY29uc29sZS5lcnJvcihcIltVcGxvYWRBdmF0YXJdXCIsIG1lc3NhZ2UpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogbWVzc2FnZSB9O1xuICB9XG59XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBbUhzQiJ9
}),
"[project]/app/avatars/components/AvatarUploadModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarUploadModal",
    ()=>AvatarUploadModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$7a96d0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/avatars/servers/data:7a96d0 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
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
    const [avatarName, setAvatarName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewUrls, setPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const stopProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
    }, []);
    const startProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        stopProgressLoop();
        const startTime = Date.now();
        progressIntervalRef.current = setInterval(()=>{
            setProgress((prev)=>{
                const elapsed = Date.now() - startTime;
                const nextValue = Math.min(90, elapsed / 20000 * 90);
                return nextValue > prev ? nextValue : prev;
            });
        }, 200);
    }, [
        stopProgressLoop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            previewUrls.forEach((url)=>URL.revokeObjectURL(url));
        };
    }, [
        previewUrls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            isMountedRef.current = false;
            stopProgressLoop();
        };
    }, [
        stopProgressLoop
    ]);
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setAvatarName("");
        setSelectedFiles([]);
        previewUrls.forEach((url)=>URL.revokeObjectURL(url));
        setPreviewUrls([]);
        setProgress(0);
        stopProgressLoop();
    }, [
        previewUrls,
        stopProgressLoop
    ]);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        resetState();
        onClose();
    }, [
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
    const createPreviews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((files)=>{
        previewUrls.forEach((url)=>URL.revokeObjectURL(url));
        const limitedFiles = files.slice(0, 1);
        setSelectedFiles(limitedFiles);
        setPreviewUrls(limitedFiles.map((file)=>URL.createObjectURL(file)));
    }, [
        previewUrls
    ]);
    const handleDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (event.type === "dragenter" || event.type === "dragover") {
            setDragActive(true);
        } else if (event.type === "dragleave") {
            setDragActive(false);
        }
    }, []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
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
    }, [
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
    const waitForAvatarCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (recordId, initialStatus)=>{
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("status").eq("id", recordId).single();
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
    }, []);
    const handleUpload = async ()=>{
        if (isUploading || !avatarName.trim() || selectedFiles.length === 0) {
            return;
        }
        setIsUploading(true);
        setProgress(0);
        startProgressLoop();
        try {
            const { data: { user }, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$7a96d0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UploadAvatar"])(formData);
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
    const dropZoneClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const base = "rounded-2xl border border-dashed border-blue-400/50 bg-blue-50/30 p-6 text-center transition-all duration-200";
        if (dragActive) {
            return `${base} shadow-lg -translate-y-0.5`;
        }
        return `${base} hover:shadow-md hover:-translate-y-0.5`;
    }, [
        dragActive
    ]);
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-[32px] bg-white shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-center border-b px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Загрузите фото для аватара"
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: closeModal,
                            className: "absolute right-6 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[70vh] overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "avatar-name",
                                        className: "mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                        children: "Имя аватара"
                                    }, void 0, false, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: dropZoneClasses,
                                onDragEnter: handleDrag,
                                onDragLeave: handleDrag,
                                onDragOver: handleDrag,
                                onDrop: handleDrop,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex max-w-sm flex-col items-center gap-3 text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-blue-200 bg-white p-3 text-blue-500",
                                            children: "↑"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold",
                                            children: "Перетащите фотографию сюда"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "PNG или JPG до 10 МБ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-500",
                                            onClick: ()=>fileInputRef.current?.click(),
                                            children: "Выбрать файл"
                                        }, void 0, false, {
                                            fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700",
                                children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    previewUrls[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 text-xs text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-3 text-sm font-semibold text-gray-800",
                                        children: "Требования к фото"
                                    }, void 0, false, {
                                        fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Фото в анфас (лицо прямо в камеру)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Хорошее качество изображения, чёткое и резкое"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Без теней на лице, равномерное освещение"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Без других людей на фото, только вы"
                                            }, void 0, false, {
                                                fileName: "[project]/app/avatars/components/AvatarUploadModal.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-t border-gray-200 px-6 py-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                (isUploading || progress > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-1 flex-1 overflow-hidden rounded-full bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/voices/components/VoiceCreateModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceCreateModal",
    ()=>VoiceCreateModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
"use client";
;
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
    const [voiceName, setVoiceName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [voiceDescription, setVoiceDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordedBlob, setRecordedBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recordedAudioUrl, setRecordedAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWaiting, setIsWaiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const progressIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioPlayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
    }, []);
    const startProgressLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        stopProgressLoop();
        setProgress(0);
        const startTime = Date.now();
        progressIntervalRef.current = setInterval(()=>{
            const elapsed = Date.now() - startTime;
            const nextValue = Math.min(100, elapsed / 15000 * 100);
            setProgress(nextValue);
        }, 50);
    }, [
        stopProgressLoop
    ]);
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
            mediaRecorderRef.current.stream.getTracks().forEach((track)=>track.stop());
        }
    }, [
        recordedAudioUrl,
        stopProgressLoop
    ]);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        resetState();
        onClose();
    }, [
        onClose,
        resetState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (mediaRecorderRef.current?.stream) {
                mediaRecorderRef.current.stream.getTracks().forEach((track)=>track.stop());
            }
            // Очищаем URL при размонтировании
            if (recordedAudioUrl) {
                URL.revokeObjectURL(recordedAudioUrl);
            }
            stopProgressLoop();
        };
    }, [
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
    const handleDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (event.type === "dragenter" || event.type === "dragover") {
            setDragActive(true);
        } else if (event.type === "dragleave") {
            setDragActive(false);
        }
    }, []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
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
    }, []);
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
            const { data: { user }, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
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
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", user.id).eq("name", voiceName.trim()).order("created_at", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-[32px] bg-white shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-center border-b px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Создать голос"
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: closeModal,
                            className: "absolute right-6 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600",
                            disabled: isUploading || isRecording,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[70vh] overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "voice-name",
                                        className: "mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                        children: "Название голоса"
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "voice-description",
                                                className: "block text-xs font-semibold uppercase tracking-wide text-gray-500",
                                                children: [
                                                    "Описание голоса ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: dropZoneClasses,
                                onDragEnter: handleDrag,
                                onDragLeave: handleDrag,
                                onDragOver: handleDrag,
                                onDrop: handleDrop,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex max-w-sm flex-col items-center gap-3 text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-purple-200 bg-white p-3 text-purple-500",
                                            children: "↑"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-semibold",
                                            children: "Перетащите аудио файл сюда"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "MP3, WAV, WebM или OGG до 50 МБ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 587,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-purple-100 p-2 text-purple-600",
                                                    children: "🎵"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: selectedFile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex justify-center text-xs uppercase",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex max-w-sm flex-col items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-full border-4 border-purple-200 bg-white p-4",
                                            children: isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 w-12 animate-pulse rounded-full bg-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                lineNumber: 649,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-semibold text-gray-900",
                                                    children: isRecording ? "Идет запись..." : "Записать с микрофона"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        !isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: startRecording,
                                            className: "rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:opacity-50",
                                            disabled: isUploading || !!selectedFile,
                                            children: "Начать запись"
                                        }, void 0, false, {
                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                            lineNumber: 665,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            recordedBlob && !isRecording && recordedAudioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg bg-green-100 p-2 text-green-600",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: "Запись завершена"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/voices/components/VoiceCreateModal.tsx",
                                                                    lineNumber: 695,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 rounded-lg bg-white p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-t border-gray-200 px-6 py-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                (isUploading || isWaiting || progress > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-1 flex-1 overflow-hidden rounded-full bg-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/(main)/components/VideoCreationWizard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoCreationWizard",
    ()=>VideoCreationWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$AvatarUploadModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/AvatarUploadModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCreateModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceCreateModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function VideoCreationWizard({ hasAvatars, hasVoices, onAvatarsChanged, onVoicesChanged, onClose }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("avatar");
    const [isAvatarModalOpen, setIsAvatarModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVoiceModalOpen, setIsVoiceModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarCreated, setAvatarCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voiceCreated, setVoiceCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createdAvatarId, setCreatedAvatarId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [createdVoiceId, setCreatedVoiceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasAvatars && hasVoices) {
            router.push("/material/editor");
            return;
        }
        if (!hasAvatars) {
            setCurrentStep("avatar");
        } else if (!hasVoices) {
            setCurrentStep("voice");
        }
    }, [
        hasAvatars,
        hasVoices,
        router
    ]);
    const handleAvatarCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setAvatarCreated(true);
        setIsAvatarModalOpen(false);
        await onAvatarsChanged?.();
        // Небольшая задержка для обновления состояния
        setTimeout(async ()=>{
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (user) {
                // Получаем ID созданного аватара (последний по времени создания)
                const { data: avatarsData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("id").eq("uid", user.id).order("created_at", {
                    ascending: false
                }).limit(1);
                const avatarId = avatarsData && avatarsData.length > 0 && avatarsData[0].id ? avatarsData[0].id : null;
                if (avatarId) {
                    setCreatedAvatarId(avatarId);
                }
                const { data: voicesData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", user.id);
                const validVoices = (voicesData ?? []).filter((voice)=>voice.url && voice.name);
                if (validVoices.length === 0) {
                    setCurrentStep("voice");
                } else {
                    // Если есть голос, переходим в редактор с параметрами
                    const params = new URLSearchParams();
                    if (avatarId) {
                        params.set("avatarId", avatarId);
                    }
                    router.push(`/material/editor?${params.toString()}`);
                }
            }
        }, 1000);
    }, [
        onAvatarsChanged,
        router
    ]);
    const handleVoiceCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setVoiceCreated(true);
        setIsVoiceModalOpen(false);
        await onVoicesChanged?.();
        // Получаем ID созданного голоса и переходим в редактор
        setTimeout(async ()=>{
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (user) {
                // Получаем последний созданный голос
                const { data: voicesData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("id").eq("uid", user.id).order("created_at", {
                    ascending: false
                }).limit(1);
                const params = new URLSearchParams();
                if (createdAvatarId) {
                    params.set("avatarId", createdAvatarId);
                }
                if (voicesData && voicesData.length > 0 && voicesData[0].id) {
                    params.set("voiceId", voicesData[0].id);
                    setCreatedVoiceId(voicesData[0].id);
                }
                router.push(`/material/editor?${params.toString()}`);
            }
        }, 500);
    }, [
        onVoicesChanged,
        router,
        createdAvatarId
    ]);
    const handleStartAvatar = ()=>{
        setIsAvatarModalOpen(true);
    };
    const handleStartVoice = ()=>{
        setIsVoiceModalOpen(true);
    };
    if (hasAvatars && hasVoices) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-2 py-4 sm:px-4 sm:py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl rounded-2xl bg-white shadow-2xl sm:rounded-[32px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative border-b px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "pr-8 text-lg font-bold text-gray-900 sm:pr-0 sm:text-xl md:text-2xl",
                                    children: "Создание первого видео"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-gray-600 sm:mt-2 sm:text-sm",
                                    children: "Для создания видео вам понадобятся аватар и голос"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "absolute right-3 top-3 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 sm:right-6 sm:top-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Закрыть"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        "✕"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 sm:mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 sm:h-10 sm:w-10 ${currentStep === "avatar" || avatarCreated || hasAvatars ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white text-gray-400"}`,
                                                        children: avatarCreated || hasAvatars ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "h-4 w-4 sm:h-6 sm:w-6",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold sm:text-sm",
                                                            children: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-3 flex-1 sm:ml-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-gray-900 sm:text-sm",
                                                                children: "Создание аватара"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "hidden text-xs text-gray-500 sm:block",
                                                                children: "Загрузите фото для аватара"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden h-0.5 flex-1 bg-gray-200 sm:block sm:mx-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden h-0.5 w-full bg-gray-200 sm:hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 sm:h-10 sm:w-10 ${currentStep === "voice" || voiceCreated || hasVoices ? "border-purple-600 bg-purple-600 text-white" : "border-gray-300 bg-white text-gray-400"}`,
                                                        children: voiceCreated || hasVoices ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "h-4 w-4 sm:h-6 sm:w-6",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold sm:text-sm",
                                                            children: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-3 flex-1 sm:ml-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-gray-900 sm:text-sm",
                                                                children: "Создание голоса"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "hidden text-xs text-gray-500 sm:block",
                                                                children: "Загрузите или запишите голос"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden h-0.5 flex-1 bg-gray-200 sm:block sm:mx-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden h-0.5 w-full bg-gray-200 sm:hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 sm:h-10 sm:w-10 ${hasAvatars && hasVoices || avatarCreated && voiceCreated ? "border-green-600 bg-green-600 text-white" : "border-gray-300 bg-white text-gray-400"}`,
                                                        children: hasAvatars && hasVoices || avatarCreated && voiceCreated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "h-4 w-4 sm:h-6 sm:w-6",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold sm:text-sm",
                                                            children: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-3 flex-1 sm:ml-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-gray-900 sm:text-sm",
                                                                children: "Редактор"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "hidden text-xs text-gray-500 sm:block",
                                                                children: "Создание видео"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-gray-200 bg-gray-50 p-4 sm:rounded-2xl sm:p-6 md:p-8",
                                    children: [
                                        currentStep === "avatar" && !hasAvatars && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex justify-center sm:mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 sm:h-20 sm:w-20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-8 w-8 text-blue-600 sm:h-10 sm:w-10",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 1.5,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-2 text-lg font-bold text-gray-900 sm:text-xl",
                                                    children: "Шаг 1: Создайте аватар"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4 text-xs text-gray-600 sm:mb-6 sm:text-sm",
                                                    children: "Для создания видео вам нужен аватар. Загрузите фото и создайте цифрового двойника."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleStartAvatar,
                                                    className: "w-full rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg sm:w-auto sm:px-8 sm:py-3",
                                                    children: "Создать аватар"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        currentStep === "voice" && !hasVoices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex justify-center sm:mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 sm:h-20 sm:w-20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-8 w-8 text-purple-600 sm:h-10 sm:w-10",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 1.5,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-2 text-lg font-bold text-gray-900 sm:text-xl",
                                                    children: "Шаг 2: Создайте голос"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4 text-xs text-gray-600 sm:mb-6 sm:text-sm",
                                                    children: "Теперь создайте голос. Загрузите аудио файл или запишите голос с микрофона."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleStartVoice,
                                                    className: "w-full rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-purple-700 hover:shadow-lg sm:w-auto sm:px-8 sm:py-3",
                                                    children: "Создать голос"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$AvatarUploadModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarUploadModal"], {
                isOpen: isAvatarModalOpen,
                onClose: ()=>setIsAvatarModalOpen(false),
                onAvatarUploaded: handleAvatarCreated
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCreateModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoiceCreateModal"], {
                isOpen: isVoiceModalOpen,
                onClose: ()=>setIsVoiceModalOpen(false),
                onVoiceCreated: handleVoiceCreated
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VideoCreationWizard.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/(main)/components/VideosSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideosSection",
    ()=>VideosSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VideosEmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideoCreationWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VideoCreationWizard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function VideosSection({ hasAvatars, hasVoices, onAvatarsChanged, onVoicesChanged }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isWizardOpen, setIsWizardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCreateVideo = async ()=>{
        // Проверяем наличие аватаров и голосов перед открытием редактора
        try {
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) {
                router.push("/login");
                return;
            }
            const [avatarsResult, voicesResult] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", user.id).limit(1),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", user.id)
            ]);
            const hasAvatarsNow = (avatarsResult.data?.length ?? 0) > 0;
            const validVoices = (voicesResult.data ?? []).filter((voice)=>voice.url && voice.name);
            const hasVoicesNow = validVoices.length > 0;
            if (!hasAvatarsNow || !hasVoicesNow) {
                setIsWizardOpen(true);
            } else {
                router.push("/material/editor");
            }
        } catch (error) {
            console.error("[VideosSection] Ошибка проверки ресурсов:", error);
            // В случае ошибки открываем визард для безопасности
            setIsWizardOpen(true);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasAvatars && hasVoices) {
            setIsWizardOpen(false);
        }
    }, [
        hasAvatars,
        hasVoices
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-8 sm:mb-10 md:mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 sm:mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-gray-900 sm:text-2xl",
                    children: "Мои видео"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/VideosSection.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VideosSection.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideosEmptyState"], {
                onCreateClick: handleCreateVideo
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VideosSection.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            isWizardOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideoCreationWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoCreationWizard"], {
                hasAvatars: hasAvatars,
                hasVoices: hasVoices,
                onAvatarsChanged: onAvatarsChanged,
                onVoicesChanged: onVoicesChanged,
                onClose: ()=>setIsWizardOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VideosSection.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/VideosSection.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/components/Dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/AvatarsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VoicesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VideosSection.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Dashboard() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [hasAvatars, setHasAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasVoices, setHasVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const checkResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const { data: { user }, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (authError || !user) {
                router.push("/login");
                return;
            }
            const [avatarsResult, voicesResult] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", user.id).limit(1),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", user.id).limit(1)
            ]);
            setHasAvatars((avatarsResult.data?.length ?? 0) > 0);
            const validVoices = (voicesResult.data ?? []).filter((voice)=>voice.url && voice.name);
            setHasVoices(validVoices.length > 0);
            setIsChecking(false);
        } catch (error) {
            console.error("[Dashboard] Ошибка проверки ресурсов:", error);
            router.push("/login");
        }
    }, [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkResources();
    }, [
        checkResources
    ]);
    const handleAvatarsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await checkResources();
    }, [
        checkResources
    ]);
    const handleVoicesChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await checkResources();
    }, [
        checkResources
    ]);
    if (isChecking) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-[1350px] px-4 py-6 sm:px-6 sm:py-8 md:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarsSection"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/Dashboard.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoicesSection"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/Dashboard.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideosSection"], {
                hasAvatars: hasAvatars,
                hasVoices: hasVoices,
                onAvatarsChanged: handleAvatarsChanged,
                onVoicesChanged: handleVoicesChanged
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/Dashboard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/Dashboard.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/EmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const defaultTitleText = "Ничего нет…";
const defaultDescriptionText = "Будто в открытом космосе...";
const defaultImageSrc = "/Cosmo.png";
function EmptyState({ title = defaultTitleText, description = defaultDescriptionText, imageSrc = defaultImageSrc, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full max-w-[1350px] min-h-[350px] flex-col items-center gap-6 rounded-3xl px-16 pt-6 pb-10 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 w-48 max-w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: title || defaultTitleText,
                    fill: true,
                    sizes: "(max-width: 768px) 60vw, 224px",
                    className: "object-contain drop-shadow-xl",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EmptyState.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/EmptyState.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/EmptyState.tsx",
                        lineNumber: 36,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EmptyState.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/EmptyState.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(main)/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/Dashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CosmoLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EmptyState.tsx [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isCheckingAuth, setIsCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const checkAuth = async ()=>{
            try {
                const { data: { user }, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!isMounted) return;
                if (error || !user) {
                    router.push("/login");
                    return;
                }
                setIsCheckingAuth(false);
            } catch (error) {
                console.error("[Home] Ошибка проверки авторизации:", error);
                if (isMounted) {
                    router.push("/login");
                }
            } finally{
                if (isMounted) {
                    setIsCheckingAuth(false);
                }
            }
        };
        // Таймаут на случай зависания
        const timeoutId = setTimeout(()=>{
            if (isMounted) {
                console.warn("[Home] Таймаут проверки авторизации");
                setIsCheckingAuth(false);
                router.push("/login");
            }
        }, 5000); // 5 секунд таймаут
        checkAuth();
        return ()=>{
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            isCheckingAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto flex w-full max-w-[1350px] justify-center px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                    title: "",
                    description: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-px flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                            ariaLabel: "Проверка авторизации..."
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/page.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/page.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/page.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dashboard"], {}, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fd309bc3._.js.map