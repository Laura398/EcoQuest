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
  breakpoint!: number;
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskSubscription = this.taskService.tasks$.subscribe((tasks: ITasks[]) => {
      this.tasks = tasks;
    });
    if (window.innerWidth <= 800) {
      this.breakpoint = 1;
    } else if (window.innerWidth > 800 && window.innerWidth <= 1200) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }

  onResize(event: any) {
    if (window.innerWidth <= 800) {
      this.breakpoint = 1;
    } else if (window.innerWidth > 800 && window.innerWidth <= 1200) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

}

