import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/signin', '/users/:path*'], // Menggunakan matcher untuk halaman signin
};

export const middleware = (req) => {
    // Mengambil sesi dari NextAuth
    const session = req.nextauth?.session;

    if (session) {
        // Jika sudah login, alihkan ke halaman dashboard
        return NextResponse.redirect(new URL('/users/dashboard', req.url));
    }

    return NextResponse.next(); // Lanjutkan jika belum login
};