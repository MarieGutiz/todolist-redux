import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
 todos!:number;
 lastUpdate!:Date;
  constructor(private todoService: TodoService) { 
    this.todos = this.todoService.getTodos.length;
    
    this.todoService.todoAdded.subscribe(()=>{
      this.todos++;
      this.lastUpdate = new Date();
    });

    this.todoService.todoRemoved.subscribe(() =>{
      this.todos--;
      this.lastUpdate = new Date();
    });

    this.todoService.todoToggled.subscribe(()=>{
      this.lastUpdate = new Date();
    });

    this.todoService.todoCleared.subscribe(() =>{
      this.todos =0;
      this.lastUpdate = new Date();
    })

  }

  clearTodos(){
    this.todoService.clearTodos();
  }

}
