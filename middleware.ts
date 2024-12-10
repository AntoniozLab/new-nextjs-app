import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ['/home', '/departments', '/categories']
export default function ProtectedMiddleware (request: NextRequest) {
  console.log("protected route");

  const { nextUrl } = request;

  /* if (protectedPaths.some((path) => nextUrl.pathname.startsWith(path))) {
    const token = nextUrl.searchParams.get('token');
    if (!token ){
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl)
    }
  } */
  return NextResponse.next();
}
