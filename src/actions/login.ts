"use server";

import * as z from "zod";
import { LoginSchema } from "@/schema/login";

export const login = async (
  values: z.infer<typeof LoginSchema>
) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Field!" };
  }
  console.log(values);

  return { success: "Email sent!" };
};
