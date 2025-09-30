import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { LayoutContext } from '@component/layout/LayoutContext';

type DefaultAppBarProps = {
  title?: string;
}

export const DefaultAppBar = (props: DefaultAppBarProps) => {
  const theme = useTheme();
  const context = React.useContext(LayoutContext);
  const zIndex = theme.zIndex.drawer + 1;
  return (
    <AppBar position={"relative"} sx={{ zIndex }} color={"default"}>
      <Toolbar>
        { context?.drawer.variant !== "permanent" && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={context?.drawer.toggle}
          >
            <MenuIcon />
          </IconButton>
        ) }
        { props.title && (
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            { props.title }
          </Typography>
        ) }
      </Toolbar>
    </AppBar>
  )
}