module.exports = [
"[project]/app/voices/servers/DeleteVoice.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40283b640ad833f930e378e3009dbbd29e474a640a":"DeleteVoice"},"",""] */ __turbopack_context__.s([
    "DeleteVoice",
    ()=>DeleteVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://base.lect-gen.ru");
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if (!supabaseServiceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY не задан");
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceRoleKey);
async function DeleteVoice({ uid, voiceId }) {
    try {
        if (!uid) {
            return {
                success: false,
                error: "Пользователь не найден"
            };
        }
        if (!voiceId) {
            return {
                success: false,
                error: "ID голоса не указан"
            };
        }
        // Сначала получаем запись из таблицы, чтобы извлечь voice_id и название голоса
        const { data: voiceRecord, error: fetchError } = await supabaseAdmin.from("voices").select("voice_id, name").eq("id", voiceId).eq("uid", uid).single();
        if (fetchError) {
            throw new Error(`Не удалось найти голос: ${fetchError.message}`);
        }
        if (!voiceRecord || !voiceRecord.voice_id) {
            throw new Error("Не найдено значение voice_id для этого голоса");
        }
        // Отправляем вебхук с voice_id, названием голоса и UUID пользователя
        const webhookResponse = await fetch("https://rueleven.ru/webhook/932aee6f-b554-45e9-b232-f7829b0a1d06", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                voice_id: voiceRecord.voice_id,
                voice_name: voiceRecord.name || null,
                uuid: uid
            })
        });
        if (!webhookResponse.ok) {
            const message = await webhookResponse.text();
            throw new Error(`Не удалось отправить вебхук: ${message || webhookResponse.statusText}`);
        }
        // Удаляем запись из таблицы
        const { error } = await supabaseAdmin.from("voices").delete().eq("id", voiceId).eq("uid", uid);
        if (error) {
            throw new Error(error.message);
        }
        return {
            success: true
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Неизвестная ошибка";
        return {
            success: false,
            error: message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    DeleteVoice
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(DeleteVoice, "40283b640ad833f930e378e3009dbbd29e474a640a", null);
}),
"[project]/app/voices/servers/UpdateVoice.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40db8994e698b2000fa8f50a7e0d97e8cf222ef9c0":"UpdateVoice"},"",""] */ __turbopack_context__.s([
    "UpdateVoice",
    ()=>UpdateVoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://base.lect-gen.ru");
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if (!supabaseServiceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY не задан");
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceRoleKey);
async function UpdateVoice({ uid, voiceId, name, description }) {
    try {
        if (!uid) {
            return {
                success: false,
                error: "Пользователь не найден"
            };
        }
        if (!voiceId) {
            return {
                success: false,
                error: "ID голоса не указан"
            };
        }
        if (!name || !name.trim()) {
            return {
                success: false,
                error: "Имя не может быть пустым"
            };
        }
        const trimmedName = name.trim();
        const trimmedDescription = description?.trim();
        const { error } = await supabaseAdmin.from("voices").update({
            name: trimmedName,
            description: trimmedDescription || null
        }).eq("id", voiceId).eq("uid", uid);
        if (error) {
            throw new Error(error.message);
        }
        return {
            success: true
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Неизвестная ошибка";
        return {
            success: false,
            error: message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    UpdateVoice
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(UpdateVoice, "40db8994e698b2000fa8f50a7e0d97e8cf222ef9c0", null);
}),
"[project]/.next-internal/server/app/voices/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/voices/servers/DeleteVoice.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/voices/servers/UpdateVoice.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$DeleteVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/servers/DeleteVoice.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$UpdateVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/servers/UpdateVoice.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/voices/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/voices/servers/DeleteVoice.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/voices/servers/UpdateVoice.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40283b640ad833f930e378e3009dbbd29e474a640a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$DeleteVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DeleteVoice"],
    "40db8994e698b2000fa8f50a7e0d97e8cf222ef9c0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$UpdateVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UpdateVoice"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$voices$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$voices$2f$servers$2f$DeleteVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$voices$2f$servers$2f$UpdateVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/voices/page/actions.js { ACTIONS_MODULE0 => "[project]/app/voices/servers/DeleteVoice.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/voices/servers/UpdateVoice.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$DeleteVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/servers/DeleteVoice.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$voices$2f$servers$2f$UpdateVoice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/voices/servers/UpdateVoice.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_4b9e6343._.js.map