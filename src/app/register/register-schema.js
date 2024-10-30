import { z } from "zod";

export const registrationSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .trim(),
  image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => file && file.size <= 5000000,
      "Image must be smaller than 5MB"
    ),
});
