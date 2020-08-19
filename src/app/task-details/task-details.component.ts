import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { tasks } from '../mock-tasks';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task;
  processId = 'yo';
  variables;
  test = 'test';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('taskId'); //For Camunda
      this.task = tasks[+params.get('taskId')]; //For Mock
    });
    if(!this.task){
      this.getVariables();
    }
  }

  getVariables() {
    let url = 'http://localhost:8080/rest/task/' + this.processId + '/variables';
    console.log('######### '+url);
    this.http.get(url).subscribe(data =>{
      this.variables = data;
    })
  }

  // getVars() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({});

  //   var requestOptions: RequestInit = {
  //     method: 'GET',
  //     headers: myHeaders
  //   };

  //   let url = 'http://localhost:8080/rest/task/' + this.processId + '/variables';
  //   fetch(url, requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .then((result)=>this.variables=result)
  //     .catch(error => console.log('error', error));
  //   console.log('############## ' + this.variables);//QQQ
  // }

  alert(){
    alert('Edit not implemented! ' + this.processId);
  }

}