import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { AppError } from '../../errors'
import { IReturnUser, IUserRepository } from '../../interfaces'
import { returnUserComplete } from '../../schemas'

const updateUsersService = async (oldUser: User, newUser: User, id: number, idUser: number, adm: boolean): Promise<IReturnUser> => {
	if (id !== idUser && !adm) {
		throw new AppError('Insufficient permission', 403)
	}

	const UseRepository: IUserRepository = AppDataSource.getRepository(User)

	const userUpdate: User = UseRepository.create({
		...oldUser,
		...newUser,
	})

	await UseRepository.save(userUpdate)

	return returnUserComplete.parse(userUpdate)
}

export default updateUsersService
