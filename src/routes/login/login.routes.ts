import { Router } from 'express'
import { loginController } from '../../controllers'
import { ensureDataTypeMiddleware } from '../../middleware'
import { loginUser } from '../../schemas'

const LoginRoutes: Router = Router()

LoginRoutes.post('', ensureDataTypeMiddleware(loginUser), loginController)

export default LoginRoutes