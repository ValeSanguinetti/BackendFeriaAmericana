import express from 'express';
import cors from 'cors';

import appConfig from './config/app.config.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';
import { authRouter } from './routes/auth.routes.js';
import { healthRouter } from './routes/health.routes.js';

const app = express();

app.use(
  cors({
    origin: appConfig.cors.origins
  })
);
app.use(express.json());

app.use(healthRouter);
app.use(authRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
