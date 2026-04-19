import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// Vercel Edge: `@/` in middleware can fail — use relative import.
import { defaultLocale, isLocale } from "./lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0];
  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
