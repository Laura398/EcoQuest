import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protips',
  templateUrl: './protips.component.html',
  styleUrls: ['./protips.component.scss']
})
export class ProtipsComponent implements OnInit {

  title!: string
  constructor() { }

  ngOnInit(): void {
    this.title = 'Protips'
  }

}
