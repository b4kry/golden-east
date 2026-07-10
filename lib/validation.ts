import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(200, "Name must be under 200 characters")
    .transform((v) => v.trim()),
  email: z
    .string()
    .email("Invalid email address")
    .max(320, "Email must be under 320 characters")
    .transform((v) => v.trim().toLowerCase()),
  phone: z
    .string()
    .max(30, "Phone must be under 30 characters")
    .transform((v) => v.trim())
    .optional()
    .default(""),
  company: z
    .string()
    .max(200, "Company must be under 200 characters")
    .transform((v) => v.trim())
    .optional()
    .default(""),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5000 characters")
    .transform((v) => v.trim()),
  locale: z.enum(["en", "ar"]).default("en"),
})

export const quoteCustomerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(200, "Name must be under 200 characters")
    .transform((v) => v.trim()),
  email: z
    .string()
    .email("Invalid email address")
    .max(320, "Email must be under 320 characters")
    .transform((v) => v.trim().toLowerCase()),
  phone: z
    .string()
    .min(5, "Phone must be at least 5 characters")
    .max(30, "Phone must be under 30 characters")
    .transform((v) => v.trim()),
  company: z
    .string()
    .max(200, "Company must be under 200 characters")
    .transform((v) => v.trim())
    .optional()
    .default(""),
  notes: z
    .string()
    .max(5000, "Notes must be under 5000 characters")
    .transform((v) => v.trim())
    .optional()
    .default(""),
})

export const quoteItemSchema = z.object({
  productId: z.string().min(1),
  name: z.string().min(1).max(300),
  quantity: z.number().int().min(1).max(999999),
  notes: z.string().max(1000).optional().default(""),
})

export const quoteSchema = z.object({
  items: z.array(quoteItemSchema).min(1, "Quote must contain at least one item").max(100, "Quote too large"),
  customer: quoteCustomerSchema,
  locale: z.enum(["en", "ar"]).default("en"),
})

export type ContactInput = z.infer<typeof contactSchema>
export type QuoteInput = z.infer<typeof quoteSchema>
export type QuoteItem = z.infer<typeof quoteItemSchema>
export type QuoteCustomer = z.infer<typeof quoteCustomerSchema>
