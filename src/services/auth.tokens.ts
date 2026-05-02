import { jwtVerify, SignJWT } from 'jose';

import appConfig from '../config/app.config.js';
import { unauthorized } from '../errors/http-error.js';

const textEncoder = new TextEncoder();

const getJwtSecret = (): Uint8Array => textEncoder.encode(appConfig.jwt.secret);

export const signAuthToken = async (userId: number): Promise<string> =>
  new SignJWT()
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(String(userId))
    .setIssuedAt()
    .setExpirationTime(appConfig.jwt.expire)
    .sign(getJwtSecret());

export const verifyAuthToken = async (token: string): Promise<number> => {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    const userId = Number(payload.sub);

    if (!Number.isInteger(userId) || userId <= 0) {
      throw unauthorized('Invalid or expired token.');
    }

    return userId;
  } catch {
    throw unauthorized('Invalid or expired token.');
  }
};
