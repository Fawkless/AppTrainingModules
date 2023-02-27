import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  helloTasks(): string {
    return 'Hola desde el servicio de Tasks';
  }
}
