import { Request, Response } from 'express'
import { ICategory } from '../../interfaces'
import { createCategory, listCategories, listCategoryById } from '../../services'

const createCategoriesController = async (req: Request, res: Response): Promise<Response> => {
	const newCategory: ICategory = await createCategory(req.body!)

	return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {
	const categories = await listCategories()

	return res.status(200).json(categories)
}

const listCategoryByIdController = async (req: Request, res: Response): Promise<Response> => {
	const itens = await listCategoryById(Number(req.params.id))

	return res.status(200).json(itens)
}

export {
	createCategoriesController,
	listCategoriesController,
	listCategoryByIdController,
}
