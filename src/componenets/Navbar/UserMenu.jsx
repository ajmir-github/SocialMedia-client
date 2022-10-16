import {
  ToggleMenu,
  useMenu
} from "../../utils/toggleMenu";
import {
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  IconButton,
  Avatar,
  Tooltip
} from '@mui/material';
import UserIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";



export default function UserMenu() {
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