const SESSION_COOKIE_NAME = "admin_session";

// No fallback default: an unset token means auth must fail closed, not open.
export function getAdminSessionToken() {
  return process.env.ADMIN_SESSION_TOKEN || process.env.BASIC_AUTH_TOKEN || null;
}

export function isAuthorized(request) {
  const expectedToken = getAdminSessionToken();
  if (!expectedToken) return false;

  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME);
  return Boolean(sessionCookie && sessionCookie.value === expectedToken);
}

export { SESSION_COOKIE_NAME };
