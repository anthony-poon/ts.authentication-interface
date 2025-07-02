import React from 'react';
import { Breakpoint } from '@mui/system';
import { Container } from '@mui/material';

type ContentPanelProps = React.PropsWithChildren<{
  width?: Breakpoint | false,
  align?: "left" | "center",
}>

export const ContentPanel = (props: ContentPanelProps) => {
  return (
    <Container maxWidth={props.width || false} fixed sx={{
      marginLeft: props.align === "center" ? null : 0,
    }}>
      { props.children }
    </Container>
  )
}