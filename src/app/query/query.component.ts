import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'abc-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  private q: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams
      .subscribe(q => {
        this.q = q['q']
      })
  }

}
