import React from 'react';
import { Box, ListSubheader } from '@mui/material';

type ActionListHeaderProps = React.PropsWithChildren<{
  button?: React.ReactNode;
}>

export const ActionListHeader = (props: ActionListHeaderProps) => {
  return (
    <ListSubheader>
      <Box display={"flex"}>
        <Box flexGrow={1}>
          { props.children }
        </Box>
        { props.button && (
          <Box>
            { props.button }
          </Box>
        ) }
      </Box>
    </ListSubheader>
  )
}