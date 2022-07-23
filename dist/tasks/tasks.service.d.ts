import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(createTaskTodo: CreateTaskDto): Task;
}
