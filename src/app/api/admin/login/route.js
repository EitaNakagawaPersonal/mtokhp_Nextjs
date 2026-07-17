import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
  const expectedUsername = process.env.ADMIN_USERNAME || process.env.BASIC_AUTH_USER || "admin";
  const expectedPassword = process.env.ADMIN_PASSWORD || process.env.BASIC_AUTH_PASS || "matsuoka-admin";
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || process.env.BASIC_AUTH_TOKEN || "matsuoka-admin";

  if (username === expectedUsername && password === expectedPassword) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set("admin_session", expectedToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    return response;
  }

  return NextResponse.json({ error: "ユーザー名またはパスワードが違います。" }, { status: 401 });
}
