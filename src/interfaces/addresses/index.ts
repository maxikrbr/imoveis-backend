import { Repository } from 'typeorm'
import { z } from 'zod'
import { Address } from '../../entities'
import { returnAddressSchema, addressSchema } from '../../schemas'

type IReturnAddressSchema = z.infer<typeof returnAddressSchema>
type IAddressSchema = z.infer<typeof addressSchema>
type IAddressesRepository = Repository<Address>

export { IReturnAddressSchema, IAddressSchema, IAddressesRepository }
