import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/actions/todoActions';
import { Grid, TextField, Button } from '@material-ui/core';

export default function CreateTodo() {
    const dispatch = useDispatch()
    const [todo, setTodo] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createTodo(todo));
        let frm = document.getElementsByName('contact-form')[0];
        frm.reset();
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