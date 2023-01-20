import React from 'react';
import { AppBar, Button, Grid, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  return (
    <>
    <AppBar position='static'>
      <Toolbar>
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
      <Grid container width={2}>
          <Grid item>
            <Button>Clicky</Button>
          </Grid>
      </Grid>
    </>
  );
}
