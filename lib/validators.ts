import { z } from 'zod/v4'

export const requiredString = z.string().min(1, 'Required')

export const email = z.email('Invalid email address')

export const url = z.url('Invalid URL')

export const phone = z
  .string()
  .regex(/^\+?[\d\s\-().]{7,20}$/, 'Invalid phone number')

export const positiveInt = z
  .number()
  .int('Must be a whole number')
  .positive('Must be positive')

export const id = z.string().min(1)

export const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}/, 'Invalid date format')

export const optionalString = z.string().optional()
