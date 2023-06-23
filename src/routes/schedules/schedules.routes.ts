import { Router } from 'express'
import { createScheduleController, listScheduleByIdController } from '../../controllers'
import { checkAdmMiddleware, checkUserIdMiddleware, checkTokenMiddleware, ensureDataTypeMiddleware } from '../../middleware'
import { scheduleUsers } from '../../schemas'

const ScheduleRoute: Router = Router()

ScheduleRoute.post('', checkTokenMiddleware, ensureDataTypeMiddleware(scheduleUsers), checkUserIdMiddleware, createScheduleController)

ScheduleRoute.get('/realEstate/:id', checkTokenMiddleware, checkAdmMiddleware, listScheduleByIdController)

export default ScheduleRoute