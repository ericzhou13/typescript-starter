import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { taskSchema } from './schema/task.schema';
@Module({
    imports: [MongooseModule.forFeature([{name: 'task', schema: taskSchema}])],
    controllers: [TasksController],
    providers: [TasksService]
})

export class TasksModule {}