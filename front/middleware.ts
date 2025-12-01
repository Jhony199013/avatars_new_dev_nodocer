import { NextResponse, type NextRequest } from "next/server";

const AUTH_COOKIE_NAME = "app-auth";
const LOGIN_ROUTE = "/login";

function isLoginRoute(pathname: string) {
  return pathname === LOGIN_ROUTE;
}

function isAuthenticated(request: NextRequest) {
  const cookies = request.cookies.getAll();

  // Проверяем наличие Supabase токена (обычно это cookie с именем содержащим "auth-token")
  const supabaseTokenCookie = cookies.find((cookie) =>
    cookie.name.includes("auth-token"),
  );
  const hasSupabaseToken = Boolean(
    supabaseTokenCookie?.value && supabaseTokenCookie.value.trim() !== "",
  );

  // Проверяем наличие кастомной auth cookie
  const customAuthCookie = cookies.find(
    (cookie) => cookie.name === AUTH_COOKIE_NAME,
  );
  const hasCustomAuthCookie = Boolean(
    customAuthCookie?.value && customAuthCookie.value.trim() !== "",
  );

  // Пользователь авторизован только если есть хотя бы один валидный токен
  return hasSupabaseToken || hasCustomAuthCookie;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authenticated = isAuthenticated(request);

  // Если пользователь не авторизован и пытается зайти на любую страницу кроме логина
  if (!authenticated && !isLoginRoute(pathname)) {
    return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));
  }

  // Если пользователь авторизован и пытается зайти на страницу логина
  if (authenticated && isLoginRoute(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

