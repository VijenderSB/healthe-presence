import { z } from "zod";

// Indian mobile number validation (10 digits starting with 6-9)
const indianPhoneRegex = /^[6-9]\d{9}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .transform((val) => val.trim()),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .transform((val) => val.trim().toLowerCase()),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, "").slice(-10)) // Extract last 10 digits
    .refine((val) => indianPhoneRegex.test(val), {
      message: "Please enter a valid 10-digit Indian mobile number",
    }),
  clinic: z
    .string()
    .max(200, "Clinic name must be less than 200 characters")
    .optional()
    .transform((val) => val?.trim() || ""),
  service: z
    .string()
    .max(100, "Service must be less than 100 characters")
    .optional()
    .default(""),
  message: z
    .string()
    .max(2000, "Message must be less than 2000 characters")
    .optional()
    .transform((val) => val?.trim() || ""),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
