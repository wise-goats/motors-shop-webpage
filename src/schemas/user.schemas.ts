import { z } from "zod";
import { addressSchema } from "./address.schemas";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  isSeller: z.string(),
  cpf: z
    .string()
    .max(11)
    .regex(/^\d{11}$/)
    .trim()
    .optional(),
  phone: z.string().max(16),
  birthDate: z.string(),
  description: z.string(),
  password: z.string().max(15).trim(),
  passwordConfirm: z.string().max(15).trim(),
});
// .refine((data) => data.password === data.passwordConfirm, {
//   message: "As senhas devem ser iguais!",
//   path: ["passwordConfirm"],
// });

const userCreateSchema = userSchema.extend({
  addresses: addressSchema,
});

const userUpdateSchema = userCreateSchema.partial();

export { userSchema, userCreateSchema, userUpdateSchema };
