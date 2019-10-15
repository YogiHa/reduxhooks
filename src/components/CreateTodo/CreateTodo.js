import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

export default function CreateTodo() {

    const [todo, setTodo] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(todo)
    }

    return (
        <Grid container spacing={1} style={{ background: '#2E3B55'}}>
               <Grid item xs={9}>
               <form name="contact-form" onSubmit={handleSubmit}>
                <TextField
                 fullWidth
                  variant="outlined"
                   placeholder="add todo"
                   onChange={e=>setTodo(e.target.value)} />
                </form>
                </Grid>
               <Grid item xs={3} style={{ background: '#4a724a' }}>
               <Button onClick={handleSubmit}>
               add
               </Button>
               </Grid>
            </Grid>

    )

}