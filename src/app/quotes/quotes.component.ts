import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  selectedQuote:string;
  repeatTimes:number;
  quotesArray = [
    "I can and I will",
    "Keep a part of yourself to yourself",
    "Be Good to people for no reason",
    "The important thing to remember is not to forget"
  ];

  constructor() { }

  ngOnInit() {
  }

}
