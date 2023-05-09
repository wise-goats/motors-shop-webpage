import { z } from "zod";

const addressSchema = z.object({
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  state: z.string(),
  city: z.string(),
  zipcode: z.string(),
});

export { addressSchema };
