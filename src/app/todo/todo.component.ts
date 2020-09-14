import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:string="";

  todos:string[]=[];
  counter=0;

  addTodo(){
    this.todos[this.counter]=this.todo;
    this.counter+=1;
    this.todo="";
  }

  removeTodo(todo){
    this.todos=this.todos.filter(i=>i!=todo)
  }

  constructor() { }

  ngOnInit() {
  }

}
