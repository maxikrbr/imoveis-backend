import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { ICategory, ICategoriesRepository } from '../../interfaces'
import { returnCategorySchema } from '../../schemas'

const createCategory = async (data: Category) => {
	const UseRepository: ICategoriesRepository = AppDataSource.getRepository(Category)

	const category: ICategory = UseRepository.create(data)

	await UseRepository.save(category)

	const validatedCategory = returnCategorySchema.parse(category)

	return validatedCategory
}

export default createCategory