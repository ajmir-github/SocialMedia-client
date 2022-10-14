import {
  ToggleMenu,
  useMenu
} from "../toggleMenu";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import LogoIcon from '@mui/icons-material/Explore';
import { Grid, MenuItem } from '@mui/material';


function SittingMenu() {
  const menu = useMenu();
  return (
    <Grid sx={{display:"flex"}} alignItems="center" justifyContent="center">
      <Tooltip title="Open settings">
        <IconButton onClick={menu.open}>
          <MenuIcon/>
        </IconButton>
      </Tooltip>
      <ToggleMenu state={menu}>
        <MenuItem onClick={menu.close}>Profile</MenuItem>
        <MenuItem onClick={menu.close}>My account</MenuItem>
        <MenuItem onClick={menu.close}>Logout</MenuItem>
      </ToggleMenu>
    </Grid>
  )
}

function UserMenu() {
  const menu = useMenu();
  return (
    <Grid sx={{display:"flex"}} alignItems="center" justifyContent="center">
      <Tooltip title="Username">
        <IconButton onClick={menu.open}>
          <Avatar alt="Remy Sharp" src="/images/ajmir_raziqi_sm.jpg" />
        </IconButton>
      </Tooltip>
      <ToggleMenu state={menu}>
        <MenuItem onClick={menu.close}>Profile</MenuItem>
        <MenuItem onClick={menu.close}>My account</MenuItem>
        <MenuItem onClick={menu.close}>Logout</MenuItem>
      </ToggleMenu>
    </Grid>
  )
}


function MainTitle() {
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

export default function Navbar(){

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar>
          <Grid container justifyContent="space-between" alighItems="center">
            <SittingMenu/>
            <MainTitle/>
            <UserMenu/>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};