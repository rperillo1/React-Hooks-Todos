import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggle from '../../hooks/UseToggle.jsx';
import EditForm from '../EditForm/EditForm';

function Todo(props) {
    const [isEditing, toggleIsEditing] = useToggle(false)
    return (
        <ListItem>
            {isEditing ? 
            <EditForm task={props.task} id={props.id} editTodo={props.editTodo} toggleEditForm={toggleIsEditing}/> 
            : 
            <>
            <Checkbox 
            tabIndex={-1} 
            checked={props.completed} 
            onClick={() => props.toggleTodo(props.id)}>
            </Checkbox>
            <ListItemText style={{ textDecoration: props.completed ? "line-through" : ''}}>{props.task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => props.removeTodo(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo;