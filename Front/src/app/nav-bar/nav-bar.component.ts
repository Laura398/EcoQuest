import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  connected!: boolean;

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
=======
  connected!: boolean;

  constructor() { }

  ngOnInit(): void {

    this.connected = false;
>>>>>>> Lucie
=======
    this.connected = false;
>>>>>>> c4778ed242478f15d961f208f7a70c4542676c54
  }

}
