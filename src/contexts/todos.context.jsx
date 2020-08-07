import React, { createContext } from "react";
import useTodosState from '../hooks/UseTodoState'

const defaultTodos = [
    { id:1, task: 'Walk the goats', completed: false },
    { id:2, task: 'feed Gary', completed: true }
]

export const TodosContext = createContext()


export function TodosProvider(props) {
    const todosStuff= useTodosState(defaultTodos)
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}
