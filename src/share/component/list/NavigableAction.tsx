import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Link as MUILink } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link as RouterLink } from 'react-router';


type NavigableActionProps = React.PropsWithChildren<{
  onClick?: () => void;
  href?: string;
  to?: string;
  subtitle?: string;
}>;

export const NavigableAction = (props: NavigableActionProps) => {
  const content = (
    <>
      <ListItemText secondary={props.subtitle}>
        {props.children}
      </ListItemText>
      <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
        <ArrowForwardIosIcon fontSize={"small"} />
      </ListItemIcon>
    </>
  );

  if (props.to) {
    return (
      <ListItem disablePadding>
        <MUILink
          component={RouterLink}
          to={props.to}
          underline="none"
          color="inherit"
          sx={{ width: '100%', display: 'flex' }}
        >
          <ListItemButton component="span">
            {content}
          </ListItemButton>
        </MUILink>
      </ListItem>
    );
  }

  if (props.href) {
    return (
      <ListItem disablePadding component={MUILink} href={props.href || "#"} underline="none" color="inherit">
        <ListItemButton component="span">
          {content}
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <ListItemButton onClick={props.onClick}>
      {content}
    </ListItemButton>
  );
};