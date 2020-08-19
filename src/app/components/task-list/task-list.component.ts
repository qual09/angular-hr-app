import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tasks } from '../../mocks/mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = tasks;
  taskFiltered = tasks;
  processes;
  searchTerm;
  sortList;
  interval;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Default sort tasks
    this.sortList = 'id';
    this.tasks = this.tasks.sort(
      (a, b) => a.id < b.id ? 1 : a.id === b.id ? 0 : -1
    );

    this.getProcesses();
    // this.interval = setInterval(() => { 
    //     this.getProcesses(); 
    // }, 5000);
    //alert('yo');

  }

  // Get list data
  getProcesses() {
    this.http.get('http://localhost:8080/rest/task').subscribe(data => {
      this.processes = data;
    })
  }

  ngOnDestroy() {
    this.processes = null;
  }

  // Search box
  search(): void {
    let term = this.searchTerm;
    this.tasks = this.taskFiltered.filter(function (yo) {
      let allProperties = yo.id + yo.lineManager + yo.location + yo.status + yo.position + yo.role;
      if (yo.status == 'Rejected') { allProperties += 'Action Required' };
      //return allProperties.toLowerCase().indexOf(term.toLowerCase()) >= 0;
      return allProperties.toLowerCase().includes(term.toLowerCase());
    });
    console.warn(this.tasks);
    console.warn(this.taskFiltered);
  }

  // Radio buttons sort
  sort(): void {
    let sort = this.sortList;
    if (sort == 'id') {
      this.tasks = this.tasks.sort(
        (a, b) => a.id < b.id ? 1 : a.id === b.id ? 0 : -1
      ); console.warn(this.tasks);
    }
    if (sort == 'role') {
      this.tasks = this.tasks.sort(
        (a, b) => a.role > b.role ? 1 : a.role === b.role ? 0 : -1
      ); console.warn(this.tasks);
    }
    if (sort == 'manager') {
      this.tasks = this.tasks.sort(
        (a, b) => a.lineManager > b.lineManager ? 1 : a.lineManager === b.lineManager ? 0 : -1
      ); console.warn(this.tasks);
    }
    if (sort == 'status') {
      this.tasks = this.tasks.sort(
        (a, b) => a.status > b.status ? 1 : a.status === b.status ? 0 : -1
      ); console.warn(this.tasks);
    }
  }
}