import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.component.css',
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  constructor(private tasksService: TasksService) {}

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.tasksService.addTask(this.userId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
    this.close.emit();
  }
}
