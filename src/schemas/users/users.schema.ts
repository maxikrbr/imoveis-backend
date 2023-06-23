import { z } from 'zod'

const createUser = z.object({
	email: z.string().email().max(45),
	name: z.string().max(45),
	admin: z.boolean().optional(),
	password: z.string(),
})

const updateUser = createUser.partial().omit({ admin: true })

const returnUser = createUser.extend({
	id: z.number(),
}).omit({ password: true })

const returnUserComplete = returnUser.extend({
	createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.string().optional().nullish(),
})

const loginUser = z.object({
	password: z.string(),
	email: z.string().email(),
})

export { createUser, returnUser, returnUserComplete, updateUser, loginUser }
