import React from 'react';
import { IconButton, ListItem, ListItemText } from '@mui/material';

type IconClickActionProps = React.PropsWithChildren<{
  onClick: () => void;
  subtitle?: string;
  icon: React.ReactNode;
}>

export const IconClickAction = (props: IconClickActionProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={props.onClick}>
          { props.icon }
        </IconButton>
      }
    >
      <ListItemText secondary={props.subtitle}>
        { props.children }
      </ListItemText>
    </ListItem>
  )
}