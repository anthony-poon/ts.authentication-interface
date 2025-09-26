import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem, ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MUILink
} from '@mui/material';
import { Link as RouterLink } from 'react-router';

type SidebarItemProps = {
  icon?: React.ReactNode,
  text: string,
  href?: string,
  to?: string,
  hidden?: boolean;
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
  const items = props.items.filter(item => !item.hidden);
  return (
    <List>
      {items.map((item) => {
        const content = (
          <>
            <ListItemIcon>{item.icon || null}</ListItemIcon>
            <ListItemText primary={item.text} />
          </>
        );

        if (item.to) {
          return (
            <ListItem key={item.text} disablePadding>
              <MUILink
                component={RouterLink}
                to={item.to}
                underline="none"
                color="inherit"
                sx={{ width: '100%', display: 'flex' }}
              >
                <ListItemButton component="span">
                  {content}
                </ListItemButton>
              </MUILink>
            </ListItem>
          );
        }

        return (
          <ListItem key={item.text} disablePadding component={MUILink} href={item.href || "#"} underline="none" color="inherit">
            <ListItemButton component="span">
              {content}
            </ListItemButton>
          </ListItem>
        );
      })}
      {!props.isLast && (
        <Box pt={1}>
          <Divider />
        </Box>
      )}
    </List>
  );
};

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