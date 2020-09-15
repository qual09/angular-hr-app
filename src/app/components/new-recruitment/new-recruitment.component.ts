import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { Recruitment } from '../../models/recruitment';

@Component({
  selector: 'app-new-recruitment',
  templateUrl: './new-recruitment.component.html',
  styleUrls: ['../task-details/task-details.component.css', './new-recruitment.component.css']
})
export class NewRecruitmentComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  recruitment: Recruitment;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.recruitment = {

    }
  }

  onSubmit(recruitment: Recruitment) {
    console.log('Recruitment created ', recruitment);
  }

  create() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}