/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
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

  /**
   *
   * @param filterDto
   * @returns
   */
  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }

    return tasks;
  }

  /**
   *
   * @param id of task
   * @returns task object
   */
  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      // throw new NotFoundException(); // return {"statusCode": 400, "error": "Not Found"}
      throw new NotFoundException(`Task with ID ${id} not found!`); // return {"statusCode": 400, "error": "Not Found", "message" : "Task with ID dummyId not found!"}
    }
    return found;
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

  /**
   *
   * @param id of task you want to update status
   */
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  /**
   *
   * @param id of task you want to delete
   */
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
