import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { ICategoriesRepository } from '../../interfaces'

const listCategories = async (): Promise<Category[]> => {
	const UseRepository: ICategoriesRepository = AppDataSource.getRepository(Category)

	const categories: Category[] = await UseRepository.find()

	return categories
}

export default listCategories
