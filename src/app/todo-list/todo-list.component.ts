import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {
 @select((state:IAppState)=>state.todos) todos$!:Observable<any>
  constructor(public ngRedux:NgRedux<IAppState>) { 

  }
  addItem(input:HTMLInputElement){
    if(!input) return ;  
    this.ngRedux.dispatch({type: ADD_TODO, title:input.value})
    input.value = ' ';
  
  }

  toggleTodo(todo:any){
   this.ngRedux.dispatch({type:TOGGLE_TODO, id:todo.id})
  }

  removeTodo(todo:any){
   this.ngRedux.dispatch({type:REMOVE_TODO, id:todo.id})
  }
}
