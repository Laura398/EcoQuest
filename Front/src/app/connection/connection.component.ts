import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  commercant!: boolean;
  mail1!: string;
  mail2!: string;
  password1!: string;
  password2!: string;
  check!: boolean;
  role!: string;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit(): void {
    this.mail1 = '';
    this.password1 = '';
    this.mail2 = '';
    this.password2 = '';
    this.check = false;
    this.role = "client";
  }

  isChecked(): void {
    if (this.check) {
      this.check = false;
      this.role = 'client';
    } else {
      this.check = true;
      this.role = 'commercant';
    }
  }

  register(): void {
    if (this.mail1 != '' && this.password1 != '') {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.mail1)) {
        // const registerInfos = {
        //   mail: this.mail1,
        //   password: this.password1,
        //   commercant: this.check
        // }
        localStorage.setItem('mail', this.mail1);
        localStorage.setItem('password', this.password1);
        localStorage.setItem('role', this.role);
        this.ngOnInit();
      } else {
        console.log("email not okay")
      }
    } else {
      console.log("missing data")
    }
  }

  connection(): void {
    if (this.mail2 != '' && this.password2 != '') {
      console.log(localStorage);
      const mail = localStorage.getItem('mail');
      const password = localStorage.getItem('password');
      const role = localStorage.getItem('role');
      console.log(mail, password, role);
      if (mail && password && role) {
        if (mail == this.mail2 && password == this.password2) {
          localStorage.clear();
          localStorage.setItem('mail', mail);
          localStorage.setItem('password', password);
          localStorage.setItem('role', role);
          localStorage.setItem('state', "connected");
        } else {
          console.log("mail or password wrong")
        }
      } else {
        console.log("user not registered")
      }
    } else {
      console.log("missing data")
    }
    location.reload();
  }
}
