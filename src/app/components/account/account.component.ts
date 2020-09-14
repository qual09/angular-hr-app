import { Component, OnInit } from '@angular/core';

import { faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../task-details/task-details.component.css', './account.component.css']
})
export class AccountComponent implements OnInit {
  faUserLock = faUserLock;
  readonlyMode: boolean = true;
  account: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  };

  constructor() { }

  ngOnInit() {
    this.account = {
      id: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'jd@company.com',
      password: 'jdoe',
    }
  }

  editMode() {
    this.readonlyMode = !this.readonlyMode;
  }

}