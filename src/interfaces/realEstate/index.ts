import { Repository } from 'typeorm'
import { z } from 'zod'
import { RealEstate } from '../../entities'
import { realEstateReformSchema, realEStateResponse, realEstateSchema, returnStateSchema, returnSchemaEstateGet } from '../../schemas'

type IRealEstateSchema = z.infer<typeof realEstateReformSchema>
type IReturnEstateSchema = z.infer<typeof returnStateSchema>
type IRealEstateResponse = z.infer<typeof realEStateResponse>
type IRealEstateRepository = Repository<RealEstate>
type IRealEstateReturn = z.infer<typeof returnSchemaEstateGet>
type IEState = z.infer<typeof realEstateSchema>

export {
	IEState,
	IRealEstateSchema,
	IReturnEstateSchema,
	IRealEstateResponse,
	IRealEstateRepository,
	IRealEstateReturn,
}
