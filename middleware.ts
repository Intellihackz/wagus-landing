import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname
  
  // Check if request is for admin route
  if (path.startsWith('/admin')) {
    // Get the user agent
    const userAgent = request.headers.get('user-agent') || ''
    
    // Simple mobile detection using user agent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    
    if (isMobile) {
      // Redirect mobile users trying to access admin to the home page
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  
  return NextResponse.next()
}

// Configure middleware to run only on admin routes
export const config = {
  matcher: '/admin/:path*'
}
