import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular from scratch',
      dueDate: '2027-01-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2027-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2027-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(userId: string, taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getDate().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasksToLocalStorage();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
