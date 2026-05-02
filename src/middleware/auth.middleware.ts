import type { RequestHandler } from 'express';

import { unauthorized } from '../errors/http-error.js';
import { verifyAuthToken } from '../services/auth.tokens.js';

const bearerPrefix = 'Bearer ';

export const requireAuth: RequestHandler = (req, _res, next) => {
  const authorization = req.header('authorization');

  if (!authorization?.startsWith(bearerPrefix)) {
    next(unauthorized('Authorization bearer token is required.'));
    return;
  }

  const token = authorization.slice(bearerPrefix.length).trim();

  if (!token) {
    next(unauthorized('Authorization bearer token is required.'));
    return;
  }

  void verifyAuthToken(token)
    .then((userId) => {
      req.auth = { userId };
      next();
    })
    .catch(next);
};
