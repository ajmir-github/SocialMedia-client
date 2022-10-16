import Typography from '@mui/material/Typography';
import LogoIcon from '@mui/icons-material/Explore';
import {
  Grid,
} from '@mui/material';

export default function MainTitle() {
  return (
    <Grid flexGrow={1} sx={{display:"flex"}} alignItems="center" justifyContent="center">
      <LogoIcon sx={{ mr: 1 }} fontSize="large"/>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        SocialMedia
      </Typography>
    </Grid>
  )
}