import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CLEAR_TODOS } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  @select((state:IAppState)=>state.todos) todos$!:Observable<any>
  @select((state:IAppState)=>state.lastUpdate) lastUpdate$!:Observable<Date>
  constructor(private ngRedux: NgRedux<IAppState>) {
   }

  clearTodos(){
   this.ngRedux.dispatch({type:CLEAR_TODOS})
  }

}
