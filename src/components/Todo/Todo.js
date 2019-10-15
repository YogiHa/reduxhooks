import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../../store/actions/todoActions';
import { Grid, Typography, Button } from '@material-ui/core';

export default function Todo({ todo, index, isCompleted }) {
    const dispatch = useDispatch();
    return (
        <Grid container>
	  <Grid item xs={8} style={{ background: '#dd83c2'}}>
	    <Typography variant="h6" style={{ textDecoration: isCompleted ? "line-through" : "" }}>
	    {todo}
	    </Typography>
	    </Grid>
	    <Grid item xs={2} style={{ background: '#0c3308'}}>
	    <Button onClick={()=> dispatch(completeTodo(index))} >
	    done
	    </Button>
	    </Grid>
	    <Grid item xs={2} style={{ background: '#8b1602'}}>
	    <Button onClick={()=> dispatch(deleteTodo(index)) }>
	    delete
	    </Button>
	    </Grid>
	    </Grid>
    )
}