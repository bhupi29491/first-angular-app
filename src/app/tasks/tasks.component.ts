import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  imports: [TaskComponent, NewTaskComponent],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }
}
