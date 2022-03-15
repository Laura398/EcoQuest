import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {MatDialog} from '@angular/material/dialog';
import { ValidationViewComponent } from '../validation-view/validation-view.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() taskId!: number;

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.taskId);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ValidationViewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
