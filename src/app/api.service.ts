import { Injectable } from '@angular/core';
import {from, Observable, of, timer} from 'rxjs';
import {delay, filter, map, switchMap, tap, timeout} from 'rxjs/operators';

export interface Employee {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _employees: Employee[] = [
    {id: '1', name: '山田太郎'},
    {id: '2', name: '佐藤花子'}
  ];
  constructor() { }

  getAll(): Observable<Employee[]> {
    return of(this._employees);
  }
  // 通信に2秒くらいかかるid検索のAPI
  getById(id: string): Observable<Employee> {
    console.log(id);
    return from(this._employees)
      .pipe(
        filter(emp => emp.id === id),
        delay(2000)
      );
  }
}
