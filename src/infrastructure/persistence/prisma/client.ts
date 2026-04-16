import { PrismaClient } from '../../../../generated/prisma/index.js';

type GlobalPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

const globalForPrisma = globalThis as GlobalPrisma;

const createPrismaClient = (): PrismaClient =>
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error']
  });

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export { PrismaClient };
export default prisma;
export type {
  Carrito,
  CarritoItem,
  ListaDeseos,
  ListaDeseosItem,
  Pedido,
  PedidoItem,
  Prisma,
  Producto,
  Usuario
} from '../../../../generated/prisma/index.js';
