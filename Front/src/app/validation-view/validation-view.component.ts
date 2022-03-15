import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-view',
  templateUrl: './validation-view.component.html',
  styleUrls: ['./validation-view.component.scss']
})
export class ValidationViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entierAleatoire(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  entier = this.entierAleatoire(10000, 99999);
}

