import { Repository } from 'typeorm'
import { z } from 'zod'
import { Category } from '../../entities'
import { categorySchema, returnCategorySchema } from '../../schemas'

type ICategory = z.infer<typeof categorySchema>
type IReturnCategory = z.infer<typeof returnCategorySchema>
type ICategoriesRepository = Repository<Category>

export { ICategory, IReturnCategory, ICategoriesRepository }
