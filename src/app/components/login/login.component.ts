import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = faChalkboardTeacher;
  account: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    // Mock
    this.account = {
      id: "demo",
      password: 'demo',
      authdata: ''
    }
  }

  login() {
    this.authenticationService.login(this.account.id, this.account.password).subscribe(result => {
      if (result.authdata) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Something went wrong.');
      }
    });
  }

}