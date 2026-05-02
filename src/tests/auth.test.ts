import bcrypt from 'bcryptjs';
import request from 'supertest';
import { beforeEach, describe, expect, it, vi } from 'vitest';

process.env.JWT_SECRET = 'test-jwt-secret';
process.env.JWT_EXPIRE = '1h';
process.env.CORS_ORIGIN = 'http://localhost:5173,http://localhost:3000';

type TestUser = {
  idUsuario: number;
  nombre: string;
  email: string;
  contrasena: string;
  telefono: string | null;
  estado: 'activo' | 'inactivo';
  fechaRegistro: Date;
};

const users: TestUser[] = [];

const prismaMock = {
  usuario: {
    create: vi.fn(async ({ data }: { data: { contrasena: string; email: string; nombre: string } }) => {
      const user: TestUser = {
        idUsuario: users.length + 1,
        nombre: data.nombre,
        email: data.email,
        contrasena: data.contrasena,
        telefono: null,
        estado: 'activo',
        fechaRegistro: new Date('2026-04-30T12:00:00.000Z')
      };

      users.push(user);
      return user;
    }),
    findUnique: vi.fn(
      async ({
        where
      }: {
        where: { email?: string; idUsuario?: number };
      }): Promise<TestUser | null> => {
        if (where.email) {
          return users.find((user) => user.email === where.email) ?? null;
        }

        if (where.idUsuario) {
          return users.find((user) => user.idUsuario === where.idUsuario) ?? null;
        }

        return null;
      }
    )
  }
};

vi.mock('../infrastructure/persistence/prisma/client.js', () => ({
  default: prismaMock,
  prisma: prismaMock
}));

const { default: app } = await import('../app.js');

const seedUser = async (overrides: Partial<TestUser> = {}): Promise<TestUser> => {
  const user: TestUser = {
    idUsuario: users.length + 1,
    nombre: 'Existing User',
    email: 'existing@example.com',
    contrasena: await bcrypt.hash('Password123', 12),
    telefono: null,
    estado: 'activo',
    fechaRegistro: new Date('2026-04-30T12:00:00.000Z'),
    ...overrides
  };

  users.push(user);
  return user;
};

describe('auth api', () => {
  beforeEach(() => {
    users.length = 0;
    vi.clearAllMocks();
  });

  it('registers a user, normalizes email, hashes password, and hides password', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({
        acceptedTerms: true,
        email: ' USER@Example.COM ',
        name: 'User Example',
        password: 'Password123',
        passwordConfirmation: 'Password123'
      })
      .expect(201);

    expect(response.body.token).toEqual(expect.any(String));
    expect(response.body.expiresIn).toBe('1h');
    expect(response.body.user).toEqual({
      id: 1,
      name: 'User Example',
      email: 'user@example.com',
      phone: null,
      status: 'activo',
      registeredAt: '2026-04-30T12:00:00.000Z'
    });
    expect(response.body.user).not.toHaveProperty('contrasena');
    expect(users[0].contrasena).not.toBe('Password123');
    await expect(bcrypt.compare('Password123', users[0].contrasena)).resolves.toBe(true);
  });

  it('rejects duplicate registration emails', async () => {
    await seedUser({ email: 'existing@example.com' });

    const response = await request(app)
      .post('/auth/register')
      .send({
        acceptedTerms: true,
        email: 'existing@example.com',
        name: 'Other User',
        password: 'Password123',
        passwordConfirmation: 'Password123'
      })
      .expect(409);

    expect(response.body).toEqual({
      message: 'Email is already registered.'
    });
  });

  it('logs in with valid credentials', async () => {
    await seedUser();

    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'existing@example.com',
        password: 'Password123'
      })
      .expect(200);

    expect(response.body.token).toEqual(expect.any(String));
    expect(response.body.user.email).toBe('existing@example.com');
    expect(response.body.user).not.toHaveProperty('contrasena');
  });

  it('rejects invalid login credentials with a generic error', async () => {
    await seedUser();

    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'existing@example.com',
        password: 'wrong-password'
      })
      .expect(401);

    expect(response.body).toEqual({
      message: 'Invalid email or password.'
    });
  });

  it('rejects /me without a bearer token', async () => {
    const response = await request(app).get('/me').expect(401);

    expect(response.body).toEqual({
      message: 'Authorization bearer token is required.'
    });
  });

  it('rejects /me with an invalid token', async () => {
    const response = await request(app)
      .get('/me')
      .set('Authorization', 'Bearer invalid-token')
      .expect(401);

    expect(response.body).toEqual({
      message: 'Invalid or expired token.'
    });
  });

  it('returns the current user for a valid bearer token', async () => {
    const registerResponse = await request(app)
      .post('/auth/register')
      .send({
        acceptedTerms: true,
        email: 'me@example.com',
        name: 'Current User',
        password: 'Password123',
        passwordConfirmation: 'Password123'
      })
      .expect(201);

    const response = await request(app)
      .get('/me')
      .set('Authorization', `Bearer ${registerResponse.body.token}`)
      .expect(200);

    expect(response.body).toEqual({
      user: {
        id: 1,
        name: 'Current User',
        email: 'me@example.com',
        phone: null,
        status: 'activo',
        registeredAt: '2026-04-30T12:00:00.000Z'
      }
    });
  });
});
