import { Controller, Post, Body, Get, Param, Delete} from "@nestjs/common";
import { TasksService } from './tasks.service'
import {NotFoundException} from '@nestjs/common'
import { createTaskDto } from "./schema/dto/create-task.dto";
import { task } from "./schema/task.schema";

@Controller('tasks')
export class TasksController{
    constructor(private readonly tasksService: TasksService){}

    @Get()
    async getAllTasks(){
        return this.tasksService.findAll()
    }

    @Post()
    async createTask(
        @Body()
        task: createTaskDto
    ): Promise<task>{
        return this.tasksService.createTask(task)
    }

    @Get(':id')
    async findTask(@Param('id') id: number){
        const task = this.tasksService.findTask(id)
        if(!task){
            throw new NotFoundException("TASK NOT FOUND");
        }
        else{
            return task
        }
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: number){
        const task = this.tasksService.deleteById(id);
        if(!task){
            throw new NotFoundException("TASK NOT FOUND");
        }
        else{
            return task
        }
    }
}