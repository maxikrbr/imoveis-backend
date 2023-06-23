import { Request, Response } from 'express'
import { userLogin } from '../../services'

const loginController = async (req: Request, res: Response): Promise<Response> => {
	const token: string = await userLogin(req.body)

	return res.status(200).json({ token: token })
}

export {
    loginController
}
