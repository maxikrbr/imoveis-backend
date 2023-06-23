import { Request, Response } from 'express'
import { RealEstate } from '../../entities'
import { IRealEstateReturn } from '../../interfaces'
import { createRealEstate, listAllRealEstate } from '../../services'

const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
	const newEstate: RealEstate = await createRealEstate(
		req.body,
		req.category
	)

	return res.status(201).json(newEstate)
}

const listRealEstatesController = async (req: Request, res: Response): Promise<Response> => {
	const realEstate: IRealEstateReturn[] = await listAllRealEstate()

	return res.status(200).json(realEstate)
}

export { 
    createRealEstateController, 
    listRealEstatesController 
}
