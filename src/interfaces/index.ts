import { IReturnAddressSchema, IAddressSchema, IAddressesRepository } from './addresses'
import { ICategory, IReturnCategory, ICategoriesRepository } from './categories'
import { ILogin } from './login'
import { IRealEstateSchema, IReturnEstateSchema, IRealEstateRepository, IEState, IRealEstateResponse, IRealEstateReturn } from './realEstate'
import { ISchedule, IReturnSchedule, IScheduleRepository } from './schedules'
import { ICreateUser, IReturnUser, IUpdateUser, IUserRepository } from './users'

export {
	ICreateUser,
	IRealEstateReturn,
	IReturnUser,
	IUpdateUser,
	IUserRepository,
	ILogin,
	ICategory,
	IReturnCategory,
	ICategoriesRepository,
	IRealEstateSchema,
	IReturnEstateSchema,
	IRealEstateRepository,
	IReturnAddressSchema,
	IAddressSchema,
	IEState,
	IRealEstateResponse,
	ISchedule,
	IReturnSchedule,
	IScheduleRepository,
	IAddressesRepository,
}
