import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { AppError } from '../../errors'

const checkEmailMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const email: string = req.body.email

    if (email) {
        const exists: boolean | undefined = await userRepository
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .select('1')
            .getRawOne()

        if (exists) {
            throw new AppError('Email already exists', 409)
        }
    }

    next()
}

export default checkEmailMiddleware
