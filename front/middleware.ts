import { NextResponse, type NextRequest } from "next/server";

const AUTH_COOKIE_NAME = "app-auth";
const LOGIN_ROUTE = "/login";

function isLoginRoute(pathname: string) {
  return pathname === LOGIN_ROUTE;
}

function isApiRoute(pathname: string) {
  return pathname.startsWith("/api/");
}

function isAuthenticated(request: NextRequest) {
  // Проверяем только нашу кастомную auth cookie
  // Это единственный надежный индикатор авторизации, который мы контролируем
  const customAuthCookie = request.cookies.get(AUTH_COOKIE_NAME);
  
  return Boolean(
    customAuthCookie?.value && customAuthCookie.value.trim() !== "",
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authenticated = isAuthenticated(request);

  // Пропускаем все API роуты без проверки авторизации
  if (isApiRoute(pathname)) {
    return NextResponse.next();
  }

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

