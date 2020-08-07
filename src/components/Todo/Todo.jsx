import React, { useContext } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggle from '../../hooks/UseToggle.jsx';
import EditForm from '../EditForm/EditForm';
import { TodosContext } from "../../contexts/todos.context"

function Todo({id, task, completed}) {
    const { dispatch } = useContext(TodosContext)
    const [isEditing, toggleIsEditing] = useToggle(false)
    return (
        <ListItem>
            {isEditing ? 
            <EditForm task={task} id={id} toggleEditForm={toggleIsEditing}/> 
            : 
            <>
            <Checkbox 
            tabIndex={-1} 
            checked={completed} 
            onClick={() => dispatch({type: "TOGGLE", id: id})}>
            </Checkbox>
            <ListItemText style={{ textDecoration: completed ? "line-through" : ''}}>{task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => dispatch({type: "REMOVE", id: id})}>
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