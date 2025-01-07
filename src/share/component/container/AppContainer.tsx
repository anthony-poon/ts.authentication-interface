import React from "react";
import { Box, Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import { Breakpoint } from '@mui/system/createBreakpoints/createBreakpoints';

type AppContainerProps = {
  size?: Breakpoint
}

const ResponsivePaper = (props: React.PropsWithChildren<{}>) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const Wrapper = isSmall ? React.Fragment : Paper;
  return (
    <Wrapper>
      <Box px={isSmall ? 0 : 2} py={isSmall ? 2 : 4}>
        { props.children }
      </Box>
    </Wrapper>
  )
}

const AppContainer = (props: React.PropsWithChildren<AppContainerProps>) => {
  return (
    <Container fixed maxWidth={props.size || 'md'}>
      <ResponsivePaper>
        {props.children}
      </ResponsivePaper>
    </Container>
  )
}

export default AppContainer;