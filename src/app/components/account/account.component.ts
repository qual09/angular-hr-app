import { Component, OnInit } from '@angular/core';

import { faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../task-details/task-details.component.css', './account.component.css']
})
export class AccountComponent implements OnInit {
  faUserLock = faUserLock;

  constructor() { }

  ngOnInit() {
  }

  alert() {
    alert('Edit not implemented!');
  }

}