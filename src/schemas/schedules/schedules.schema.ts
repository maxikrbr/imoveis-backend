import { z } from 'zod'

const scheduleUsers = z.object({
	date: z.string(),
	hour: z.string(),
	realEstateId: z.number(),
})

const scheduleUsersComplet = scheduleUsers.omit({
	realEstateId: true,
})

const returnSchedule = scheduleUsers.extend({
	id: z.number(),
})

export { returnSchedule, scheduleUsers, scheduleUsersComplet }
