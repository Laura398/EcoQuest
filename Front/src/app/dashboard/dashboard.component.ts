import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITasks } from '../itasks';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // tasks!: ITasks[];
  tasks!: ITasks[];
  taskSubscription!: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskSubscription = this.taskService.tasks$.subscribe((tasks: ITasks[]) => {
      this.tasks = tasks;
    })
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }

}
