import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  greenColor="green";

  message="";
  user=new User();
  users:User[];
  validated:boolean=false;


  authorize(){
    if(this.users.filter(usr=>this.user.username && this.user.password==usr.password).length>0){
      this.message="welcome User: "+this.user.username+" password: "+this.user.password;
      this.validated=true;
      this.auth.loggedInUser=this.user.username;
      this.router.navigate(['bookRide']);
    }
    else{
      this.message="Wrong credentials";
    }
  }
  
  logoff(){
    this.validated=false;
    this.user.password="";
    this.message="";

  }
  constructor(private restService:RestService ,private router:Router, private auth:AuthGuard) { }

  ngOnInit() {
    this.restService.getUsers().subscribe(
      returns=>{
        this.users=returns;
      },
      err=>{
        
      }
    )
  }

}
