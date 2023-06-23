import { Router } from 'express'
import { createCategoriesController, listCategoriesController, listCategoryByIdController } from '../../controllers'
import { checkAdmMiddleware, checkCategoryNameMiddleware, checkTokenMiddleware, ensureDataTypeMiddleware } from '../../middleware'
import { categorySchema } from '../../schemas'

const CategoryRoutes: Router = Router()

CategoryRoutes.post('', checkTokenMiddleware, ensureDataTypeMiddleware(categorySchema), checkAdmMiddleware, checkCategoryNameMiddleware, createCategoriesController)

CategoryRoutes.get('', listCategoriesController)
CategoryRoutes.get('/:id/realEstate', checkCategoryNameMiddleware, listCategoryByIdController)

export default CategoryRoutes