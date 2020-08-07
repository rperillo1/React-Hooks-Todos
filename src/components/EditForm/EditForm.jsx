import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useFormState from "../../hooks/UseFormState"
import { TodosContext } from '../../contexts/todos.context'


function EditForm({ task, id, toggleEditForm }) {
    const [value, handleChange, reset] = useFormState(task)
    const { editTodo } = useContext(TodosContext)

    return (
            <form onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
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