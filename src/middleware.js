import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export function middleware() {
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
  return response;
}

// export const config = {
//   matcher: ['/api'],
// };
