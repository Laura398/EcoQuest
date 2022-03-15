import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITasks } from './itasks';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: ITasks[] = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ];

  public tasks$: BehaviorSubject<ITasks[]>;

  constructor() {
    this.tasks$ = new BehaviorSubject<ITasks[]>(this.tasks);
  }

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex((x) => x.id === taskId);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.tasks$.next(this.tasks);
    }
  }

  addTask(): void {
    const id = this.tasks.length === 0 ? 1 :
      Math.max.apply(Math, this.tasks.map((task) => {
        return task.id;
      })) + 1;
    this.tasks.push({
      id
    });
    console.log(this.tasks)
    this.tasks$.next(this.tasks);
  }
}