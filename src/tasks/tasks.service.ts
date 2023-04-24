import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { task } from "./schema/task.schema";
import * as mongoose from 'mongoose';
import { Status } from './schema/task.schema'

@Injectable()
export class TasksService {
    
    constructor(@InjectModel(task.name)
    private taskModel: mongoose.Model<task>) {}

    async findAll(){
        const tasks = await this.taskModel.find()
        return tasks;
    }

    async createTask(task: task): Promise<task>{
        const res = await this.taskModel.create(task)
        return res
    }

    async findTask(id: number): Promise<task>{
      const res = await this.taskModel.findById(id)
      return res
    }

    async deleteById(id: number): Promise<task>{
      const res = await this.taskModel.findByIdAndDelete(id)
      return res
    }
}