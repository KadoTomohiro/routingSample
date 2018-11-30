import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'abc-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {
  frag: string;
  data: Data;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.fragment.subscribe(frag => {
      this.frag = frag;
    });

    this.router.data.subscribe(data => {
      this.data = data;
    });
  }

}
