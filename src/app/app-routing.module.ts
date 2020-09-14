import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { JunkComponent } from './junk/junk.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { LoginComponent } from './login/login.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'books', component:BooksComponent},
  {path:'junk', component:JunkComponent},
  {path:'bookRide', component: BookRideComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'offerRide', component: OfferRideComponent},
  {path:'register',component:RegisterComponent},
  {path:"signup",component:SignupComponent},
  {path:'', redirectTo:'books', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
