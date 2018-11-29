import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'abc-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  private id: string;

  constructor(public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

}
