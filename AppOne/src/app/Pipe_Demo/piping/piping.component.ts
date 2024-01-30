import { Component } from '@angular/core';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})
export class PipingComponent {
  originalString: string = '';
  reversedString: string = '';
  selectedTransformType: 'small' | 'upper' = 'upper';
 
  onSubmit() {
    this.reversedString = this.originalString;
  }
}
