import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

export default function CreateTodo() {

    const [todo, setTodo] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Grid container spacing={1} style={{ background: '#2E3B55'}}>
               <Grid item xs={9}>
                <TextField fullWidth variant="outlined" placeholder="add todo" />
                </Grid>
               <Grid item xs={3} style={{ background: '#4a724a' }}>
               <Button>
               add
               </Button>
               </Grid>
            </Grid>

    )

}