import React from "react";
import TextField from "@material-ui/core/TextField";
import useFormState from "../../hooks/UseFormState"


function EditForm({ task, id, editTodo, toggleEditForm }) {
    const [value, handleChange, reset] = useFormState(task)

    return (
            <form onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm()
            }}>
                <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal"
                fullWidth
                />
            </form>
    )
}

export default EditForm;