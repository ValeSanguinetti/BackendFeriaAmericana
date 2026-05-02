import bcrypt from 'bcryptjs';

import appConfig from '../config/app.config.js';
import { conflict, forbidden, unauthorized } from '../errors/http-error.js';
import type { AuthResponse, AuthUser, LoginInput, PublicUser, RegisterInput } from '../models/auth.model.js';
import { authRepository, isUniqueConstraintError } from '../repositories/auth.repository.js';
import { signAuthToken } from './auth.tokens.js';

const passwordSaltRounds = 12;
const invalidCredentialsMessage = 'Invalid email or password.';

export const toPublicUser = (user: AuthUser): PublicUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  status: user.status,
  registeredAt: user.registeredAt.toISOString()
});

const createAuthResponse = async (user: AuthUser): Promise<AuthResponse> => ({
  token: await signAuthToken(user.id),
  expiresIn: appConfig.jwt.expire,
  user: toPublicUser(user)
});

export const registerUser = async (input: RegisterInput): Promise<AuthResponse> => {
  const existingUser = await authRepository.findUserByEmail(input.email);

  if (existingUser) {
    throw conflict('Email is already registered.');
  }

  const passwordHash = await bcrypt.hash(input.password, passwordSaltRounds);

  try {
    const user = await authRepository.createUser({
      email: input.email,
      name: input.name,
      passwordHash
    });

    return createAuthResponse(user);
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      throw conflict('Email is already registered.');
    }

    throw error;
  }
};

export const loginUser = async (input: LoginInput): Promise<AuthResponse> => {
  const user = await authRepository.findUserWithPasswordByEmail(input.email);

  if (!user) {
    throw unauthorized(invalidCredentialsMessage);
  }

  const passwordMatches = await bcrypt.compare(input.password, user.passwordHash);

  if (!passwordMatches) {
    throw unauthorized(invalidCredentialsMessage);
  }

  if (user.status !== 'activo') {
    throw forbidden('User account is inactive.');
  }

  return createAuthResponse(user);
};

export const getCurrentUser = async (userId: number): Promise<PublicUser> => {
  const user = await authRepository.findUserById(userId);

  if (!user) {
    throw unauthorized('Invalid or expired token.');
  }

  if (user.status !== 'activo') {
    throw forbidden('User account is inactive.');
  }

  return toPublicUser(user);
};
