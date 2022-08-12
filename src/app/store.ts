import { tassign } from "tassign";
import { ADD_TODO, CLEAR_TODOS, REMOVE_TODO, TOGGLE_TODO } from "./actions";

export interface IAppState{
    todos:any[];
    lastUpdate:Date
}

export const INITIAL_STATE:IAppState ={
    todos:[],
    lastUpdate:useDate([])
}

export function rootReducer(state:IAppState | undefined, action:any):IAppState {
    switch (action.type) {
        case ADD_TODO:
            let new_todo ={ id: state!.todos.length +1, title: action.title}

            return tassign(state!,{
                todos: state!.todos.concat(new_todo),
                lastUpdate: new Date()
            })
    
        case TOGGLE_TODO:
              let todo= state!.todos.find(t=>t.id===action.id)
              let index = state!.todos.indexOf(todo);
           
              return tassign(state! ,{ 
                todos :[
                    ...state!.todos.slice(0, index),
                    tassign(todo, {isCompleted: !todo.isCompleted}),
                   
                    ...state!.todos.slice(index+1)
                   
                ],
                lastUpdate: new Date()
              });
        case REMOVE_TODO:
            return tassign(state!, {
               todos : state!.todos.filter(td=> td.id !== action.id),
               lastUpdate: new Date()
            });
        case CLEAR_TODOS:
            return tassign(state!,{
                todos :useState([]) ,
                lastUpdate: new Date()
            })
    }
    return state!;
}

function useState(arg0: never[]): any {
    return [];
}
function useDate(arg0: never[]): any {
    return null;
}