/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  /**
   *
   * @returns array tasks
   */
  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskTodo: CreateTaskDto): Task {
    const { title, description } = createTaskTodo;
    const task: Task = {
      id: uuidv4(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
