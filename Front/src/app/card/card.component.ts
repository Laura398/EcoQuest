import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ValidationViewComponent } from '../validation-view/validation-view.component';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.task = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    this.taskName = 'Nom de la tâche'
    this.confirmed = true;
  }

  switchConfirm(): void {
    this.confirmed = !this.confirmed;
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.taskId);
  }

  openDialog():void{
    this.dialog.open(ValidationViewComponent,{
      width:"500px",
      height:"220px"
    }
    );
  }
}
