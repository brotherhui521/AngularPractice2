import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() innerVariable;
  @Input() timeFromOuter:string;

  @Output() innerEvent: EventEmitter<string> =new EventEmitter<string>();
  
  

  constructor() { }

  //execute when the component get rendered
  ngOnInit() {
    setInterval(()=>this.innerEvent.emit(new Date().toString()),3000);
    //eveery 3 seconds emit an event which is the date string of that moment
  }

}
