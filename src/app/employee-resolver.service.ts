import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ApiService, Employee} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<Employee> {
  constructor(private api: ApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Employee> | Promise<Employee> | Employee {
    return this.api.getById(route.params['id']);
  }
}
