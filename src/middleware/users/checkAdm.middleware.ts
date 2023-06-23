import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'

const checkAdmMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	if (!req.admin) {
		throw new AppError('Insufficient permission', 403)
	}

	next()
}

export default checkAdmMiddleware
