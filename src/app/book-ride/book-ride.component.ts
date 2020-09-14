import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride';

import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  constructor(private restService:RestService, private router:Router) { }

  ngOnInit() {
   this.restService.getRides().subscribe(
     returns=>{
       this.rideDetails=returns;
     }
     ,
     err=>{

     }
   )
  }
  showTable: boolean = false;

  filterBy="all";
  toggleTable() {
    this.showTable = !this.showTable;
  }

  selectedRide:Ride;
  rideDetails:Ride[] ;


  //handle event from inner app
  handleBookRide(booked){
    this.showTable=!booked;
  }

  goToOfferRide(){
    this.router.navigate(['/offerRide']);
  }
  

}
