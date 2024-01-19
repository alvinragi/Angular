import { Component } from '@angular/core';
import { FirstapiService } from '../firstapi.service';
// import httpclientmodule in app.module.ts in first import place 
// and ngmodule imports list.
@Component({
  selector: 'app-firstapi',
  templateUrl: './firstapi.component.html',
  styleUrls: ['./firstapi.component.css']
})
export class FirstapiComponent {
  constructor(private apiService:FirstapiService){}
  
getAPIData(){
  this.apiService.getData().subscribe((data) => {
    console.log(data);
  })
}
}
