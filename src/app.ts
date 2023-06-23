import 'express-async-errors'
import express, { Application } from 'express'
import { handleErrors } from './errors'
import { CategoryRoutes, LoginRoutes, RealEstateRoute, UsersRoutes } from './routes'
import { ScheduleRoute } from './routes'

const app: Application = express()

app.use(express.json())
app.use('/users', UsersRoutes)
app.use('/login', LoginRoutes)
app.use('/categories', CategoryRoutes)
app.use('/realEstate', RealEstateRoute)
app.use('/schedules', ScheduleRoute)

app.use(handleErrors)

export default app