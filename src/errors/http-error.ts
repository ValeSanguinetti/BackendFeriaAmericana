export interface ValidationIssue {
  field: string;
  message: string;
}

export class HttpError extends Error {
  statusCode: number;
  issues?: ValidationIssue[];

  constructor(statusCode: number, message: string, issues?: ValidationIssue[]) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.issues = issues;
  }
}

export const badRequest = (message: string, issues?: ValidationIssue[]): HttpError =>
  new HttpError(400, message, issues);

export const unauthorized = (message = 'Unauthorized'): HttpError =>
  new HttpError(401, message);

export const forbidden = (message = 'Forbidden'): HttpError =>
  new HttpError(403, message);

export const conflict = (message: string): HttpError => new HttpError(409, message);
