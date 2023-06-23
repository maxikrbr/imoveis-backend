import { Repository } from 'typeorm'
import { z } from 'zod'
import { Schedule } from '../../entities'
import { returnSchedule, scheduleUsers } from '../../schemas'

type ISchedule = z.infer<typeof returnSchedule>
type IReturnSchedule = z.infer<typeof scheduleUsers>
type IScheduleRepository = Repository<Schedule>

export { ISchedule, IReturnSchedule, IScheduleRepository }
