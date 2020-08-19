import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BotBarComponent } from './bot-bar/bot-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AccountComponent } from './account/account.component';
import { ReportsComponent } from './reports/reports.component';
import { NewRecruitmentComponent } from './new-recruitment/new-recruitment.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ 
    BrowserModule, FormsModule, HttpClientModule, 
    RouterModule.forRoot([
      { path: '', component: TaskListComponent },
      { path: 'dashboard', component: TaskListComponent },
      { path: 'newRecruitment', component: NewRecruitmentComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'login', component: LoginComponent },
      { path: 'task/:taskId', component: TaskDetailsComponent },
    ]),
  ],
  declarations: [ 
    AppComponent, TopBarComponent, BotBarComponent, TaskListComponent, AccountComponent, ReportsComponent, NewRecruitmentComponent, TaskDetailsComponent, LoginComponent, 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
