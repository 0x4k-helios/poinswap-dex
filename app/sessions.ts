import { createCookieSessionStorage } from 'remix';

import { getEnvServer } from '~/utils';

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: '__session',

      // all of these are optional
      // domain: "poinswap.com",
      expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      maxAge: 60,
      path: '/',
      sameSite: 'lax',
      secrets: [getEnvServer('SESSION_SECRET')],
      secure: true,
    },
  });
