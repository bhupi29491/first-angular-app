import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  imports: [CardComponent, DatePipe],
  selector: 'app-task',
  styleUrl: './task.component.css',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {}

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
