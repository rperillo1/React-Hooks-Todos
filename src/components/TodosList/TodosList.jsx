import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from '../Todo/Todo'

function TodosList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo =>
                    <>
                        <Todo 
                        task={todo.task} 
                        id={todo.id} 
                        key={todo.id} 
                        completed={todo.completed}
                        removeTodo={props.removeTodo}
                        >
                        </Todo>
                        <Divider />
                    </>
                )}
            </List>
        </Paper>
    )
}

export default TodosList;