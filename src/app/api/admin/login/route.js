import { NextResponse } from "next/server";
import { getAdminSessionToken } from "@/lib/adminAuth";

export async function POST(request) {
  const { username, password } = await request.json();
  const expectedUsername = process.env.ADMIN_USERNAME || process.env.BASIC_AUTH_USER;
  const expectedPassword = process.env.ADMIN_PASSWORD || process.env.BASIC_AUTH_PASS;
  const expectedToken = getAdminSessionToken();

  if (!expectedUsername || !expectedPassword || !expectedToken) {
    return NextResponse.json({ error: "管理者アカウントが設定されていません。" }, { status: 500 });
  }

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
