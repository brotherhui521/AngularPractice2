import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './login/user';
import { Ride } from './ride';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  usersUrl="http://localhost:4200/assets/users.json";
  ridesUrl="http://localhost:4200/assets/rides.json";

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }
  
  getRides():Observable<Ride[]>{
    return this.http.get<Ride[]>(this.ridesUrl);
  }

  constructor(private http:HttpClient) { }
}
