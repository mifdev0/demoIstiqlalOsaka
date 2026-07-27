import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const envUsername = process.env.ADMIN_USERNAME || 'admin';
    const envPassword = process.env.ADMIN_PASSWORD || 'istiqlalosaka2026';

    if (username === envUsername && password === envPassword) {
      // Create response and set session cookie
      const response = NextResponse.json({ success: true, message: 'Authenticated successfully' });
      response.cookies.set('admin_session', 'authenticated_mio_admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Username atau Password salah!' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.delete('admin_session');
  return response;
}
