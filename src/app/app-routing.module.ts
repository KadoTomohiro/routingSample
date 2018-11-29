import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParamComponent} from './param/param.component';
import {TopComponent} from './top/top.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {QueryComponent} from './query/query.component';
import {FlagComponent} from './flag/flag.component';
import {SampleGuard} from './sample.guard';

const routes: Routes = [
  {path: '', redirectTo: 'top', pathMatch: 'full'},
  {path: 'top', component: TopComponent},
  {path: 'param', component: ParamComponent},
  {path: 'param/:id', component: ParamComponent, canActivate: [SampleGuard]},
  {path: 'query', component: QueryComponent},
  {path: 'flag', component: FlagComponent, data: {data: 'dddddd'}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
