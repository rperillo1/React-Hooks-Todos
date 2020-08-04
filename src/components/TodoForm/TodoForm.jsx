import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useFormState from "../../hooks/UseFormState"


function TodoForm(props) {
    const [value, handleChange, handleSubmit] = useFormState('')
    return (
        <Paper>
            {value}
            <TextField value={value} onChange={handleChange}/>
        </Paper>
    )
}

export default TodoForm;