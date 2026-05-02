import type { ErrorRequestHandler, RequestHandler } from 'express';

import { HttpError } from '../errors/http-error.js';

export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({
    message: `Route ${req.method} ${req.path} not found`
  });
};

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      message: error.message,
      ...(error.issues ? { issues: error.issues } : {})
    });
    return;
  }

  console.error(error);

  res.status(500).json({
    message: 'Internal server error'
  });
};
