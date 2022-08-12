/**
 * @author MarieGutiz
 * @create date 2022-08-09 23:23:58
 * @modify date 2022-08-09 23:23:58
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { createLogger } from 'redux-logger';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(store: NgRedux<IAppState>,
    devTools: DevToolsExtension
  ) {
    store.configureStore(
      rootReducer,
        INITIAL_STATE,
        [ createLogger()],
        devTools.isEnabled() ? [ devTools.enhancer() ] : []
        );
  }
 }
