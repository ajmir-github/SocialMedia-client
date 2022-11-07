import { Grid, Drawer, Collapse } from "@mui/material";
import Post from "./Post";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useEffect } from "react";


export default function Posts() {

  const trigger = useScrollTrigger();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      flexDirection="column"
      rowGap={2}
    >
      <Collapse in={trigger} timeout="auto" unmountOnExit>
      <h1>Hello Word</h1>

      </Collapse>
   
      <Grid item>
        <Post/>
      </Grid>
      
      <Grid item>
        <Post/>
      </Grid>
      
   

    </Grid>
  )
}