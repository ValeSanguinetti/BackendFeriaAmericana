import appConfig from '../app.config.js';
import prisma from '../../infrastructure/persistence/prisma/client.js';

let connectionPromise: Promise<void> | undefined;

export const connectDatabase = async (): Promise<void> => {
  if (!appConfig.database.url) {
    throw new Error('DATABASE_URL is required to connect PostgreSQL');
  }

  connectionPromise ??= prisma.$connect();

  try {
    await connectionPromise;
  } catch (error) {
    connectionPromise = undefined;
    throw error;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  await prisma.$disconnect();
  connectionPromise = undefined;
};

export const databaseConnection = prisma;

export default prisma;
