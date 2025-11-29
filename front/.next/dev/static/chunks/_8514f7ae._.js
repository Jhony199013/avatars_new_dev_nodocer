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
                                    if ((href === "/avatars" || href === "/") && !isActive) {
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
"[project]/app/avatars/components/PhotoAvatarGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoAvatarGrid",
    ()=>PhotoAvatarGrid
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
function PhotoAvatarGrid({ avatars, currentUserId, onAvatarDeleted }) {
    _s();
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredCardId, setHoveredCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarToDelete, setAvatarToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarToEdit, setAvatarToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const closeMenuTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Закрываем меню при клике вне его
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoAvatarGrid.useEffect": ()=>{
            const handleClickOutside = {
                "PhotoAvatarGrid.useEffect.handleClickOutside": (event)=>{
                    if (openMenuId) {
                        const menuElement = menuRefs.current[openMenuId];
                        if (menuElement && !menuElement.contains(event.target)) {
                            setOpenMenuId(null);
                        }
                    }
                }
            }["PhotoAvatarGrid.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "PhotoAvatarGrid.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["PhotoAvatarGrid.useEffect"];
        }
    }["PhotoAvatarGrid.useEffect"], [
        openMenuId
    ]);
    // Очищаем таймер при размонтировании
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoAvatarGrid.useEffect": ()=>{
            return ({
                "PhotoAvatarGrid.useEffect": ()=>{
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                    }
                }
            })["PhotoAvatarGrid.useEffect"];
        }
    }["PhotoAvatarGrid.useEffect"], []);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$data$3a$e88a97__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateAvatarName"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        children: [
            avatars.map((avatar)=>{
                const key = avatar.id ?? avatar.hey_gen_id ?? avatar.group_id ?? `${avatar.uid}-${avatar.image_key}`;
                const isHovered = hoveredCardId === key;
                const showMenuButton = isHovered || openMenuId === key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-3 text-center text-xl font-semibold text-gray-900",
                            children: avatar.name
                        }, void 0, false, {
                            fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-[3/4] w-full overflow-hidden rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-3 top-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (e)=>handleMenuClick(key, e),
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
                                                        fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/avatars/components/PhotoAvatarGrid.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                        openMenuId === key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                menuRefs.current[key] = el;
                                            },
                                            className: "absolute right-0 top-10 z-50 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        avatar.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$DeleteAvatarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteAvatarModal"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$EditAvatarModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditAvatarModal"], {
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
_s(PhotoAvatarGrid, "qh6NnqclGcN5zue7ECbbrEygQnY=");
_c = PhotoAvatarGrid;
var _c;
__turbopack_context__.k.register(_c, "PhotoAvatarGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/AvatarsEmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarsEmptyState",
    ()=>AvatarsEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function AvatarsEmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-3xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-12 transition-all hover:border-blue-300 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 transition-transform group-hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-12 w-12 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 1.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 text-xl font-bold text-gray-900",
                        children: "Нет аватаров"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-sm text-sm text-gray-600",
                        children: "Создайте аватар для начала работы с видео"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-400 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 right-10 h-40 w-40 rounded-full bg-indigo-400 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/AvatarsEmptyState.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = AvatarsEmptyState;
var _c;
__turbopack_context__.k.register(_c, "AvatarsEmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/AvatarsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarsSection",
    ()=>AvatarsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prefetchAvatars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CosmoLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$PhotoAvatarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/components/PhotoAvatarGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/AvatarsEmptyState.tsx [app-client] (ecmascript)");
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
function AvatarsSection() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isFetchingAvatars, setIsFetchingAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [photoAvatars, setPhotoAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvatarsSection.useEffect": ()=>{
            let isMounted = true;
            const fetchPhotoAvatars = {
                "AvatarsSection.useEffect.fetchPhotoAvatars": async ()=>{
                    const prefetchedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrefetchedAvatars"])();
                    if (prefetchedData) {
                        setPhotoAvatars(prefetchedData);
                        setIsFetchingAvatars(false);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearPrefetchCache"])();
                        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                        if (!isMounted) return;
                        if (!user) {
                            router.push("/");
                            setCurrentUserId(null);
                            setPhotoAvatars([]);
                            return;
                        }
                        setCurrentUserId(user.id);
                        return;
                    }
                    setIsFetchingAvatars(true);
                    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    if (!isMounted) return;
                    if (!user) {
                        router.push("/");
                        setCurrentUserId(null);
                        setPhotoAvatars([]);
                        setIsFetchingAvatars(false);
                        return;
                    }
                    setCurrentUserId(user.id);
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", user.id).order("created_at", {
                        ascending: false
                    });
                    if (!isMounted) return;
                    if (error) {
                        console.error("[avatars] Ошибка загрузки аватаров:", error);
                    } else {
                        setPhotoAvatars(data ?? []);
                    }
                    setIsFetchingAvatars(false);
                }
            }["AvatarsSection.useEffect.fetchPhotoAvatars"];
            fetchPhotoAvatars();
            return ({
                "AvatarsSection.useEffect": ()=>{
                    isMounted = false;
                }
            })["AvatarsSection.useEffect"];
        }
    }["AvatarsSection.useEffect"], [
        router
    ]);
    const refetchPhotoAvatars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarsSection.useCallback[refetchPhotoAvatars]": async ()=>{
            if (!currentUserId) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prefetchAvatars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearPrefetchCache"])();
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("photo_avatars").select("*").eq("uid", currentUserId).order("created_at", {
                ascending: false
            });
            if (error) {
                console.error("[avatars] Ошибка загрузки аватаров:", error);
            } else {
                setPhotoAvatars(data ?? []);
            }
        }
    }["AvatarsSection.useCallback[refetchPhotoAvatars]"], [
        currentUserId
    ]);
    const hasPhotoAvatars = photoAvatars.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900",
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
            isFetchingAvatars ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[300px] items-center justify-center rounded-3xl border border-gray-100 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                    ariaLabel: "Загружаем фото-аватары..."
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this) : !hasPhotoAvatars ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarsEmptyState"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$components$2f$PhotoAvatarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoAvatarGrid"], {
                avatars: photoAvatars,
                currentUserId: currentUserId,
                onAvatarDeleted: refetchPhotoAvatars
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/AvatarsSection.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(AvatarsSection, "4RYJ/pO7PBaQ0RfI6I51EBU16Bk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AvatarsSection;
var _c;
__turbopack_context__.k.register(_c, "AvatarsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/voices/components/VoiceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceCard",
    ()=>VoiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function VoiceCard({ name, url, description, menuSlot, onMouseEnter, onMouseLeave }) {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceCard.useEffect": ()=>{
            return ({
                "VoiceCard.useEffect": ()=>{
                    if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                    }
                }
            })["VoiceCard.useEffect"];
        }
    }["VoiceCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: [
            menuSlot,
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
                                fileName: "[project]/app/voices/components/VoiceCard.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/voices/components/VoiceCard.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "h-6 w-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(VoiceCard, "kgkST1S2DKv5NXgsyN6Nz0K7EnA=");
_c = VoiceCard;
var _c;
__turbopack_context__.k.register(_c, "VoiceCard");
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
"[project]/app/voices/components/VoiceGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceGrid",
    ()=>VoiceGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceDeleteModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceDeleteModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceEditModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceEditModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$bbae30__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/voices/servers/data:bbae30 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$f4bb9c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/voices/servers/data:f4bb9c [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function VoiceGrid({ voices, currentUserId, onVoicesChanged }) {
    _s();
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredCardId, setHoveredCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [voiceToDelete, setVoiceToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [voiceToEdit, setVoiceToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const closeMenuTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceGrid.useEffect": ()=>{
            const handleClickOutside = {
                "VoiceGrid.useEffect.handleClickOutside": (event)=>{
                    if (openMenuId) {
                        const menuElement = menuRefs.current[openMenuId];
                        if (menuElement && !menuElement.contains(event.target)) {
                            setOpenMenuId(null);
                        }
                    }
                }
            }["VoiceGrid.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "VoiceGrid.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["VoiceGrid.useEffect"];
        }
    }["VoiceGrid.useEffect"], [
        openMenuId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceGrid.useEffect": ()=>{
            return ({
                "VoiceGrid.useEffect": ()=>{
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                    }
                }
            })["VoiceGrid.useEffect"];
        }
    }["VoiceGrid.useEffect"], []);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$bbae30__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["DeleteVoice"])({
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$data$3a$f4bb9c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["UpdateVoice"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        children: [
            validVoices.map((voice)=>{
                const key = voice.id ?? `${voice.uid}-${voice.name}`;
                const isHovered = hoveredCardId === key;
                const showMenuButton = isHovered || openMenuId === key;
                const isProcessing = !!voice.id && (voice.id === deletingId || voice.id === editingId);
                const menuSlot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-3 top-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (event)=>handleMenuClick(key, event),
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
                                        fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/voices/components/VoiceGrid.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                        openMenuId === key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                menuRefs.current[key] = el;
                            },
                            className: "absolute right-0 top-10 z-50 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceCard"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceDeleteModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceDeleteModal"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceEditModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceEditModal"], {
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
_s(VoiceGrid, "Alm90lETZA5sp0w8dmM3Iyw7IBU=");
_c = VoiceGrid;
var _c;
__turbopack_context__.k.register(_c, "VoiceGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/VoicesEmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoicesEmptyState",
    ()=>VoicesEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function VoicesEmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-3xl border-2 border-dashed border-purple-200 bg-gradient-to-br from-purple-50/50 to-pink-50/50 p-12 transition-all hover:border-purple-300 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-100 transition-transform group-hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-12 w-12 text-purple-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 1.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 text-xl font-bold text-gray-900",
                        children: "Нет голосов"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-sm text-sm text-gray-600",
                        children: "Создайте голос для использования в видео"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-10 top-10 h-32 w-32 rounded-full bg-purple-400 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 right-10 h-40 w-40 rounded-full bg-pink-400 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/VoicesEmptyState.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = VoicesEmptyState;
var _c;
__turbopack_context__.k.register(_c, "VoicesEmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/VoicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoicesSection",
    ()=>VoicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CosmoLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/components/VoiceGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VoicesEmptyState.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function VoicesSection() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isFetchingVoices, setIsFetchingVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchVoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoicesSection.useCallback[fetchVoices]": async ()=>{
            setIsFetchingVoices(true);
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) {
                router.push("/");
                setCurrentUserId(null);
                setVoices([]);
                setIsFetchingVoices(false);
                return;
            }
            setCurrentUserId(user.id);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("voices").select("*").eq("uid", user.id).order("created_at", {
                ascending: false
            });
            if (error) {
                console.error("[voices] Ошибка загрузки голосов:", error);
                setVoices([]);
            } else {
                console.log("[voices] Загружено голосов:", data?.length ?? 0, data);
                const validVoices = (data ?? []).filter({
                    "VoicesSection.useCallback[fetchVoices].validVoices": (voice)=>voice.url && voice.name
                }["VoicesSection.useCallback[fetchVoices].validVoices"]);
                console.log("[voices] Валидных голосов:", validVoices.length);
                setVoices(validVoices);
            }
            setIsFetchingVoices(false);
        }
    }["VoicesSection.useCallback[fetchVoices]"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoicesSection.useEffect": ()=>{
            fetchVoices();
        }
    }["VoicesSection.useEffect"], [
        fetchVoices
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900",
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
            isFetchingVoices ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[300px] items-center justify-center rounded-3xl border border-gray-100 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                    ariaLabel: "Загружаем голоса..."
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this) : voices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoicesEmptyState"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$components$2f$VoiceGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceGrid"], {
                voices: voices,
                currentUserId: currentUserId,
                onVoicesChanged: fetchVoices
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VoicesSection.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/VoicesSection.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(VoicesSection, "l97PoQwq097SmzD89WMD/F9nR7I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VoicesSection;
var _c;
__turbopack_context__.k.register(_c, "VoicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/VideosEmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideosEmptyState",
    ()=>VideosEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function VideosEmptyState() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-3xl border-2 border-dashed border-green-200 bg-gradient-to-br from-green-50/50 to-emerald-50/50 p-12 transition-all hover:border-green-300 hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 transition-transform group-hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-12 w-12 text-green-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 1.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 text-xl font-bold text-gray-900",
                        children: "Создайте свое первое видео"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 max-w-sm text-sm text-gray-600",
                        children: "Используйте аватары и голоса для создания профессиональных видео с помощью нашего редактора"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>router.push("/material/editor"),
                        className: "rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg active:scale-95",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-10 top-10 h-32 w-32 rounded-full bg-green-400 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/components/VideosEmptyState.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 right-10 h-40 w-40 rounded-full bg-emerald-400 blur-3xl"
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
_s(VideosEmptyState, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VideosEmptyState;
var _c;
__turbopack_context__.k.register(_c, "VideosEmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/VideosSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideosSection",
    ()=>VideosSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VideosEmptyState.tsx [app-client] (ecmascript)");
"use client";
;
;
function VideosSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Мои видео"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/VideosSection.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(main)/components/VideosSection.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideosEmptyState"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/VideosSection.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/VideosSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = VideosSection;
var _c;
__turbopack_context__.k.register(_c, "VideosSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/AvatarsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VoicesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/VideosSection.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-[1350px] px-6 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$AvatarsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarsSection"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/Dashboard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VoicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoicesSection"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/Dashboard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$VideosSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideosSection"], {}, void 0, false, {
                fileName: "[project]/app/(main)/components/Dashboard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/components/Dashboard.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CosmoLoader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const dynamic = 'force-dynamic';
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isCheckingAuth, setIsCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const checkAuth = {
                "Home.useEffect.checkAuth": async ()=>{
                    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    if (!user) {
                        router.push("/login");
                    } else {
                        setIsCheckingAuth(false);
                    }
                }
            }["Home.useEffect.checkAuth"];
            checkAuth();
        }
    }["Home.useEffect"], [
        router
    ]);
    if (isCheckingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CosmoLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CosmoLoader"], {
                ariaLabel: "Проверка авторизации..."
            }, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(main)/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard"], {}, void 0, false, {
                fileName: "[project]/app/(main)/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Home, "WDN7ETMIgxO/N3fQkdxbJy31U28=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8514f7ae._.js.map