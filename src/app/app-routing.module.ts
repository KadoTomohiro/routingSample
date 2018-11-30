import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParamComponent} from './param/param.component';
import {TopComponent} from './top/top.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {QueryComponent} from './query/query.component';
import {FlagComponent} from './flag/flag.component';
import {SampleGuard} from './sample.guard';
import {EmployeesComponent} from './employees/employees.component';
import {ChildComponent} from './child/child.component';
import {EmployeeResolverService} from './employee-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: 'top', pathMatch: 'full'},
  {path: 'top', component: TopComponent},
  {path: 'param', component: ParamComponent},
  {path: 'param/:id', component: ParamComponent, canActivate: [SampleGuard]},
  {path: 'query', component: QueryComponent},
  {path: 'flag', component: FlagComponent, data: {data: 'dddddd'}},
  {
    path: 'employees', component: EmployeesComponent,
    children: [
      {path: ':id', component: ChildComponent, resolve: {employee: EmployeeResolverService}}
    ]
  },
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
