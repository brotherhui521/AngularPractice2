import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //needs to keep tracking thsi loggedInUser
  loggedInUser: string = "";

  constructor(private router: Router) { };
  canActivate() {
    if (this.loggedInUser) return true;
    else this.router.navigate(['login']);
  }

}
