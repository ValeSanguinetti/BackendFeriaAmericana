import { badRequest, type ValidationIssue } from '../errors/http-error.js';
import type { LoginInput, RegisterInput } from '../models/auth.model.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const asString = (value: unknown): string => (typeof value === 'string' ? value : '');

export const normalizeEmail = (email: string): string => email.trim().toLowerCase();

export const validateRegisterInput = (body: unknown): RegisterInput => {
  const payload = isRecord(body) ? body : {};
  const name = asString(payload.name).trim();
  const email = normalizeEmail(asString(payload.email));
  const password = asString(payload.password);
  const passwordConfirmation = asString(payload.passwordConfirmation);
  const acceptedTerms = payload.acceptedTerms === true;
  const issues: ValidationIssue[] = [];

  if (!name) {
    issues.push({ field: 'name', message: 'Name is required.' });
  }

  if (!email) {
    issues.push({ field: 'email', message: 'Email is required.' });
  } else if (!emailPattern.test(email)) {
    issues.push({ field: 'email', message: 'Email is invalid.' });
  }

  if (!password) {
    issues.push({ field: 'password', message: 'Password is required.' });
  } else if (password.length < 8) {
    issues.push({ field: 'password', message: 'Password must have at least 8 characters.' });
  }

  if (!passwordConfirmation) {
    issues.push({ field: 'passwordConfirmation', message: 'Password confirmation is required.' });
  } else if (passwordConfirmation !== password) {
    issues.push({ field: 'passwordConfirmation', message: 'Passwords do not match.' });
  }

  if (!acceptedTerms) {
    issues.push({ field: 'acceptedTerms', message: 'Terms must be accepted.' });
  }

  if (issues.length > 0) {
    throw badRequest('Validation failed.', issues);
  }

  return {
    acceptedTerms,
    email,
    name,
    password,
    passwordConfirmation
  };
};

export const validateLoginInput = (body: unknown): LoginInput => {
  const payload = isRecord(body) ? body : {};
  const email = normalizeEmail(asString(payload.email));
  const password = asString(payload.password);
  const issues: ValidationIssue[] = [];

  if (!email) {
    issues.push({ field: 'email', message: 'Email is required.' });
  } else if (!emailPattern.test(email)) {
    issues.push({ field: 'email', message: 'Email is invalid.' });
  }

  if (!password) {
    issues.push({ field: 'password', message: 'Password is required.' });
  }

  if (issues.length > 0) {
    throw badRequest('Validation failed.', issues);
  }

  return {
    email,
    password
  };
};
