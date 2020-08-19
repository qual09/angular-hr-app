import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../global-contants';

@Component({
  selector: 'app-bot-bar',
  templateUrl: './bot-bar.component.html',
  styleUrls: ['./bot-bar.component.css']
})
export class BotBarComponent implements OnInit {
  companyName = GlobalConstants.companyName;
  currentYear = GlobalConstants.currentYear;

  constructor() { }

  ngOnInit() {
  }

}