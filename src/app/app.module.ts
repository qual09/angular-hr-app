import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BotBarComponent } from './components/bot-bar/bot-bar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AccountComponent } from './components/account/account.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NewRecruitmentComponent } from './components/new-recruitment/new-recruitment.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { LoginComponent } from './components/login/login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BotBarComponent,
    TaskListComponent,
    AccountComponent,
    ReportsComponent,
    NewRecruitmentComponent,
    TaskDetailsComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
