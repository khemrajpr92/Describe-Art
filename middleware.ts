import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/signIn" ||
    path === "/signUp" ||
    path === "/forgot-password" ||
    path === "/contact";

  const isGeneratePath = path === "/generate";
  const token = request.cookies.get("token")?.value || "";

  if (isGeneratePath && !token) {
    return NextResponse.redirect(new URL("/signIn", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/signIn", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/signIn",
    "/signUp",
    "/forgot-password",
    "/generate",
    "/contact", // Corrected the path here
  ],
};
