import { Router } from 'express'
import { createUsersController, deleteUserController, listAllUsersController, updateUserController } from '../../controllers'
import { checkAdmMiddleware, checkEmailMiddleware, checkUserIdMiddleware, checkTokenMiddleware, ensureDataTypeMiddleware } from '../../middleware'
import { createUser, updateUser } from '../../schemas'

const UsersRoutes: Router = Router()

UsersRoutes.post('', ensureDataTypeMiddleware(createUser), checkEmailMiddleware, createUsersController)

UsersRoutes.get('', checkTokenMiddleware, checkAdmMiddleware, listAllUsersController)

UsersRoutes.patch('/:id', ensureDataTypeMiddleware(updateUser), checkUserIdMiddleware, checkEmailMiddleware, checkTokenMiddleware, updateUserController)

UsersRoutes.delete('/:id', checkUserIdMiddleware, checkTokenMiddleware, deleteUserController)

export default UsersRoutes
