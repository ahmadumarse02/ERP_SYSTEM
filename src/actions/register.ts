"use server";

import * as z from "zod";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schema/register";
import { getUserByEmail } from "@/helper/user";

export const register = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Field!" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  console.log(values);

  return { success: "User created!" };
};
