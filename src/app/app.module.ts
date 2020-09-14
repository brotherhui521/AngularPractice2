import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JunkComponent } from './junk/junk.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { ExtractIdPipe } from './extract-id.pipe';
import { ExtractedFieldPipe } from './extracted-field.pipe';
import { FilterRidePipe } from './filter-ride.pipe';
import { SortRidesPipe } from './sort-rides.pipe';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { CusAttrExerciseComponent } from './cus-attr-exercise/cus-attr-exercise.component';
import { HightlightDirective } from './hightlight.directive';
import { QuotesComponent } from './quotes/quotes.component';
import { RepeatQuoteDirective } from './repeat-quote.directive';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import {HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    JunkComponent,
    StopwatchComponent,
    LoginComponent,
    TodoComponent,
    NavbarComponent,
    BookRideComponent,
    ExtractIdPipe,
    ExtractedFieldPipe,
    FilterRidePipe,
    SortRidesPipe,
    OuterComponent,
    InnerComponent,
    CusAttrExerciseComponent,
    HightlightDirective,
    QuotesComponent,
    RepeatQuoteDirective,
    RideDetailsComponent,
    BooksComponent,
    OfferRideComponent,
    RegisterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
