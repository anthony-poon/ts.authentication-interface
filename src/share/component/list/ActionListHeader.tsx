import React from 'react';
import { ListSubheader } from '@mui/material';

export const ActionListHeader = (props: React.PropsWithChildren<{}>) => {
  return (
    <ListSubheader>
      { props.children }
    </ListSubheader>
  )
}