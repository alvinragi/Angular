import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'reverse'
})
export class CustomDatePipe implements PipeTransform {
    transform(value: string, transformType: 'small' | 'upper' = 'upper'): string {
        const reversedString = value.split('').reverse().join('');
     
        if (transformType === 'small') {
          return reversedString.toLowerCase();
        } else if (transformType === 'upper') {
          return reversedString.toUpperCase();
        }
     
        return reversedString;
      }
}
