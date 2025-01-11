import { NextResponse } from 'next/server';
export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/signin', '/users/:path*'],
};

export const middleware = (req: any) => {
    const session = req.nextauth?.session;

    if (session) {
        return NextResponse.redirect(new URL('/users/dashboard', req.url));
    }

    return NextResponse.next();
};