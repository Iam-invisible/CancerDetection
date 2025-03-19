import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Exclude the chat-stream API route from authentication checks
  if (req.nextUrl.pathname.startsWith("/api/chat-stream")) {
    return NextResponse.next();
  }

  // Add your authentication logic here
  // ...

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};