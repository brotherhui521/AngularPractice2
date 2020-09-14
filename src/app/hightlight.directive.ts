import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @Input() appHighlight:string;

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter') startHighlight(){
    this.elementRef.nativeElement.style.backgroundColor=this.appHighlight;
  }
  @HostListener('mouseleave') cancelHighlight(){
    this.elementRef.nativeElement.style.backgroundColor='white';
  }
}
