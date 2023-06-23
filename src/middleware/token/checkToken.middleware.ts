import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'
import jwt from 'jsonwebtoken'

const checkTokenMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const token = req.headers.authorization

	if (!token) {
		throw new AppError('Missing bearer token', 401)
	}

	if (token === 'Bearer') {
		throw new AppError('Missing Bearer Token', 401)
	}

	jwt.verify(token?.split(' ')[1]!, process.env.SECRET_KEY!, (error, decod: any) => {
		if (error) {
			throw new AppError(error.message, 401)
		}

		req.admin = decod.admin
		req.id = Number(decod.sub)

		next()
	})
}

export default checkTokenMiddleware
