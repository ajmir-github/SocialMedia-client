import {
  Avatar,
  Drawer,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoreIcon from "@mui/icons-material/MoreVert";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person"
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

import useThemeActions from "../../hooks/useThemeActions";



export default function SideNav({state, setState}) {
  const {
    themeMode,
    turnDarkMode,
    turnLightMode
  } = useThemeActions()
  const openDrawer = ()=> setState(true);
  const closeDrawer = ()=> setState(false);
  return (
    <>
      <IconButton onClick={openDrawer}>
        <MoreIcon sx={{color:"white"}}/>
      </IconButton>
      <Drawer
        anchor="left"
        open={state}
        onClose={closeDrawer}
      >
        <Stack
          alignItems="center"
          flexDirection="column"
          pt={4}
          pb={1}
        >
          <Avatar alt="Remy Sharp" sx={{width:"126px", height:"126px", border:"2px lightgray solid"}} src="/images/ajmir_raziqi_sm.jpg" />
          <Typography pt={1} component="h2" variant="h6">Ajmir Raziqi</Typography>
        </Stack>
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          
          <Divider />

          <ListItem disablePadding>
            {themeMode==="light"?(
              <ListItemButton onClick={turnDarkMode}>
                <ListItemIcon>
                  <DarkModeIcon />
                </ListItemIcon>
                <ListItemText primary="Light" />
              </ListItemButton>
            ):(
              <ListItemButton onClick={turnLightMode}>
                <ListItemIcon>
                  <LightModeIcon />
                </ListItemIcon>
                <ListItemText primary="Dark"/>
              </ListItemButton>
            )}
            
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
         
          <Divider />

          <ListItem disablePadding>
            <ListItemButton onClick={closeDrawer}>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Close" />
            </ListItemButton>
          </ListItem>
         
          
        

          
        </List>
      </Drawer>
    </>
  );
}
