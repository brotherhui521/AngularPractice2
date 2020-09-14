import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap,retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8765/books";

  getAllBooks():Observable<Book[]>{  //returns an obs. nothing happens until some subscribe
    return this.http.get<Book[]>(this.baseUrl).pipe(
      retry(3),
      tap(books=>console.log(books)),
      catchError(err=>{
        console.log(err);
        throw err;
      })
    );
    //pipe is a function, no need ; in params
  }
  
  getBookById(id:number){

  }
  //needs to create a BookDTO class by ng g class Book
  addBook(book:Book){
    return this.http.post<Book>(this.baseUrl,book).pipe(
      tap(book=>console.log("Book created is: "+book)),
      catchError(err=>{
        console.log(err);
        throw err;
      })
    )

  }

  updateBook(book:Book){

  }

  deleteBook(id:number){
    return this.http.delete<Book>(this.baseUrl+"/"+id).pipe(
      catchError(err=>{
        console.log(err);
        throw err;
      })
    );
  }
}
