import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Minimum 6 character required" }),
});
