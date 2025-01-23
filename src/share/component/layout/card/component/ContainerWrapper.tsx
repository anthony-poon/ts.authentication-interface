import React from 'react';
import { Box, Container } from '@mui/material';
import { Breakpoint } from '@mui/system/createBreakpoints/createBreakpoints';

export type ContainerWrapperProps = {
  variant?: 'default' | 'centered';
} & ContainerWrapperPropsForwarded;

export type ContainerWrapperPropsForwarded = {
  size?: Breakpoint
}

const CenteredContainerWrapper = (props: React.PropsWithChildren<ContainerWrapperPropsForwarded>)=> {
  return (
    <Container fixed maxWidth={props.size || 'md'} style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center"
    }}>
      { props.children }
    </Container>
  )
}

const DefaultContainerWrapper = (props: React.PropsWithChildren<ContainerWrapperPropsForwarded>) => {
  return (
    <Container fixed maxWidth={props.size || 'md'} style={{
      height: "100vh"
    }}>
      { props.children }
    </Container>
  )
}

const ContainerWrapper = (props: React.PropsWithChildren<ContainerWrapperProps>) => {
  const { variant, ...rest } = props;
  let Component;
  switch (props.variant) {
    case 'centered':
      Component = CenteredContainerWrapper;
      break;
    default:
      Component = DefaultContainerWrapper;
      break;
  }
  return (
    <Component {...rest}/>
  )
}

export default ContainerWrapper;