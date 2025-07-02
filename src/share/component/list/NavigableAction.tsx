import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type NavigableActionProps = React.PropsWithChildren<{
  onClick?: () => void;
}>


export const NavigableAction = (props: NavigableActionProps) => {
  return (
    <ListItemButton onClick={props.onClick}>
      <ListItemText>
        { props.children }
      </ListItemText>
      <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
        <ArrowForwardIosIcon />
      </ListItemIcon>
    </ListItemButton>
  )
}