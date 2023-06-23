import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { IReturnUser, IUserRepository } from '../../interfaces'
import { returnUserComplete } from '../../schemas'

const listUsers = async (): Promise<IReturnUser[]> => {
	const UseRepository: IUserRepository = AppDataSource.getRepository(User)

	const users: User[] = await UseRepository.find()
	const newUser: IReturnUser[] = users.map((user) =>
		returnUserComplete.parse(user)
	)

	return newUser
}

export default listUsers
