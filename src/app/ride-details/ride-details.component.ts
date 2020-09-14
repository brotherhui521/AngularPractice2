import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Ride } from '../ride';


@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  @Input() ride:Ride

  @Output() rideBooked: EventEmitter<boolean> =new EventEmitter<boolean>(); 

  booked: boolean=false;

  bookRide(){
    this.booked=true;
    this.rideBooked.emit(this.booked);
  }

  cancelRide(){
    this.booked=false;
    this.rideBooked.emit(this.booked);
   
  }
  constructor() { }

  ngOnInit() {
  }

}
