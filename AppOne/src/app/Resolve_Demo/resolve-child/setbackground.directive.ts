import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackground {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() backgroundColor?: string;
  @Input() color?: string;

  ngOnInit(): void {
    // Set background color
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.backgroundColor);

    // Set text color
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    // directive has the most priority over inline and ngstyle   
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'red'
    );
  }

  @HostBinding('class.color_primary')
  colorPrimary = true;

  toggleClass() {
    console.log('Called');
    this.colorPrimary = !this.colorPrimary;
  }
}
