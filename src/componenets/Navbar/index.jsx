import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  Grid,
} from '@mui/material';
import MainTitle from "./MainTitle";
import SideNav from './SideNav';





export default function Navbar(){
  const [drawerState, setDrawerState] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alighItems="center">
          <SideNav state={drawerState} setState={setDrawerState}/>
          <MainTitle/>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};