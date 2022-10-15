import { useState } from "react";
import { Button, Fab, Grid, Menu, MenuItem, TextField, IconButton, ListItemIcon, ListItemText, Divider, Badge, Typography, Box, List, ListItem, ListItemAvatar, Avatar } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import VideoIcon from '@mui/icons-material/VideoFile';
import LinkIcon from '@mui/icons-material/Link';
import AttachmentIcon from "@mui/icons-material/Attachment";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function FeedActions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item container gap={1}>
      <Button
        color="primary"
        variant="contained"
        startIcon={ <PostAddIcon />}
      >
        Post
      </Button>

      <Button
        aria-label="delete"
        color="primary"
        variant="contained"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<AttachmentIcon />}
      >
        Attach
      </Button>
 

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ImageIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Image</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <VideoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Video</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LinkIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Link</ListItemText>
        </MenuItem>
      </Menu>
    </Grid>
  );
}