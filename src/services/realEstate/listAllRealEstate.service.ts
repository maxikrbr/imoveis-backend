import { AppDataSource } from '../../data-source'
import { RealEstate } from '../../entities'
import { IRealEstateReturn, IRealEstateRepository } from '../../interfaces'
import { returnSchemaEstateGet } from '../../schemas'

const listAllRealEstate = async (): Promise<IRealEstateReturn[]> => {
	const UseRepository: IRealEstateRepository = AppDataSource.getRepository(RealEstate)

	let realEstate = await UseRepository.find({
		relations: {
			address: true,
		},
	})

	const newEstate: IRealEstateReturn[] = realEstate.map((realEstate) => {
		const number = (Math.round(Number(realEstate.value) * 100) / 100).toFixed(2)
		realEstate.value = number
		return returnSchemaEstateGet.parse(realEstate)
	})

	return newEstate
}

export default listAllRealEstate
