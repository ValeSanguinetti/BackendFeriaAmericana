import type { EstadoUsuario } from '@prisma/client';

export interface RegisterInput {
  acceptedTerms: boolean;
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  status: EstadoUsuario;
  registeredAt: Date;
}

export interface AuthUserWithPassword extends AuthUser {
  passwordHash: string;
}

export interface CreateAuthUserInput {
  email: string;
  name: string;
  passwordHash: string;
}

export interface PublicUser {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  status: EstadoUsuario;
  registeredAt: string;
}

export interface AuthResponse {
  token: string;
  expiresIn: string;
  user: PublicUser;
}

export interface AuthenticatedUser {
  userId: number;
}

declare global {
  namespace Express {
    interface Request {
      auth?: AuthenticatedUser;
    }
  }
}
