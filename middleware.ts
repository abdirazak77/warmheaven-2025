import { withClerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withClerkMiddleware((req) => {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // CSP header
  response.headers.set('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clerk.com;
    style-src 'self' 'unsafe-inline' https://*.clerk.com;
    img-src 'self' data: https:;
    connect-src 'self' https://*.clerk.com;
    font-src 'self' https: data:;
    object-src 'none';
    media-src 'self' https: data:;
    frame-src 'self' https://*.clerk.com;
  `);
  
  return response;
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
