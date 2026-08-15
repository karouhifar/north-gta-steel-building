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

  // Step 3 — roof & panels
  roofShape: z.enum(["gable", "single-slope", "unsure"], {
    message: "Pick a roof shape",
  }),
  roofPitch: z.enum(["1:12", "2:12", "3:12", "4:12", "6:12", "unsure"], {
    message: "Pick a roof pitch",
  }),
  roofPanel: z.enum(["screw-down", "standing-seam", "unsure"], {
    message: "Pick a roof panel type",
  }),
  roofFinish: z.enum(["galvalume", "painted", "unsure"], {
    message: "Pick a roof finish",
  }),
  gutters: z.enum(["yes", "no", "unsure"], {
    message: "Let us know about gutters",
  }),

  // Step 3 — optional detail (advanced disclosure)
  roofColor: z.string().trim().max(40, "Max 40 characters").optional(),
  wallColor: z.string().trim().max(40, "Max 40 characters").optional(),
  panelGauge: z.enum(["29ga", "26ga", "24ga"]).optional(),
  insulationRoof: z.string().trim().max(40, "Max 40 characters").optional(),
  insulationWall: z.string().trim().max(40, "Max 40 characters").optional(),
  linerPanel: z.enum(["none", "walls", "ceiling", "both"]).optional(),

  // Step 4 — framed openings
  layoutSketch: z.enum(["have", "describe", "none"], {
    message: "Pick the option that fits",
  }),
  overheadDoors: z.coerce
    .number({ message: "Enter a number" })
    .int()
    .min(0, "Min 0")
    .max(99, "Max 99"),
  manDoors: z.coerce
    .number({ message: "Enter a number" })
    .int()
    .min(0, "Min 0")
    .max(99, "Max 99"),
  windows: z.coerce
    .number({ message: "Enter a number" })
    .int()
    .min(0, "Min 0")
    .max(99, "Max 99"),
  louvers: z.coerce
    .number({ message: "Enter a number" })
    .int()
    .min(0, "Min 0")
    .max(99, "Max 99"),
  openingNotes: z.string().trim().max(500, "Max 500 characters").optional(),

  // Step 5
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

  // Step 6
  timeline: z.enum(["asap", "1-3", "3-6", "6-12", "researching"], {
    message: "Select a timeline",
  }),

  // Step 7
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
  3: [
    "roofShape",
    "roofPitch",
    "roofPanel",
    "roofFinish",
    "gutters",
    "roofColor",
    "wallColor",
    "panelGauge",
    "insulationRoof",
    "insulationWall",
    "linerPanel",
  ],
  4: [
    "layoutSketch",
    "overheadDoors",
    "manDoors",
    "windows",
    "louvers",
    "openingNotes",
  ],
  5: ["region", "city", "postalCode"],
  6: ["timeline"],
  7: ["fullName", "email", "phone", "notes", "smsConsent"],
};
