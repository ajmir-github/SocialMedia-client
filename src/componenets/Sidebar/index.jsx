import {
  Grid, Stack
} from "@mui/material";
import ProfileBar from "./ProfileBar";
import InterestBar from "./InterestBar";




export default function Sidebar() {
  return (
    <Grid
      item
      sx={{mb:2, p:{xs:0.2, sm:0.4, md:0.6, lg:0.8}, position: "sticky", top: 0}}
    >
      <Stack
        flexDirection="column"
        justifyContent="center"
        gap={1}
        alignItems="stretch"
      >
        <ProfileBar/>
        <InterestBar/>
      </Stack>
      

    </Grid>
  )
}