import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from '../Todo/Todo'
import { TodosContext } from "../../contexts/todos.context"

function TodosList() {
    const todos = useContext(TodosContext)

    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) =>
                        <React.Fragment key={i}>
                            <Todo
                                {...todo}
                                key={todo.id}
                            >
                            </Todo>
                            {i < (todos.length - 1) && <Divider />}
                            </React.Fragment>
                    )}
                </List>
            </Paper>
        )
    return null;
}

export default TodosList;