import { AppBar, Avatar, Badge, Box, Fab, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, styled, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FolderIcon from "@mui/icons-material/TagFaces";
import LocationIcon from "@mui/icons-material/GpsFixed";
import DateIcon from "@mui/icons-material/DateRange";
import { GlassPaper } from "../MyComponents";


export default function ProfileBar() {
  return (
  <GlassPaper>
    <Grid container flexDirection="column" justifyContent="center" alignItems="stretch">
      <Grid item container justifyContent="center" my={2}>
  
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Fab color="primary" aria-label="add" size="small">
              <EditIcon fontSize="small"/>
            </Fab>
          }
        >
          <Avatar
            alt="Remy Sharp"
            src="/images/ajmir_raziqi_sm.jpg"
            sx={{ width: 160, height: 160 }}
          />
        </Badge>
      </Grid>
      
      <Grid item>
        <Typography align="center" variant="h5" component="h2">Ajmir Raziqi</Typography>
      </Grid>

      <Grid item>
        <List dense>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <EditIcon fontSize="small"/>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <FolderIcon />
              </ListItemAvatar>
              <ListItemText
                primary="Software Engineer"
                secondary='Title'
              />
            </ListItem>

            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <EditIcon fontSize="small"/>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <LocationIcon />
              </ListItemAvatar>
              <ListItemText
                primary="Ayia Napa, Cyprus"
                secondary='Location'
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <EditIcon fontSize="small"/>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <DateIcon />
              </ListItemAvatar>
              <ListItemText
                primary="Date of Birth"
                secondary='Dec 27, 1996'
              />
            </ListItem>
        </List>
      </Grid>
        
    </Grid>
  </GlassPaper>
  )
}