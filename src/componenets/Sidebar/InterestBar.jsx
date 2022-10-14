 import {
  Badge,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  IconButton
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import GlassPaper from "../GlassPaper";


export default function InterestBar() {
  return (
    <GlassPaper sx={{p:1}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography gutterBottom variant="h6" component="div">Interests</Typography>
        <IconButton aria-label="edit">
          <EditIcon fontSize="small"/>
        </IconButton>
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center">
        <Chip label="Sports" size="small" />
        <Chip label="Technology" size="small" />
        <Chip label="Music" size="small" />
      </Stack>
    </GlassPaper>
  )
}