import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SetBackground } from './setbackground.directive';

@Component({
  selector: 'app-resolve-child',
  templateUrl: './resolve-child.component.html',
  styleUrls: ['./resolve-child.component.css']
})
export class ResolveChildComponent {
  @ViewChild(SetBackground)
  buttonElement!: SetBackground;

  directiveCondition = false;

  toggleText() {
    this.buttonElement.toggleClass();
  }

  backgroundColor: string | undefined = 'blue';
  color: string | undefined = 'aqua';

  constructor(private router: Router) { }

  redirectPage() {
    this.router.navigate(['parent']);
  }
}
