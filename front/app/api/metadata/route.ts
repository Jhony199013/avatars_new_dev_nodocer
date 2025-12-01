import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL не задан");
}

if (!supabaseServiceRoleKey) {
  throw new Error("SUPABASE_SERVICE_ROLE_KEY не задан");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const uid = typeof body.uid === "string" ? body.uid.trim() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const surname = typeof body.surname === "string" ? body.surname.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";

    if (!uid || !name || !surname || !company || !phone) {
      return NextResponse.json(
        { success: false, error: "Все поля метаданных обязательны" },
        { status: 400 },
      );
    }

    const { error } = await supabaseAdmin
      .from("metadata")
      .insert({
        uid,
        name,
        surname,
        company,
        phone,
      });

    if (error) {
      console.error("[POST /api/metadata] Ошибка при сохранении:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Ошибка при сохранении данных" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Неизвестная ошибка сервера";
    console.error("[POST /api/metadata] Критическая ошибка:", message, error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}


