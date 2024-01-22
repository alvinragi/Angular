import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-parent',
  templateUrl: './route-parent.component.html',
  styleUrls: ['./route-parent.component.css']
})
export class RouteParentComponent {
  constructor(private router: Router) {}

  navigateToSample() {
    this.router.navigate(['route-parent', 'sample', '123']);
  }

  navigateToContent() {
    this.router.navigate(['route-parent', 'content']);
  }
}
