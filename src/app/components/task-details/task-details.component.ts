import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { tasks } from '../../mocks/mock-tasks';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  readonlyMode: boolean = true;
  task: Task;
  taskId: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('taskId'); //For Camunda
      this.task = tasks[+params.get('taskId')]; //For Mock
    });

  }

  editMode() {
    this.readonlyMode = !this.readonlyMode;
  }

  goBack(): void {
    this.location.back();
  }

}