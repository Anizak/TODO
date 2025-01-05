import { createContext, useReducer } from "react";
import { todos } from "../services/todo.service";

const initialState = {
    todos : todos,
    showFilter : "all"
}

const toDoReducer = (state, action) => {
    if(action.type === "add"){
        return {...state, todos : [ action.payload, ...state.todos]}
    }
    if(action.type === "completed"){
        const modifiedToDo = state.todos.map((elem) => {
            if(elem.id === action.payload){
                return {...elem, completed : !elem.completed}
            }
            return elem
        })
        return {...state, todos : modifiedToDo}
    }
    if(action.type === "delete"){
        const modifiedToDo = state.todos.filter((elem)=>elem.id !== action.payload)
        return {...state, todos : modifiedToDo}
    }
    if(action.type === "save"){
        const modifiedToDo = state.todos.map((elem) =>{
            if(elem.id === action.payload.id){
                return {...elem, name : action.payload.name}
            }
            return elem;
        })
        return {...state, todos : modifiedToDo}
    }
    if(action.type === "deleteAll"){
        return {...state, todos : []}
    }
    if(action.type === "deleteCompleted"){
       const nonCompleted = state.todos.filter((elem) => !elem.completed)
       return {...state, todos : nonCompleted}
    }
    if(action.type === "all"){
        return {...state, showFilter : 'all'}
    }
    if(action.type === "allcompleted"){
        return {...state, showFilter : "completed"}
    }
    if(action.type === "inprogress"){
        return {...state, showFilter : "inprogress"}
    }

    return state
}

export const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {

    const [state, dispatch] = useReducer(toDoReducer, initialState)
    return <ToDoContext.Provider value={{state, dispatch}}>{children}</ToDoContext.Provider>
}