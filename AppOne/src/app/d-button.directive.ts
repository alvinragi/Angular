// d-button.directive.ts
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDButton]'
})
export class DButtonDirective {
  @Input() set appDButton(condition: boolean) {
    this.setButtonState(condition);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private setButtonState(condition: boolean): void {
    const button = this.el.nativeElement;

    if (condition) {
      this.renderer.addClass(button, 'active-button');
      this.renderer.removeClass(button, 'inactive-button');
    } else {
      this.renderer.addClass(button, 'inactive-button');
      this.renderer.removeClass(button, 'active-button');
    }
  }
}
