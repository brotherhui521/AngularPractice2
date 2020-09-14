import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeatQuote]'
})
export class RepeatQuoteDirective {

  @Input() set appRepeatQuote(times:number){
    this.viewContainer.clear();

    for(let i=0; i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
    
  }
  constructor( private templateRef:TemplateRef<any>, private viewContainer:ViewContainerRef) { }

}
