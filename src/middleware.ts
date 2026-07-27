import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminSession = request.cookies.get('admin_session')?.value;
  const isDashboardPage = request.nextUrl.pathname.startsWith('/admin/dashboard');

  // If user tries to access /admin/dashboard without auth cookie, redirect to /admin/login
  if (isDashboardPage && adminSession !== 'authenticated_mio_admin') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Redirect /admin base route to /admin/login or /admin/dashboard
  if (request.nextUrl.pathname === '/admin') {
    if (adminSession === 'authenticated_mio_admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
