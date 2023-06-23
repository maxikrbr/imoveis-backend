import { Request, Response } from 'express'
import { listScheduleById, createSchedule } from '../../services'

const createScheduleController = async (req: Request, res: Response): Promise<Response> => {
	const newSchedule: string = await createSchedule(req.body, req.user)

	return res.status(201).json({ message: newSchedule })
}

const listScheduleByIdController = async (req: Request, res: Response): Promise<Response> => {
	const schedule = await listScheduleById(Number(req.params.id))

	return res.status(200).json(schedule)
}

export { createScheduleController, listScheduleByIdController }
