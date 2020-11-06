import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RecruitmentService } from '../../services/recruitment.service';
import { Recruitment } from '../../models/recruitment';

import { faChartArea, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Recruitment[];
  taskFiltered: Recruitment[];
  searchTerm: string;
  faChartArea = faChartArea;
  subscription: Subscription;

  constructor(
    private recruitmentService: RecruitmentService,
  ) { }

  ngOnInit() {
    // Get data from service
    this.getTaskList();

    // Sort
    this.sort('id');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTaskList() {
    this.subscription = this.recruitmentService.getRecruitmentList().subscribe(result => {
      if (result) {
        this.tasks = result;
        this.taskFiltered = result;
      }
    });
  }

  // Search box
  search(): void {
    let term = this.searchTerm;
    this.tasks = this.taskFiltered.filter(function (yo) {
      let allProperties = yo.id + yo.role + yo.position + yo.manager + yo.location + yo.status;
      if (yo.status == 'Rejected') { allProperties += 'Action Required' };
      //return allProperties.toLowerCase().indexOf(term.toLowerCase()) >= 0;
      return allProperties.toLowerCase().includes(term.toLowerCase());
    });
  }

  // Radio buttons sort
  sort(sortBy: string = 'id'): void {
    this.tasks = this.tasks.sort(
      (a, b) => {
        if (sortBy == 'id') {
          return (a[sortBy] < b[sortBy] ? 1 : a[sortBy] === b[sortBy] ? 0 : -1)
        } else {
          return (a[sortBy] > b[sortBy] ? 1 : a[sortBy] === b[sortBy] ? 0 : -1)
        }
      }
    );
  }

}