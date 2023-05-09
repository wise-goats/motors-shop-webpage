import { z } from "zod";
import { addressSchema } from "./address.schemas";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  isSeller: z.string(),
  cpf: z
    .string()
    .max(11)
    .regex(/^\d{11}$/, "Digite um CPF válido")
    .trim()
    .optional(),
  phone: z.string().max(16),
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "E necessário de uma data válida."),
  description: z.string(),
  password: z.string().max(15, "Limite maximo de 15 caracteres.").trim(),
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
