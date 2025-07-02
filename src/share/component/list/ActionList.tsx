import React from 'react';
import { Box, List, Typography } from '@mui/material';

type ActionListProps = React.PropsWithChildren<{
  title?: string;
}>

export const ActionList = (props: ActionListProps) => {
  return (
    <List>
      <Box px={2} mb={3}>
        <Typography variant="h5" component="h1">
          { props.title }
        </Typography>
      </Box>
      { props.children }
    </List>
  )
}