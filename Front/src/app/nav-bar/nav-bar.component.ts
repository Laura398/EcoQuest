import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  connected!: boolean;
  commercant!: boolean;

  constructor() { }

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

  logout(): void {
    localStorage.clear();
    location.reload();
  }

}
