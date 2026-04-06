import { NextResponse } from "next/server";

// Redirect locale-prefixed paths (e.g. /en/...) to existing non-locale routes.
// This avoids 404 for requests like GET /en when i18n routing is not configured.
const LOCALE_PREFIXES = ["/en", "/en/"];

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // Ignore Next internals and static assets.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasEnPrefix = LOCALE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix)
  );

  if (!hasEnPrefix) return NextResponse.next();

  // /en -> /
  // /en/battery -> /battery
  const normalizedPath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const target = new URL(`${normalizedPath}${search}`, request.url);
  return NextResponse.redirect(target, 307);
}

export const config = {
  matcher: ["/:path*"]
};
