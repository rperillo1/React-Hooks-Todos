import { useState } from "react";
import { v4 as uuid } from 'uuid';


export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos)
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            setTodos(todos.filter(todo => todo.id !== todoId))
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodos)
        },
        editTodo: (todoId, updatedTask) => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: updatedTask } : todo)
            setTodos(updatedTodos)
        }    
    }
}
