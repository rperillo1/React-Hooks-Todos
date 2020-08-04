import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import Grid from "@material-ui/core/Grid"
import TodoList from '../TodosList/TodosList'


function TodoApp() {
    const initialTodos = [
        { id:1, task: 'clean fish tank', completed: false},
        { id:2, task: 'wash car', completed: true},
        { id:3, task: 'feed dog', completed: false}
    ]
    const [todos, setTodos] = useState(initialTodos)

    return(
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "eggshell"
        }}
        elevation={0}
        >
        <AppBar color='primary' position='static' style={{ height: "64px"}}>
            <ToolBar>
                <Typography color='inherit'>TODOS WITH HOOKS</Typography>
            </ToolBar>
        </AppBar>
        <TodoList todos={todos}/>
        </Paper>
    )
}

export default TodoApp;


//todo app component (managing state)
//   - todo form (passing up values)
//   - todo list
       // - todo item

// todo items - have task, id, completed