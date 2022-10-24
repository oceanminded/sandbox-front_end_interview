import * as React from 'react';
import './style.css';
import { User_Manager } from './user/User_Manager';
import Grid from '@mui/material/Unstable_Grid2';

export default function App() {
  return (
    <Grid container>
      <Grid xs={6}>{`Hello there Obi Wan!`}</Grid>
      <Grid xs={6}>
        <User_Manager />
      </Grid>
    </Grid>
  );
}
