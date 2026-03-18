import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {

   const token = request.cookies.get("token")?.value
    const pathname = request.nextUrl.pathname
console.log(pathname, "Path")
   const red = new URL('/login', request.url)
   
  
    if (!token ) {
    return NextResponse.redirect(red)
    }

  return NextResponse.next()
}

export const config={
  matcher:['/Dashboard/:path*']

}