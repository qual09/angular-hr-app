import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recruitment',
  templateUrl: './new-recruitment.component.html',
  styleUrls: ['./new-recruitment.component.css']
})
export class NewRecruitmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(briefingData) {
    console.warn('Recruitment created ', briefingData);
  }

  create() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"variables":{"formData":{"value":{"briefingForm":{"openPosition":"Pega Developer","experienceLevel":"","minSalary":100,"maxSalary":150,"contractType":"","location":[],"remoteWork":"","lineManager":"John Wayne","projectOverview":"","projectDuration":"","projectPhase":"","team":"","projectMethodology":"","jobDescription":"","techStack":[],"softSkills":[],"languages":[]},"candidates":[],"hrApproval":false,"status":"New"},"valueInfo":{"objectTypeName":"com.lingaro.firstApp.model.hr.OpenPosition","serializationDataFormat":"application/json"}}}});

    let requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/rest/process-definition/key/Recruitment/start", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  alert(){
    //alert('Create not implemented!');
    console.log('Created!');
  }

}