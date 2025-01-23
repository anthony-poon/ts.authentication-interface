import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

type SidebarAppBarProps = {
  title?: string
  isMobile: boolean;
  onMenuToggle: () => void;
};

const SidebarAppBar = (props: SidebarAppBarProps) => {
  return (
    <AppBar position={"sticky"} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
      <Toolbar>
        { props.isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props.onMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        ) }
        { props.title && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { props.title }
          </Typography>
        ) }
      </Toolbar>
    </AppBar>
  )
}

export default SidebarAppBar;