import { getRounds, hashSync } from 'bcryptjs'
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Schedule } from '../schedules/schedules.entities'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('increment')
	id: number
	@Column({
		type: 'varchar',
		unique: true,
		length: 45,
	})
	email: string

	@Column({ type: 'varchar', length: 45 })
	name: string

	@Column({
		type: 'boolean',
		default: false,
	})
	admin: boolean

	@Column({ type: 'varchar', length: 120 })
	password: string

	@CreateDateColumn({ type: 'date' })
	createdAt: string

	@UpdateDateColumn({ type: 'date' })
	updatedAt: string

	@DeleteDateColumn({ type: 'date' })
	deletedAt: string

	@OneToMany(() => Schedule, (schedules) => schedules.user)
	schedules: Schedule[]

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		const isEncript = getRounds(this.password)
		if (!isEncript) {
			this.password = hashSync(this.password, 10)
		}
	}
}
