module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/tts-audio/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const FALLBACK_AUDIO_BASE = "https://s3.twcstorage.ru/da2ac12a-41cc63a3-3ad9-4eee-a33a-7776f7973de7/temp/TTS";
const AUDIO_BASE_URL = process.env.TTS_AUDIO_BASE_URL ?? FALLBACK_AUDIO_BASE;
const runtime = "nodejs";
const dynamic = "force-dynamic";
const hopByHopHeaders = new Set([
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailers",
    "transfer-encoding",
    "upgrade"
]);
const buildUpstreamUrl = ({ userUuid, slideNumber, voiceId, cacheBuster })=>{
    const normalizedBase = AUDIO_BASE_URL.replace(/\/+$/, "");
    const userSegment = encodeURIComponent(userUuid);
    const slideSegment = encodeURIComponent(slideNumber);
    const voiceSegment = encodeURIComponent(voiceId);
    const base = `${normalizedBase}/${userSegment}/${slideSegment}_${voiceSegment}`;
    if (!cacheBuster) {
        return base;
    }
    return `${base}?t=${encodeURIComponent(cacheBuster)}`;
};
async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const userUuid = searchParams.get("user");
    const slideNumber = searchParams.get("slide");
    const voiceId = searchParams.get("voice");
    const cacheBuster = searchParams.get("bust");
    if (!userUuid || !slideNumber || !voiceId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Требуются параметры user, slide и voice"
        }, {
            status: 400
        });
    }
    const upstreamUrl = buildUpstreamUrl({
        userUuid,
        slideNumber,
        voiceId,
        cacheBuster
    });
    let upstreamResponse;
    try {
        upstreamResponse = await fetch(upstreamUrl, {
            cache: "no-store"
        });
    } catch (error) {
        console.error("Не удалось запросить аудио у S3:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Не удалось загрузить аудио"
        }, {
            status: 502
        });
    }
    if (!upstreamResponse.ok || !upstreamResponse.body) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Сервис аудио вернул ошибку"
        }, {
            status: upstreamResponse.status || 502
        });
    }
    const headers = new Headers(upstreamResponse.headers);
    // Удаляем hop-by-hop заголовки и принудительно отключаем кэширование
    hopByHopHeaders.forEach((header)=>headers.delete(header));
    headers.set("Cache-Control", "no-store");
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](upstreamResponse.body, {
        status: upstreamResponse.status,
        headers
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c2b77697._.js.map