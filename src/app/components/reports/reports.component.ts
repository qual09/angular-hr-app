import { Component, OnInit } from '@angular/core';

import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['../task-details/task-details.component.css', './reports.component.css']
})
export class ReportsComponent implements OnInit {
  faChartLine = faChartLine;

  constructor() { }

  ngOnInit() {
  }

  alert() {
    alert('Reports not implemented!');
  }

}