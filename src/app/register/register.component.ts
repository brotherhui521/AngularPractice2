import { Component, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  member: Member=new Member();

  ngOnInit() {
  }

  register(member:Member){
    console.log(member);
  }
}
