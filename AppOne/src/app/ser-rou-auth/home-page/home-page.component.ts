import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  firstName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Extract the username from the query parameter
    this.route.queryParamMap.subscribe((query) => {
      console.log(query);
      this.firstName = query.get('firstName') || '';
    });
  }
}
