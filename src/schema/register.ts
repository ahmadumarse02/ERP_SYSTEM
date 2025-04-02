import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
