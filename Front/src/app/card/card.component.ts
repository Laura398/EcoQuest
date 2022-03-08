import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() taskId!: number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.taskId);
  }

}
