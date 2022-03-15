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
    const state = localStorage.getItem('state');
    const role = localStorage.getItem('role');
    if (state && state == "connected") {
      this.connected = true
    } else {
      this.connected = false;
    }
    if (role && role == "commercant") {
      this.commercant = true
    } else {
      this.commercant = false;
    }
  }

  openDialog():void{
    this.dialog.open(ValidationViewComponent,{
      width:"500px",
      height:"210px"
    }
    );
  }

}
