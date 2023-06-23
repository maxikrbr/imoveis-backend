import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { AppError } from '../../errors'
import { ICategoriesRepository } from '../../interfaces'

const checkCategoryNameMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const categoryRepository: ICategoriesRepository = AppDataSource.getRepository(Category)
	const name: string = req.body.name
	const id: number = Number(req.body.categoryId) || Number(req.params.id)

	if (name) {
		const checkName: Category | null = await categoryRepository
			.createQueryBuilder("category")
			.where("category.name = :name", { name })
			.getOne()

		if (checkName) {
			throw new AppError('Category already exists', 409)
		}
	}
	
	if (id) {
		const checkId: Category | null = await categoryRepository
			.createQueryBuilder("category")
			.where("category.id = :id", { id })
			.getOne()

		if (!checkId) {
			throw new AppError('Category not found', 404)
		}

		req.category = checkId!
	}

	next()
}

export default checkCategoryNameMiddleware
