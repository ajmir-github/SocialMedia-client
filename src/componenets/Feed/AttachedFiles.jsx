import {
  IconButton,
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
  Avatar
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";


export default function AttachedFiles() {
  return (
    <List dense>

      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon color="error"/>
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <UploadIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Articial_itellegence_caption.jpg"
          secondary={'Image'}
        />
      </ListItem>
      
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon color="error"/>
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <UploadIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="how_to-hack-human-mind.mp4"
          secondary={'Video'}
        />
      </ListItem>

    </List>
  )
}
