import { z } from 'zod'
import { loginUser } from '../../schemas'

type ILogin = z.infer<typeof loginUser>

export { ILogin }
