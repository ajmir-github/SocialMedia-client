import {
  ToggleMenu,
  useMenu
} from "../toggleMenu";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon  from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import LogoIcon from '@mui/icons-material/Explore';
import { Grid, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import useThemeActions from "../../hooks/useThemeActions";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import UserIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";

function SittingMenu() {
  const menu = useMenu();
  const { 
    turnDarkMode,
    turnLightMode,
    themeMode
  } = useThemeActions();
  return (
    <Grid sx={{display:"flex"}} alignItems="center" justifyContent="center">
      <Tooltip title="Open settings">
        <IconButton onClick={menu.open}>
          <MoreVertIcon sx={{color:"#fff"}}/>
        </IconButton>
      </Tooltip>
      <ToggleMenu state={menu}>
        {themeMode==="light"?(
          <MenuItem onClick={menu.onClose(turnDarkMode)}>
            <ListItemIcon>
              <DarkModeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dark</ListItemText>
          
          </MenuItem>
        ):(
          <MenuItem onClick={turnLightMode || menu.close}>
            <ListItemIcon>
              <LightModeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Light</ListItemText>
          </MenuItem>
        )}

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
        
        <MenuItem onClick={menu.close}>
            <ListItemIcon>
              <UserIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
        </MenuItem>

        <MenuItem onClick={menu.close}>
            <ListItemIcon>
              <MessageIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Messages</ListItemText>
        </MenuItem>

        <MenuItem onClick={menu.close}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
        </MenuItem>

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
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alighItems="center">
          <SittingMenu/>
          <MainTitle/>
          <UserMenu/>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};