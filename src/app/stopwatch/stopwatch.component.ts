import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter:number=0
  itvl:any=0;
  start(){
    if(this.itvl==0){
      this.itvl=setInterval(()=>{
        this.counter=this.counter+1;
      },1000)
    }
  }

  stop(){
    clearInterval(this.itvl);
    this.itvl=0;
  }

  reset(){
    this.counter=0;
  }


}
