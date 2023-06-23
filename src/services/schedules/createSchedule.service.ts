import { AppDataSource } from '../../data-source'
import { RealEstate, Schedule, User } from '../../entities'
import { AppError } from '../../errors'
import { ISchedule, IRealEstateRepository, IScheduleRepository } from '../../interfaces'

const createSchedule = async (data: ISchedule, user: User): Promise<string> => {
	const scheduleRepository: IScheduleRepository = AppDataSource.getRepository(Schedule)
	const estateRepository: IRealEstateRepository = AppDataSource.getRepository(RealEstate)

	const newDate = new Date(data.date)
	const hour = data.hour.slice(0, 2)

	if (newDate.getDay() === 0 || newDate.getDay() === 6) {
		throw new AppError('Invalid date, work days are monday to friday', 400)
	}

	if (Number(hour) < 8 || Number(hour) > 18) {
		throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
	}

	const realEstate: RealEstate | null = await estateRepository.findOneBy({
		id: data.realEstateId,
	})

	if (!realEstate) {
		throw new AppError('RealEstate not found', 404)
	}

	const newSchedule = {
		date: data.date,
		hour: data.hour,
		realEstate: realEstate,
		user: user,
	}

	const schedule: Schedule = scheduleRepository.create(newSchedule)

	const checkScheduleForUser: Schedule | null = await scheduleRepository
		.createQueryBuilder('schedule')
		.where('schedule.userId = :id', { id: schedule.user.id })
		.andWhere('schedule.date = :date', { date: schedule.date })
		.andWhere('schedule.hour = :hour', { hour: schedule.hour })
		.getOne()

	if (checkScheduleForUser) {
		throw new AppError('User schedule to this real estate at this date and time already exists', 409)
	}

	const checkSchedule: Schedule | null = await scheduleRepository
		.createQueryBuilder('schedule')
		.where('schedule.realEstateId = :id', { id: schedule.realEstate.id })
		.andWhere('schedule.date = :date', { date: schedule.date })
		.andWhere('schedule.hour = :hour', { hour: schedule.hour })
		.getOne()

	if (checkSchedule) {
		throw new AppError('Schedule to this real estate at this date and time already exists', 409)
	}

	await scheduleRepository.save(schedule)

	return 'Schedule created'
}

export default createSchedule
