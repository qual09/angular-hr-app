import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalConstants } from '../../global-contants';

import {
  faPlusCircle,
  faChartArea,
  faChartLine,
  faUserLock,
  faLongArrowAltUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  applicationName = GlobalConstants.applicationName;

  faPlusCircle = faPlusCircle;
  faChartArea = faChartArea;
  faChartLine = faChartLine;
  faUserLock = faUserLock;
  faLongArrowAltUp = faLongArrowAltUp;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logout() {
    //console.log('Logged Out!')
  }

  new() {
    //console.log('New!')
  }

}