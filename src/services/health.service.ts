import type { HealthStatus } from '../models/health.model.js';

export const getHealthStatus = (): HealthStatus => ({
  message: 'Backend Feria Americana API is running'
});
