import {
  Grid,
  TextField,
} from "@mui/material";



export default function FeedTextBox() {
  return (
    <Grid item>
      <TextField
        sx={{width:"100%", height:""}}
        id="outlined-multiline-static"
        label="What is on you mind?"
        multiline
        rows={4}
        variant="filled"
      />
    </Grid>
  )
}