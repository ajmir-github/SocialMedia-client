import {
  Container,
  Grid
} from "@mui/material";
import { useBreakPoint } from "../hooks/useBreakPoint";
import Navbar from "../componenets/Navbar";
import Main from "../componenets/Main";
import Ads from "../componenets/Ads";


export default function Home() {
  let onlyMobile = useBreakPoint(b=>b.up("md"));
  return <>
    
    <Navbar/>

    <Container>
      <Grid
        container
        sx={{pt:{xs:0.5, md:1}, pb:2, mt:"80px"}}
      >
        
        <Grid
          item
          xs={12}
          md={9}
          sx={{order:{"xs":2, "md":1}}}
          >
          <Main/>
        </Grid>

        {onlyMobile && (
          <Grid
            item
            xs={12}
            md={3}
            sx={{order:{"xs":1, "md":2}}}
            >
            <Ads/>
          </Grid>
        )}


      </Grid>
    </Container>
  </>
}