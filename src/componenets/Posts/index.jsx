import { Grid } from "@mui/material";
import Post from "./Post";

export default function Posts() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      flexDirection="column"
      rowGap={1}
    >
      <Grid item>
        <Post/>
      </Grid>
      
   

    </Grid>
  )
}