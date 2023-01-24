import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import DrawrPad from './components/DrawrPad';

export default function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: '95px' }}>
        <Grid container width="100%" justifyContent="center" alignContent="center" sx={pb: '5px'}>
          <Grid item maxWidth="75%" border="2px solid black" borderRadius={5}>
            <DrawrPad />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
