import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor() {}
  form!: FormGroup; // exclamation to remove the error and remove strict

  
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  buttonClick() {
    // Handle button click logic here
    console.log('submitted!', this.form);
  }
}
