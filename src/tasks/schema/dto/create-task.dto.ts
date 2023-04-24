import { Status } from '../task.schema'

export class createTaskDto{
    readonly title: string
    readonly description: string
    readonly status: Status
    readonly createdAt: Date
    readonly updatedAt: Date
}