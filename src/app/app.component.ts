import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor (
      private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit () {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.title = queryParams.title || this.title;
    });
  }
}
