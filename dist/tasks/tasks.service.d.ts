import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskTodo: CreateTaskDto): Task;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    deleteTask(id: string): void;
}
