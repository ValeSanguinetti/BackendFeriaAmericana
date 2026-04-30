import app from './app.js';
import appConfig from './config/app.config.js';
import { connectDatabase } from './config/database/connection.js';

const startServer = async (): Promise<void> => {
  await connectDatabase();

  app.listen(appConfig.app.port, () => {
    console.log(`Server is running on http://localhost:${appConfig.app.port}`);
  });
};

void startServer().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
