import { z } from "zod";

export const registerSchema = z.object({
  name : z.string().min(3,"Name must of 3 character"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format"),
  password: z.string().min(6, "Password must be at least 6 characters").max(15,"password should not be too long").regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
     confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], 
});