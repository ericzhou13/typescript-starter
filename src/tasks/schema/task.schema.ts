import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { version } from 'mongoose';


export enum Status{
    TODO = 'Todo',
    IN_PROGRESS = 'InProgress',
    COMPLETED = 'Completed'
}

@Schema({
    timestamps: true

})

export class task{
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    status: Status;
    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;
}

export const taskSchema = SchemaFactory.createForClass(task)