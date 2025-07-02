import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem, ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';

type SidebarItemProps = {
  icon?: React.ReactNode,
  text: string,
  onClick: () => void,
}

type SidebarItemGroup = {
  items: SidebarItemProps[],
  name?: string,
  isLast?: boolean,
}

type SidebarMenuProps = {
  width: number,
  items: SidebarItemGroup[],
  isMobile: boolean,
  isMenuOpen: boolean,
  onMenuClose: () => void,
}

type DrawerProps = {
  width: number,
  open: boolean,
  onClose: () => void,
}

const SidebarMenuGroup = (props: SidebarItemGroup) => {
  return (
    <List>
      { props.items.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton onClick={item.onClick}>
            <ListItemIcon>
              {item.icon ? item.icon : null}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      )) }
      { props.isLast ? null : (
        <Box pt={1}>
          <Divider />
        </Box>
      ) }
    </List>
  )
}

const MobileDrawer = (props: React.PropsWithChildren<DrawerProps>) => {
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

const DesktopDrawer = (props: React.PropsWithChildren<DrawerProps>) => {
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

const SidebarMenu = (props: SidebarMenuProps) => {
  const DrawerImpl = props.isMobile ? MobileDrawer : DesktopDrawer;
  return (
    <Box width={props.isMobile ? 0 : props.width}>
      <DrawerImpl
        width={props.width}
        open={props.isMenuOpen}
        onClose={props.onMenuClose}
      >
        <Box height={64} mb={2} style={{
          flexShrink: 0
        }}/>
        { props.items.map((item, index) => (
          <SidebarMenuGroup
            key={index}
            items={item.items}
            isLast={index === props.items.length - 1}
          />
        )) }
      </DrawerImpl>
    </Box>
  )
}

export default SidebarMenu;