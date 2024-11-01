import { NextResponse } from 'next/server';
import { getUser } from './lib/token';

const privateRoutes = [
  '/dashboard/users',
  '/dashboard/transactions',
  '/dashboard/profiles',
];
const publicRoutes = ['/login', '/register', '/'];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const isPrivateRoute = privateRoutes.includes(path);
  const user = await getUser();

  if (isPublicRoute && user)
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));

  if (isPrivateRoute && !user) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
