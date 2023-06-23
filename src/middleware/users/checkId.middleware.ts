import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { AppError } from '../../errors'

const checkIdUserMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User)

	const id: number = Number(req.params.id)
	const idUserToken: number = Number(req.id)

	if (id) {
		const checkId = await userRepository
			.createQueryBuilder('user')
			.leftJoinAndSelect('user.schedules', 'schedules')
			.where('user.id = :id', { id })
			.getOne()

		if (!checkId) {
			throw new AppError('User not found', 404)
		}

		req.user = checkId!

		next()
	}

	if (idUserToken) {
		const checkIdToken: User | null = await userRepository
			.createQueryBuilder('user')
			.leftJoinAndSelect('user.schedules', 'schedule')
			.where('user.id = :id', { id: idUserToken })
			.getOne()

		if (!checkIdToken) {
			throw new AppError('User not found', 404)
		}

		req.user = checkIdToken!

		next()
	}
}

export default checkIdUserMiddleware
