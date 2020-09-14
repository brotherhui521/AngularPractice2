import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  books=[];
  errorMessage="";
  successMessage="";
  newBook:Book=new Book();

  //needs to use BookService to call the http methods using httpClient
  constructor(private bookService: BookService) { }
  //initially empty, later when add book needs to add to the array
  

  ngOnInit():void {
    this.bookService.getAllBooks().subscribe(
      bks=>{
        this.books=bks;
        this.errorMessage="";
      },
      err=>{
        this.books=[];
        this.errorMessage="No Books could be downloaded from the server"
      }
    )
  }

  addBook(){
    this.bookService.addBook(this.newBook).subscribe(
      bookCreated=>{
        console.log(bookCreated.id);
        this.books.push(bookCreated);
        this.successMessage="Book added!";
        this.errorMessage="";
      },
      err=>{
        this.successMessage="";
        this.errorMessage="Book could not be added"+err;
      }
    )
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe(
      bk=>{
        this.books=this.books.filter(item=>item.id!=bk.id);
        console.log(bk);
        this.successMessage="deleted!";
        this.errorMessage=""; 
      },
      err=>{
        this.successMessage="";
        this.errorMessage="Book could not be deleted";
      }
    )
  }

}
