import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirstapiService } from '../firstapi.service';

@Component({
  selector: 'app-firstapi',
  templateUrl: './firstapi.component.html',
  styleUrls: ['./firstapi.component.css']
})
export class FirstapiComponent {
  form!: FormGroup;
  data: string = "";

  constructor(private apiService: FirstapiService) {
    
  }
  ngOnInit() {
    this.form = new FormGroup({
      data: new FormControl('', Validators.required),
    });
  }

  getAPIData() {
    this.apiService.getData().subscribe((data) => {
      console.log(data);
    });
  }

  buttonClick() {
    if (this.form.valid) {
      this.apiService.postData(this.form.value.data).subscribe((data) => {
        console.log(data);
        window.alert("success");
      });
    }
  }
}
