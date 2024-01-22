// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  login() {
    // Pass the value of the 'name' control as a query parameter
    this.router.navigate(['home'], {
      queryParams: {
        username: this.form.get('name')?.value,
      },
    });
  }
}