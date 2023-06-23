import { AppDataSource } from '../../data-source'
import { RealEstate } from '../../entities'
import { AppError } from '../../errors'
import { IRealEstateRepository } from '../../interfaces'

const listScheduleById = async (id: number): Promise<RealEstate> => {
	const estateRepository: IRealEstateRepository = AppDataSource.getRepository(RealEstate)

	const user: RealEstate | null = await estateRepository
		.createQueryBuilder('realEstate')
		.select(['user', 'schedules', 'realEstate', 'address', 'categories'])
		.innerJoin('realEstate.address', 'address')
		.innerJoin('realEstate.category', 'categories')
		.innerJoin('realEstate.schedules', 'schedules')
		.innerJoin('schedules.user', 'user')
		.where('realEstate.id = :id', { id })
		.getOne()

	if (!user) {
		throw new AppError('RealEstate not found', 404)
	}

	return user
}

export default listScheduleById