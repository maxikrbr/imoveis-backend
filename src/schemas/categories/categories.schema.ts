import { z } from 'zod'

const categorySchema = z.object({
	name: z.string(),
})

const returnCategorySchema = categorySchema.extend({
	id: z.number(),
})

export { categorySchema, returnCategorySchema }
