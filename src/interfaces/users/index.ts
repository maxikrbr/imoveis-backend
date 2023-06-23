import { DeepPartial, Repository } from 'typeorm'
import { z } from 'zod'
import { User } from '../../entities'
import { createUser, returnUser } from '../../schemas'

type ICreateUser = z.infer<typeof createUser>
type IReturnUser = z.infer<typeof returnUser>
type IUserRepository = Repository<User>
type IUpdateUser = DeepPartial<ICreateUser>

export { ICreateUser, IReturnUser, IUserRepository, IUpdateUser }
