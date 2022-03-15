import { Component, OnInit } from '@angular/core';
import { ValidationViewComponent } from '../validation-view/validation-view.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  commercant!: boolean;
  connected!: boolean;

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.commercant = true;
    this.connected = true;
  }

  openDialog():void{
    this.dialog.open(ValidationViewComponent,{
      width:"500px",
      height:"210px"
    }
    );
  }

}
