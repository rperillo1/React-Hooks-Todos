import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import Grid from "@material-ui/core/Grid"
import TodoList from '../TodosList/TodosList'
import TodoForm from "../TodoForm/TodoForm"
import { v4 as uuid } from 'uuid';


function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'clean fish tank', completed: false },
        { id: 2, task: 'wash car', completed: true },
        { id: 3, task: 'feed dog', completed: false },
    ]
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
    }

    const removeTodo = todoId => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "eggshell"
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1.5rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo}/>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default TodoApp;

