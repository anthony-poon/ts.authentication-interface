import { LayoutContext } from '@component/layout/LayoutContext';
import React from 'react';
import { Box, Drawer } from '@mui/material';

type DrawerProps = {
  width: number,
  open: boolean,
  onClose?: () => void,
}

const ToggleDrawer = (props: React.PropsWithChildren<DrawerProps>) => {
  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width },
      }}
    >
      { props.children }
    </Drawer>
  )
}

const PermanentDrawer  = (props: React.PropsWithChildren<DrawerProps>) => {
  return (
    <Drawer
      variant={"permanent"}
      sx={{
        width: props.width,
        [`& .MuiDrawer-paper`]: { width: props.width, boxSizing: 'border-box' },
      }}
    >
      { props.children }
    </Drawer>
  )
}

type DefaultDrawerProps = {
  width: number,
  variant?: "toggle" | "permanent",
  children: React.ReactNode
}

export const DefaultDrawer = (props: DefaultDrawerProps) => {
  const context = React.useContext(LayoutContext);
  const variant = context?.drawer.variant || "toggle" as const;
  const DrawerImpl = variant === "permanent" ? PermanentDrawer : ToggleDrawer;
  return (
    <Box width={context?.isMobile ? 0 : props.width}>
      <DrawerImpl
        width={props.width || 320}
        open={!!context?.drawer.isOpen}
        onClose={context?.drawer.close}
      >
        <Box height={64} mb={2} style={{
          flexShrink: 0
        }}/>
        <Box p={2}>
          { props.children }
        </Box>
      </DrawerImpl>
    </Box>
  )
}