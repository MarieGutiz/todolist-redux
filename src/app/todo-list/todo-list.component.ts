import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {

  constructor(public todoService:TodoService) { 
    
  }

  addItem(input:HTMLInputElement){
    if(!input) return ;

    this.todoService.addTodo(input.value)

    input.value = ' ';
  }

  toggleTodo(todo:any){
   this.todoService.toggleTodo(todo);
  }

  removeTodo(todo:any){
   this.todoService.removeTodo(todo);
  }
}
