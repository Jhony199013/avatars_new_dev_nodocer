module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/app/avatars/servers/UploadAvatar.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40cd6299375834d156b90e590d5d7df8fc8ed2c79b":"UploadAvatar"},"",""] */ __turbopack_context__.s([
    "UploadAvatar",
    ()=>UploadAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://base.lect-gen.ru");
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const heygenApiKey = process.env.HEYGEN_API_KEY;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if (!supabaseServiceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY не задан");
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceRoleKey);
async function uploadPhotoToHeygen(file) {
    if (!heygenApiKey) {
        throw new Error("HEYGEN_API_KEY не задан");
    }
    const buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(await file.arrayBuffer());
    const response = await fetch("https://upload.heygen.com/v1/asset", {
        method: "POST",
        headers: {
            "X-Api-Key": heygenApiKey,
            "Content-Type": file.type || "application/octet-stream"
        },
        body: buffer
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Ошибка загрузки фото: ${errorText || response.statusText}`);
    }
    const json = await response.json();
    const payload = Array.isArray(json) ? json[0] : json;
    const data = payload?.data;
    if (!data?.image_key || !data?.url) {
        throw new Error("Некорректный ответ Heygen при загрузке фото");
    }
    return {
        imageKey: data.image_key,
        photoUrl: data.url
    };
}
async function createPhotoAvatarInHeygen(name, imageKey) {
    if (!heygenApiKey) {
        throw new Error("HEYGEN_API_KEY не задан");
    }
    const response = await fetch("https://api.heygen.com/v2/photo_avatar/avatar_group/create", {
        method: "POST",
        headers: {
            "X-Api-Key": heygenApiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            image_key: imageKey
        })
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Ошибка создания фото-аватара: ${errorText || response.statusText}`);
    }
    const json = await response.json();
    const payload = Array.isArray(json) ? json[0] : json;
    return {
        error: payload?.error ?? null,
        data: payload?.data ?? null
    };
}
async function UploadAvatar(formData) {
    try {
        const uid = formData.get("uid");
        const name = formData.get("avatar_name");
        const file = formData.get("photo");
        if (typeof uid !== "string" || !uid) {
            return {
                success: false,
                error: "Не удалось определить пользователя"
            };
        }
        if (typeof name !== "string" || !name.trim()) {
            return {
                success: false,
                error: "Введите имя аватара"
            };
        }
        if (!(file instanceof File)) {
            return {
                success: false,
                error: "Файл не найден"
            };
        }
        const trimmedName = name.trim();
        const { imageKey, photoUrl } = await uploadPhotoToHeygen(file);
        const createResult = await createPhotoAvatarInHeygen(trimmedName, imageKey);
        const status = createResult.error ? "error" : "done";
        const record = {
            uid,
            name: trimmedName,
            photo: photoUrl,
            image_key: imageKey,
            hey_gen_id: createResult.data?.id ?? null,
            group_id: createResult.data?.group_id ?? createResult.data?.id ?? createResult.data?.group ?? null,
            status
        };
        const { data, error } = await supabaseAdmin.from("photo_avatars").insert(record).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return {
            success: true,
            avatar: data
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Неизвестная ошибка сервера";
        console.error("[UploadAvatar]", message);
        return {
            success: false,
            error: message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    UploadAvatar
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(UploadAvatar, "40cd6299375834d156b90e590d5d7df8fc8ed2c79b", null);
}),
"[project]/app/avatars/servers/DeletePhotoAvatar.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404ef6fa38aced2d34bba744ff0fb1ae23c6121202":"DeletePhotoAvatar"},"",""] */ __turbopack_context__.s([
    "DeletePhotoAvatar",
    ()=>DeletePhotoAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://base.lect-gen.ru");
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const heygenApiKey = process.env.HEYGEN_API_KEY;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if (!supabaseServiceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY не задан");
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceRoleKey);
async function deleteFromHeygen(groupId) {
    if (!groupId) {
        return;
    }
    if (!heygenApiKey) {
        throw new Error("HEYGEN_API_KEY не задан");
    }
    const response = await fetch(`https://api.heygen.com/v2/photo_avatar_group/${groupId}`, {
        method: "DELETE",
        headers: {
            "X-Api-Key": heygenApiKey
        }
    });
    if (!response.ok && response.status !== 404) {
        const message = await response.text();
        throw new Error(`Не удалось удалить аватар в HeyGen: ${message || response.statusText}`);
    }
}
async function DeletePhotoAvatar({ uid, recordId, groupId, imageKey }) {
    try {
        if (!uid) {
            return {
                success: false,
                error: "Пользователь не найден"
            };
        }
        if (!recordId && !groupId && !imageKey) {
            return {
                success: false,
                error: "Нет идентификатора записи"
            };
        }
        await deleteFromHeygen(groupId);
        let query = supabaseAdmin.from("photo_avatars").delete().eq("uid", uid);
        if (recordId) {
            query = query.eq("id", recordId);
        } else if (groupId) {
            query = query.eq("group_id", groupId);
        } else if (imageKey) {
            query = query.eq("image_key", imageKey);
        }
        const { error } = await query;
        if (error) {
            throw new Error(error.message);
        }
        return {
            success: true
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Неизвестная ошибка";
        console.error("[DeletePhotoAvatar]", message);
        return {
            success: false,
            error: message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    DeletePhotoAvatar
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(DeletePhotoAvatar, "404ef6fa38aced2d34bba744ff0fb1ae23c6121202", null);
}),
"[project]/app/avatars/servers/UpdateAvatarName.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406d5b6e083f7879367c2bfcb42f10d02bcd7af836":"UpdateAvatarName"},"",""] */ __turbopack_context__.s([
    "UpdateAvatarName",
    ()=>UpdateAvatarName
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
async function UpdateAvatarName({ uid, recordId, newName }) {
    try {
        if (!uid) {
            return {
                success: false,
                error: "Пользователь не найден"
            };
        }
        if (!recordId) {
            return {
                success: false,
                error: "ID записи не указан"
            };
        }
        if (!newName || !newName.trim()) {
            return {
                success: false,
                error: "Имя не может быть пустым"
            };
        }
        const trimmedName = newName.trim();
        const { error } = await supabaseAdmin.from("photo_avatars").update({
            name: trimmedName
        }).eq("id", recordId).eq("uid", uid);
        if (error) {
            throw new Error(error.message);
        }
        return {
            success: true
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : "Неизвестная ошибка";
        console.error("[UpdateAvatarName]", message);
        return {
            success: false,
            error: message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    UpdateAvatarName
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(UpdateAvatarName, "406d5b6e083f7879367c2bfcb42f10d02bcd7af836", null);
}),
"[project]/.next-internal/server/app/avatars/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/avatars/servers/UploadAvatar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/avatars/servers/DeletePhotoAvatar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/avatars/servers/UpdateAvatarName.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$UploadAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/servers/UploadAvatar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$DeletePhotoAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/servers/DeletePhotoAvatar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$UpdateAvatarName$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/servers/UpdateAvatarName.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/avatars/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/avatars/servers/UploadAvatar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/avatars/servers/DeletePhotoAvatar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/avatars/servers/UpdateAvatarName.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "404ef6fa38aced2d34bba744ff0fb1ae23c6121202",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$DeletePhotoAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DeletePhotoAvatar"],
    "406d5b6e083f7879367c2bfcb42f10d02bcd7af836",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$UpdateAvatarName$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UpdateAvatarName"],
    "40cd6299375834d156b90e590d5d7df8fc8ed2c79b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$UploadAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UploadAvatar"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$avatars$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$avatars$2f$servers$2f$UploadAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$avatars$2f$servers$2f$DeletePhotoAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$avatars$2f$servers$2f$UpdateAvatarName$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/avatars/page/actions.js { ACTIONS_MODULE0 => "[project]/app/avatars/servers/UploadAvatar.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/avatars/servers/DeletePhotoAvatar.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/avatars/servers/UpdateAvatarName.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$UploadAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/servers/UploadAvatar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$DeletePhotoAvatar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/servers/DeletePhotoAvatar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$avatars$2f$servers$2f$UpdateAvatarName$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/avatars/servers/UpdateAvatarName.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d046f2ff._.js.map