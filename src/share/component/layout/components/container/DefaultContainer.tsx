import React from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { Breakpoint } from '@mui/system';

type DefaultContainerProps = {
  children: React.ReactNode;
  variant?: Breakpoint;
}


export const DefaultContainer = (props: DefaultContainerProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Container fixed={true} maxWidth={!!props.variant ? props.variant : false} disableGutters>
      <Box mx={isMobile ? 0 : 2} my={isMobile ? 2 : 5} pt={isMobile ? 2 : 5}>
        { props.children }
      </Box>
    </Container>
  );
};