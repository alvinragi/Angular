import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {
  constructor(private router: Router, private l_service: LoginService) {}
  form!: FormGroup; // exclamation to remove the error and remove strict

  
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      })
     
    };
    login() {      
      // Pass the value of the 'name' control as a query parameter
      const inputName:string = this.form.get('firstName')?.value;
      const inputPass:string = this.form.get('password')?.value;

      const inputUser: { inputName: string, inputPass: string } = {inputName,inputPass};
      
      const trueMember:Boolean = this.l_service.checkUser(inputUser);
      if(trueMember){        
      this.router.navigate(['home'], {
        queryParams: {
          firstName: this.form.get('firstName')?.value,
        },
      });
    }
    else{
      window.alert("Not a valid user");
    }
    }
  }
