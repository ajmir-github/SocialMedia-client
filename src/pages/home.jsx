import { Grid, Paper } from "@mui/material";
import Navbar from "../componenets/Navbar";
import Sidebar from "../componenets/Sidebar";
import Main from "../componenets/Main";
import Ads from "../componenets/Ads";


export default function Home() {
  return <>
    
    <Navbar/>

    <Grid container sx={{pt:{xs:0.5, md:1}, pb:2}}>
      
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{order:{"xs":1, "md":1}}}
      >
        <Sidebar/>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{order:{"xs":3, "md":2}}}
        >
        <Main/>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{order:{"xs":2, "md":3}}}
        >
        <Ads/>
      </Grid>

    </Grid>
  </>
}