import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { IReturnUser } from '../../interfaces'
import { returnUserComplete } from '../../schemas'

const createUser = async (data: User): Promise<IReturnUser> => {
	const UseRepository: Repository<User> = AppDataSource.getRepository(User)

	const user = UseRepository.create(data)

	await UseRepository.save(user)

	const newUser: IReturnUser = returnUserComplete.parse(user)

	return newUser
}

export default createUser
