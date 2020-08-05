import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";


function Todo(props) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={props.completed}></Checkbox>
            <ListItemText style={{ textDecoration: props.completed ? "line-through" : ''}}>{props.task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="Edit">
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;