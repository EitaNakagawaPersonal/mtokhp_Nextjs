import { NextResponse } from "next/server";

const adminCookieName = "admin_session";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const sessionCookie = request.cookies.get(adminCookieName);
    const expectedToken = process.env.ADMIN_SESSION_TOKEN || "matsuoka-admin";

    if (!sessionCookie || sessionCookie.value !== expectedToken) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
