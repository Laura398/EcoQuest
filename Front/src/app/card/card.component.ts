import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() taskId!: number;
  confirmed!: boolean;
  task!: string;
  taskName!: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.task = 'Nouvelle tâche'
    this.taskName = 'Titre'
    this.confirmed = true;
  }

  switchConfirm(): void {
    this.confirmed = !this.confirmed;
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.taskId);
  }

}
