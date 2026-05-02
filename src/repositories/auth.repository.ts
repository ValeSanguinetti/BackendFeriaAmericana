import type { Prisma } from '@prisma/client';

import prisma from '../infrastructure/persistence/prisma/client.js';
import type { AuthUser, AuthUserWithPassword, CreateAuthUserInput } from '../models/auth.model.js';

const userSelect = {
  idUsuario: true,
  nombre: true,
  email: true,
  telefono: true,
  estado: true,
  fechaRegistro: true
} satisfies Prisma.UsuarioSelect;

const userWithPasswordSelect = {
  ...userSelect,
  contrasena: true
} satisfies Prisma.UsuarioSelect;

type UserRecord = Prisma.UsuarioGetPayload<{ select: typeof userSelect }>;
type UserWithPasswordRecord = Prisma.UsuarioGetPayload<{ select: typeof userWithPasswordSelect }>;

const mapUser = (user: UserRecord): AuthUser => ({
  id: user.idUsuario,
  name: user.nombre,
  email: user.email,
  phone: user.telefono,
  status: user.estado,
  registeredAt: user.fechaRegistro
});

const mapUserWithPassword = (user: UserWithPasswordRecord): AuthUserWithPassword => ({
  ...mapUser(user),
  passwordHash: user.contrasena
});

export const isUniqueConstraintError = (error: unknown): boolean =>
  typeof error === 'object' &&
  error !== null &&
  'code' in error &&
  (error as { code?: string }).code === 'P2002';

export const authRepository = {
  async createUser(input: CreateAuthUserInput): Promise<AuthUser> {
    const user = await prisma.usuario.create({
      data: {
        contrasena: input.passwordHash,
        email: input.email,
        nombre: input.name
      },
      select: userSelect
    });

    return mapUser(user);
  },

  async findUserByEmail(email: string): Promise<AuthUser | null> {
    const user = await prisma.usuario.findUnique({
      where: {
        email
      },
      select: userSelect
    });

    return user ? mapUser(user) : null;
  },

  async findUserById(userId: number): Promise<AuthUser | null> {
    const user = await prisma.usuario.findUnique({
      where: {
        idUsuario: userId
      },
      select: userSelect
    });

    return user ? mapUser(user) : null;
  },

  async findUserWithPasswordByEmail(email: string): Promise<AuthUserWithPassword | null> {
    const user = await prisma.usuario.findUnique({
      where: {
        email
      },
      select: userWithPasswordSelect
    });

    return user ? mapUserWithPassword(user) : null;
  }
};
