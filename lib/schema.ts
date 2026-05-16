import { z } from "zod";

const POSTAL_CODE_RE = /^[ABCEGHJ-NPRSTVXY]\d[A-Z][ -]?\d[A-Z]\d$/i;

export const quoteFormSchema = z.object({
  // Step 1
  buildingType: z.enum(
    [
      "industrial",
      "commercial",
      "agriculture",
      "workshop",
      "warehouse",
      "storage",
      "garage",
      "quonset",
      "other",
    ],
    { message: "Please choose a building type" },
  ),

  // Step 2
  width: z.coerce
    .number({ message: "Width is required" })
    .int()
    .min(10, "Min 10 ft")
    .max(500, "Max 500 ft"),
  length: z.coerce
    .number({ message: "Length is required" })
    .int()
    .min(10, "Min 10 ft")
    .max(1000, "Max 1000 ft"),
  height: z.coerce
    .number({ message: "Height is required" })
    .int()
    .min(8, "Min 8 ft")
    .max(80, "Max 80 ft"),

  // Step 3
  region: z
    .string({ message: "Choose your region" })
    .min(1, "Choose your region"),
  city: z.string().trim().min(2, "Enter a city or town"),
  postalCode: z
    .string()
    .trim()
    .optional()
    .refine(
      (v) => !v || POSTAL_CODE_RE.test(v),
      "Enter a valid Canadian postal code",
    ),

  // Step 4
  timeline: z.enum(["asap", "1-3", "3-6", "6-12", "researching"], {
    message: "Select a timeline",
  }),

  // Step 5
  fullName: z.string().trim().min(2, "Enter your full name"),
  email: z.email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (v) => !v || /^[\d\s()+\-.]{7,}$/.test(v),
      "Enter a valid phone number",
    ),
  notes: z.string().trim().max(1000, "Max 1000 characters").optional(),
  smsConsent: z.literal(true, { message: "You must agree to continue" }),
});

export type QuoteFormInput = z.input<typeof quoteFormSchema>;
export type QuoteFormValues = z.output<typeof quoteFormSchema>;

// Per-step field arrays for partial validation via trigger()
export const STEP_FIELDS: Record<number, (keyof QuoteFormInput)[]> = {
  1: ["buildingType"],
  2: ["width", "length", "height"],
  3: ["region", "city", "postalCode"],
  4: ["timeline"],
  5: ["fullName", "email", "phone", "notes", "smsConsent"],
};
