import { Component } from '@angular/core';

@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeParam: string;
  query: string;
  fragment: string;

}
