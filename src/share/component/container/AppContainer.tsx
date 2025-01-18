import React from "react";
import { Box, Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import { Breakpoint } from '@mui/system/createBreakpoints/createBreakpoints';
import ContainerWrapper from '@component/container/component/ContainerWrapper';

type AppContainerProps = {
  isCentered?: boolean;
  size?: Breakpoint
}

const PaperWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Paper elevation={3}>
      {children}
    </Paper>
  )
}

const ResponsivePaper = (props: React.PropsWithChildren<{}>) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const Wrapper = isSmall ? React.Fragment : PaperWrapper;
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
    <ContainerWrapper size={props.size} variant={props.isCentered ? 'centered' : 'default'} >
      <ResponsivePaper>
        {props.children}
      </ResponsivePaper>
    </ContainerWrapper>
  )
}

export default AppContainer;