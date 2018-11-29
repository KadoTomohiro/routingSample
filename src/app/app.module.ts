import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParamComponent } from './param/param.component';
import { TopComponent } from './top/top.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import { QueryComponent } from './query/query.component';
import { FlagComponent } from './flag/flag.component';
import { EmployeesComponent } from './employees/employees.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParamComponent,
    TopComponent,
    NotFoundComponent,
    QueryComponent,
    FlagComponent,
    EmployeesComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
