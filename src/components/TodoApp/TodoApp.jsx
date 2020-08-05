import React, { useEffect } from "react"
import UseTodoState from '../../hooks/UseTodoState'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import Grid from "@material-ui/core/Grid"
import TodoList from '../TodosList/TodosList'
import TodoForm from "../TodoForm/TodoForm"


function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    const { todos, removeTodo, toggleTodo, editTodo, addTodo} = UseTodoState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

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
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default TodoApp;

