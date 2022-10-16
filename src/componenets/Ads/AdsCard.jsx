import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';
import GlassPaper from "../../utils/GlassPaper";

export default function AdsCard({image, content}) {
  return (
  <Grid sx={{mb:2}}>
    <GlassPaper>
      <Card  sx={{ width: "100%", background:"none", border:"none" }} variant="outlined">
        <CardMedia
          sx={{maxHeight:340}}
          component="img"
          image={image.src}
          alt={image.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">{content.title}</Typography>
          <Typography variant="body2" color="text.secondary">{content.body}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </GlassPaper>
  </Grid>
  );
}