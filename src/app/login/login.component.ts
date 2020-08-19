import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<HTMLElement>document.querySelector('.topbar')).style.display = 'none';
    (<HTMLElement>document.querySelector('.botbar')).style.display = 'none';
  }

  login() {
    (<HTMLElement>document.querySelector('.topbar')).style.display = 'flex';
    (<HTMLElement>document.querySelector('.botbar')).style.display = 'block';
  }

}