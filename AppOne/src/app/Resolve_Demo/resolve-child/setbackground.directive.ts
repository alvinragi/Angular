import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appSetBackground], [appPropertyBind]'
})
export class SetBackground{
    constructor(private element: ElementRef, private renderer: Renderer2){}

    @Input() backgroundColor?: string ;
    @Input() color?: String;

    
ngOnInit():void{    
    // Set background color
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.backgroundColor);

    // Set text color
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    // directive have the most priority over inline and ngstyle   
}
    @HostListener('mouseout')
    onMouseLeave(){
        this.renderer.setStyle(
            this.element.nativeElement,
            'backgroundColor',
            'red'
        );
    
}
}