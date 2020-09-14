import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from '../../models/task';

@Component({
  selector: 'app-new-recruitment',
  templateUrl: './new-recruitment.component.html',
  styleUrls: ['../task-details/task-details.component.css', './new-recruitment.component.css']
})
export class NewRecruitmentComponent implements OnInit {
  task: Task;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.task = {

    }
  }

  onSubmit(task: Task) {
    console.warn('Recruitment created ', task);
  }

  create() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}