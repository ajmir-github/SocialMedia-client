import * as React from 'react';
import GlassPaper from "../../utils/GlassPaper";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, ButtonGroup, Collapse, DialogContent, DialogActions, Dialog, DialogTitle, Divider, Stack, DialogContentText, TextField } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";


function CommentDialog({state, setState}) {
  const closeDialog = ()=> setState(false)
  return (
    <Dialog
      onClose={closeDialog}
        open={state}
        fullWidth
        maxWidth="md"
      >
      <DialogTitle>Make you comment here!</DialogTitle>
      <DialogContent>
        <TextField
          sx={{width:"100%"}}
          id="outlined-multiline-static"
          label="Your comment"
          multiline
          rows={4}
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={closeDialog}
          sx={{color:"palette.primary.main"}}
          startIcon={<CloseIcon/>}
        >Cancel</Button>
        <Button
          onClick={closeDialog}
          sx={{color:"palette.primary.main"}}
          startIcon={<PostAddIcon/>}
        >Done</Button>
      </DialogActions>
    </Dialog>
  )
}


export default function Post() {
  const [liked, setLiked] = React.useState(false);
  const [commentSection, setCommentSection] = React.useState(false);
  const [commentModal, setCommentModal] = React.useState(false);
  const openCommentModal = ()=> setCommentModal(true);
  return (
  <GlassPaper>
    <CommentDialog state={commentModal} setState={setCommentModal}/>
    <Card sx={{background:"none", border:"none"}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        image="/images/pizza.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. 
        </Typography>
      </CardContent>
      <CardActions>
        <Stack width="100%" flexDirection="row" justifyContent="space-between">
          <Button
            startIcon={<FavoriteIcon sx={{color:(liked?"error.main":"primary.main")}}/>}
            size="large"
            onClick={()=> setLiked(!liked)}
            variant="text"
            sx={{color:"primary.main"}}
          >
            Like
          </Button>
          <ButtonGroup variant="text" size="large">
            <Button
              sx={{color:"primary.main"}}
              startIcon={<CommentIcon />}
              onClick={openCommentModal}
            >
              Comment
            </Button>
            <Button
              size="small"
              onClick={()=> setCommentSection(!commentSection)}
            >
              <ArrowDropDownIcon 
                sx={{
                  transition:"rotate .4s",
                  rotate:commentSection?"180deg":"0deg",
                  color:commentSection?"error.main":"primary.main",
                }}
              />
            </Button>
          </ButtonGroup>
        </Stack>
        
   
      </CardActions>

      <Collapse in={commentSection} timeout="auto" unmountOnExit>
        <Divider/>
          <Card sx={{background:"none", border:"none"}}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. 
                Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. 
                Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. 
              </Typography>
            </CardContent>
          </Card>
      </Collapse>

    </Card>
  </GlassPaper>
  );
}
