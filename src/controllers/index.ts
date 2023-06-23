import { createCategoriesController, listCategoriesController, listCategoryByIdController } from './categories/categories.controllers'
import { loginController } from './login/login.controllers'
import { createRealEstateController, listRealEstatesController } from './realEstate/realEstate.controllers'
import { createScheduleController, listScheduleByIdController } from './schedules/schedule.controllers'
import { createUsersController, listAllUsersController, updateUserController, deleteUserController } from './users/users.controllers'

export {
	createUsersController,
	listAllUsersController,
	updateUserController,
	deleteUserController,
	loginController,
	createRealEstateController,
	listRealEstatesController,
	createScheduleController,
	listScheduleByIdController,
	createCategoriesController,
	listCategoriesController,
	listCategoryByIdController,
}
