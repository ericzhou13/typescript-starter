import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller'
import {TasksService} from './tasks.service'
import { Status } from './schema/task.schema';
import { task } from './schema/task.schema';
import { ObjectId } from 'mongodb';

describe('TasksController', () => {
    let controller: TasksController;
    const mockTasksService = {
        createTask: jest.fn(dto =>{
            return{
                ...dto
            }
        }),
        findTask: jest.fn(id =>{
            return{
                task
            } 
        }),
        deleteById: jest.fn(id =>{
            return{
                task
            } 
        }),
    }

    beforeEach(async () =>{
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TasksController],
            providers: [TasksService]
        }).overrideProvider(TasksService).useValue(mockTasksService).compile()
        controller = module.get<TasksController>(TasksController);
    });

    it('should be defined', () =>{
        expect(controller).toBeDefined();
    })

    it('should create a task', () =>{
        expect(controller.createTask({
            title: "Test",
            description: "test description",
            status: Status.TODO,
            createdAt: new Date(),
            updatedAt: new Date()
        })).toEqual(expect.any(Promise<task>))
    })

    it('should find a task', () => {
        expect(controller.findTask(1)).toEqual(expect.any(Promise<task>))
    })

    it('should delete a task', () => {
        expect(controller.deleteTask(1)).toEqual(expect.any(Promise<task>))
    })
})