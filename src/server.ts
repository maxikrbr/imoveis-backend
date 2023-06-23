import app from './app'
import { AppDataSource } from './data-source'

AppDataSource.initialize()
	.then(() => {
		console.log('Database connected')
		app.listen(process.env.PORT || 3000, () => {
			console.log('Server online')
		})
	})
	.catch((err: any) => console.log(err))
