import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { ILogin, IUserRepository } from '../../interfaces'
import { compare } from 'bcryptjs'
import { AppError } from '../../errors'
import jwt from 'jsonwebtoken'

const userLogin = async (data: ILogin): Promise<string> => {
	const userRepository: IUserRepository = AppDataSource.getRepository(User)

	const user = await userRepository.createQueryBuilder("user")
		.where("user.email = :email", { email: data.email })
		.andWhere("user.deletedAt IS NULL")
		.addSelect("user.password")
		.getOne()

	if (!user) {
		throw new AppError('Invalid credentials', 401)
	}

	if (user.deletedAt) {
		throw new AppError('Invalid credentials', 401)
	}

	const comparePassWord: boolean = await compare(data.password, user.password!)

	if (!comparePassWord) {
		throw new AppError('Invalid credentials', 401)
	}

	const token: string = jwt.sign(
		{
			admin: user.admin,
			email: user.email,
		},
		process.env.SECRET_KEY!,
		{
			expiresIn: '24h',
			subject: user.id + '',
		}
	)

	return token
}

export default userLogin