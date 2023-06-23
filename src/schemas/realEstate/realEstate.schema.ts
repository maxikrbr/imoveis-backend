import { z } from 'zod'
import { addressSchema, returnAddressSchema } from '../addresses/addresses.schema'
import { categorySchema } from '../categories/categories.schema'

const realEstateSchema = z.object({
	value: z.string().or(z.number()),
	size: z.number().int().positive(),
	address: addressSchema,
	categoryId: z.number(),
})

const returnStateSchema = realEstateSchema.extend({
	id: z.number(),
	updatedAt: z.date().or(z.string()),
	createdAt: z.date().or(z.string()),
})

const returnSchemaEstateGet = z.object({
	value: z.string().or(z.number()),
	size: z.number().int().positive(),
	address: returnAddressSchema,
	sold: z.boolean(),
	id: z.number(),
	updatedAt: z.date().or(z.string()),
	createdAt: z.date().or(z.string()),
})

const realEstateReformSchema = realEstateSchema.omit({
	address: true,
	categoryId: true,
})

const realEStateResponse = realEstateSchema.extend({
	category: categorySchema,
}).omit({
	categoryId: true,
})

export {
	realEstateSchema,
	returnStateSchema,
	realEstateReformSchema,
	realEStateResponse,
	returnSchemaEstateGet,
}
