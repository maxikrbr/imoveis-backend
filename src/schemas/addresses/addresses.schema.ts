import { z } from 'zod'

const addressSchema = z.object({
	street: z.string().max(45),
	zipCode: z.string().max(8),
	number: z.string().max(8).nullish(),
	city: z.string().max(20),
	state: z.string().max(2),
})

const returnAddressSchema = addressSchema.extend({
	id: z.number(),
})

export { returnAddressSchema, addressSchema }
