import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resolve-child',
  templateUrl: './resolve-child.component.html',
  styleUrls: ['./resolve-child.component.css']
})
export class ResolveChildComponent {
  constructor(private router: Router) { }
  redirectPage(){
    this.router.navigate(['parent']);
  }
}
