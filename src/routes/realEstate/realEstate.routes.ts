import { Router } from 'express'
import { createRealEstateController, listRealEstatesController } from '../../controllers'
import { checkAdmMiddleware, checkCategoryNameMiddleware, checkTokenMiddleware, ensureDataTypeMiddleware } from '../../middleware'
import { realEstateSchema } from '../../schemas'

const RealEstateRoute: Router = Router()

RealEstateRoute.post('', checkTokenMiddleware, checkAdmMiddleware, ensureDataTypeMiddleware(realEstateSchema), checkCategoryNameMiddleware, createRealEstateController)

RealEstateRoute.get('', listRealEstatesController)

export default RealEstateRoute