import { Request, Response } from 'express'
import { AppError } from '../../errors'
import { IReturnUser } from '../../interfaces'
import {
	createUser,
	deleteUser,
	listUsers,
	updateUser,
} from '../../services'

const createUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const newUser = await createUser(req.body)

	return res.status(201).json(newUser)
}

const listAllUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const users: IReturnUser[] = await listUsers()

	return res.status(200).json(users)
}

const updateUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const id: number = Number(req.params.id)
	const idUser: number = Number(req.id)

	const user: IReturnUser = await updateUser(
		req.user,
		req.body,
		id,
		idUser,
		req.admin
	)

	return res.status(200).json(user)
}

const deleteUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	if (!req.admin) {
		throw new AppError('Insufficient permission', 403)
	}

	await deleteUser(req.user)

	return res.status(204).send()
}

export {
	createUsersController,
	listAllUsersController,
	updateUserController,
	deleteUserController,
}
