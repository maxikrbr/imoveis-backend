import { AppDataSource } from '../../data-source'
import { Address, Category, RealEstate } from '../../entities'
import { AppError } from '../../errors'
import { IEState, IAddressesRepository, IRealEstateRepository } from '../../interfaces'
import { realEstateReformSchema, addressSchema } from '../../schemas'

const createRealEstate = async (data: IEState, checkCategory: Category): Promise<RealEstate> => {
	const repoEstate: IRealEstateRepository = AppDataSource.getRepository(RealEstate)
	const addressRepo: IAddressesRepository = AppDataSource.getRepository(Address)

	const realEstate = realEstateReformSchema.parse(data)
	const address = addressSchema.parse(data.address)

	const checkAddress: Address | null = await addressRepo.findOneBy({
		...address,
		number: address.number ? address.number : '',
	})

	if (checkAddress) {
		throw new AppError('Address already exists', 409)
	}

	const newRealEstate: RealEstate = repoEstate.create(realEstate as RealEstate)
	await repoEstate.save(newRealEstate)

	const newAddress: Address = addressRepo.create(address)
	await addressRepo.save(newAddress)

	newRealEstate!.address = newAddress
	newRealEstate.category = checkCategory

	await repoEstate.save(newRealEstate)

	return newRealEstate
}

export default createRealEstate
