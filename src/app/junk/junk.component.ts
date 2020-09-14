import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-junk',
  templateUrl: './junk.component.html',
  styleUrls: ['./junk.component.css']
})
export class JunkComponent implements OnInit {
  capturedInput="";
  secondVal="";

  books=["life of pi","tiger","lalaland"];
  
  constructor(private router:Router) { }

  goToBooks(){
    this.router.navigate(['/books']);
  }

  ngOnInit() {
  }

}
