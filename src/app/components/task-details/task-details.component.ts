import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Recruitment } from '../../models/recruitment';
import { RECRUITMENTS } from '../../mocks/mock-recruitments';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  readonlyMode: boolean = true;
  taskId: string;
  task: Recruitment;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('taskId');
      this.task = RECRUITMENTS[+this.taskId];
    });
  }

  editMode() {
    this.readonlyMode = !this.readonlyMode;
  }

  goBack(): void {
    this.location.back();
  }

}