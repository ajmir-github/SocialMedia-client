import {
  Grid,
} from "@mui/material";

import FeedTextBox from "./FeedTextBox";
import AttachedFiles from "./AttachedFiles";
import FeedActions from "./FeedActions";
import GlassPaper from "../../utils/GlassPaper";


export default function Feed() {
  return (
  <GlassPaper sx={{p:1}}>

    <Grid container flexDirection="column" gap={1}>
      
      <FeedTextBox/>
      <AttachedFiles/>
      <FeedActions/> 

    </Grid>
  </GlassPaper>
  )
}