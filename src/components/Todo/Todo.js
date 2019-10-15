import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

export default function Todo({ todo }) {
    return (
        <Grid container>
	  <Grid item xs={8} style={{ background: '#dd83c2'}}>
	    <Typography variant="h6">
	    {todo}
	    </Typography>
	    </Grid>
	    <Grid item xs={2} style={{ background: '#0c3308'}}>
	    <Button>
	    done
	    </Button>
	    </Grid>
	    <Grid item xs={2} style={{ background: '#8b1602'}}>
	    <Button>
	    delete
	    </Button>
	    </Grid>
	    </Grid>
    )
}