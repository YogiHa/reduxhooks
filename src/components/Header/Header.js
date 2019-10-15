import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
    return (
        <AppBar style={{background: '#2E3B55'}}>
		<Toolbar>
		<Typography variant="h3" align="left">
		Todo       
		</Typography>
	 	</Toolbar>
		</AppBar>
    )
}