import { Grid } from "@mui/material";

import Posts from "./Posts";




export default function Main() {
  return (
    <Grid item sx={{p:{xs:0.2, sm:0.4, md:0.6, lg:0.8}}} container gap={1} justifyContent="center" flexDirection="column">
      <Posts/>
    </Grid>
  )
}