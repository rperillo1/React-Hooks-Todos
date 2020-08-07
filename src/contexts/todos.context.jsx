import React, { createContext, useReducer } from "react";
import useTodosState from '../hooks/UseTodoState';
import todoReducer from '../reducers/todo.reducer';


const defaultTodos = [
    { id:1, task: 'Walk the goats', completed: false },
    { id:2, task: 'feed Gary', completed: true }
]

export const TodosContext = createContext()


export function TodosProvider(props) {
    const [ todos, dispatch ] = useReducer(todoReducer, defaultTodos)
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}
