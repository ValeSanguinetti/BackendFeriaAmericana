import type { RequestHandler } from 'express';

import { unauthorized } from '../errors/http-error.js';
import { asyncHandler } from '../middleware/async-handler.js';
import { getCurrentUser, loginUser, registerUser } from '../services/auth.service.js';
import { validateLoginInput, validateRegisterInput } from '../validators/auth.validation.js';

export const register: RequestHandler = asyncHandler(async (req, res) => {
  const input = validateRegisterInput(req.body);
  const authResponse = await registerUser(input);

  res.status(201).json(authResponse);
});

export const login: RequestHandler = asyncHandler(async (req, res) => {
  const input = validateLoginInput(req.body);
  const authResponse = await loginUser(input);

  res.status(200).json(authResponse);
});

export const me: RequestHandler = asyncHandler(async (req, res) => {
  if (!req.auth) {
    throw unauthorized('Authorization bearer token is required.');
  }

  const user = await getCurrentUser(req.auth.userId);

  res.status(200).json({ user });
});
