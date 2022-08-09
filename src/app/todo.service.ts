import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:any[]=[]
  public todoAdded = new EventEmitter();
  public todoRemoved = new EventEmitter();
  public todoToggled = new EventEmitter();
  public todoCleared = new EventEmitter();


 addTodo(title:String){
   let todo  = {id: this.todos.length+1, title:title};
   this.todos.push(todo);
   this.todoAdded.emit(todo);
  }
  toggleTodo(todo:any){
    todo.isCompleted = !todo.isComplete;
    this.todoToggled.emit(todo);
  }

 removeTodo(todo: any){
  let index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
  this.todoRemoved.emit(todo);
 }

 clearTodos(){
   this.todos =[];
   this.todoCleared.emit();
 }

 getTodos(){
  return this.todos;

 }
}
