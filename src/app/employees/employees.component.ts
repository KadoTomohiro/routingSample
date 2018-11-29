import { Component, OnInit } from '@angular/core';
import {ApiService, Employee} from '../api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'abc-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.employees = this.api.getAll();
  }

}
