import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { ICategoriesRepository } from '../../interfaces'

const listCategoryById = async (id: number) => {
	const UseRepository: ICategoriesRepository = AppDataSource.getRepository(Category)

	const item = await UseRepository.createQueryBuilder('category')
		.where('category.id = :id', { id })
		.leftJoinAndSelect('category.realEstate', 'realEstate')
		.getOne()

	return item
}

export default listCategoryById
