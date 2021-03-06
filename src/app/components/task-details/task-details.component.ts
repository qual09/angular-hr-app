import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { RecruitmentService } from '../../services/recruitment.service';
import { Recruitment } from '../../models/recruitment';

import { faBriefcase, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  recruitmentIcon = faBriefcase;
  readonlyMode: boolean = true;
  taskId: string;
  task: Recruitment;
  taskCopy: Recruitment;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recruitmentService: RecruitmentService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('taskId');
      if (this.taskId) {
        this.getRecruitment(this.taskId);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getRecruitment(id: string) {
    this.subscription = this.recruitmentService.getRecruitment(id).subscribe(result => {
      if (result) {
        this.task = result;
      }
    });
  }

  editMode() {
    this.readonlyMode = !this.readonlyMode;
    this.taskCopy = JSON.parse(JSON.stringify(this.task));
  }

  cancelEdit() {
    this.task = this.taskCopy;
    this.taskCopy = {};
    this.readonlyMode = !this.readonlyMode;
  }

  saveEdit() {
    this.readonlyMode = !this.readonlyMode;
  }

  goBack(): void {
    this.location.back();
  }

}