import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id)

    if (!found) {
      throw new NotFoundException()
    }

    return found
  }
  // getTaskById(id: string): Task {
  //   const foundTask = this.tasks.find((task) => task.id === id);

  //   if(!foundTask) {
  //     throw new NotFoundException()
  //   }

  //   return foundTask
  // }

  // getTaskFilter(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }

  //   return tasks;
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
    
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);
  //   return task;
  // }

  // deleteTask(id: string): string {
  //   const foundTask = this.getTaskById(id)
  //   this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);

  //   const notice = `id: ${id} has been deleted`;
  //   return notice;
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const updatedTask = this.getTaskById(id);
  //   updatedTask.status = status;
  //   return updatedTask;
  // }
}
