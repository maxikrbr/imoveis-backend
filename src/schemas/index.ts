import { returnAddressSchema, addressSchema } from './addresses/addresses.schema'
import { categorySchema, returnCategorySchema } from './categories/categories.schema'
import { realEstateSchema, returnStateSchema, realEstateReformSchema, realEStateResponse, returnSchemaEstateGet } from './realEstate/realEstate.schema'
import { returnSchedule, scheduleUsers, scheduleUsersComplet } from './schedules/schedules.schema'
import { createUser, returnUser, returnUserComplete, updateUser, loginUser } from './users/users.schema'

export {
	createUser,
	returnUser,
	returnUserComplete,
	updateUser,
	loginUser,
	categorySchema,
	returnCategorySchema,
	realEstateSchema,
	returnStateSchema,
	returnAddressSchema,
	addressSchema,
	realEstateReformSchema,
	returnSchemaEstateGet,
	realEStateResponse,
	returnSchedule,
	scheduleUsers,
	scheduleUsersComplet,
}