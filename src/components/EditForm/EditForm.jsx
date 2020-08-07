import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useFormState from "../../hooks/UseFormState"
import { DispatchContext } from '../../contexts/todos.context'


function EditForm({ task, id, toggleEditForm }) {
    const [value, handleChange, reset] = useFormState(task)
    const dispatch = useContext(DispatchContext)

    return (
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({type: "EDIT", id: id, updatedTask: value});
                reset();
                toggleEditForm()
            }}
            style={{marginLeft: "1rem", width: '50%'}}
            >
                <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal"
                fullWidth
                autoFocus
                />
            </form>
    )
}

export default EditForm;