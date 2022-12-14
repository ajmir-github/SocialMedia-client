import { useState } from 'react';
import Menu from '@mui/material/Menu';


export function useMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const open = (event) => setAnchorEl(event.currentTarget)
  const close = () => setAnchorEl(null);
  const onClose = callback => ()=>{
    close();
    callback();
  }
  return {
    isOpen,
    open,
    close,
    onClose,
    anchorEl
  }
}

export function ToggleMenu({state, children}) {
  const { isOpen, close, anchorEl } = state;
  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={close}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {children}
    </Menu>
  );
}