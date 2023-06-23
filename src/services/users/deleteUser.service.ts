import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { IUserRepository } from '../../interfaces'

const deleteUser = async (user: User): Promise<void> => {
	const UseRepository: IUserRepository = AppDataSource.getRepository(User)

	await UseRepository.softRemove(user!)
}

export default deleteUser
