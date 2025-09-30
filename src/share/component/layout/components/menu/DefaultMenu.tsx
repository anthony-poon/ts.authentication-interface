import {
  Box,
  Divider,
  Link as MUILink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Link as RouterLink } from 'react-router';
import React from 'react';

type MenuItemProps = {
  icon?: React.ReactNode,
  text: string,
  href?: string,
  to?: string,
  hidden?: boolean;
}

type MenuGroupProps = {
  items: MenuItemProps[],
  name?: string,
  isLast?: boolean,
}

type DefaultMenuProps = {
  items?: MenuGroupProps[],
}

const MenuGroup = (props: MenuGroupProps) => {
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

export const DefaultMenu = (props: DefaultMenuProps) => {
  const items = props.items || [];
  return (
    <>
      { items.map((item, index) => (
        <MenuGroup
          key={index}
          items={item.items}
          isLast={index === items?.length - 1}
        />
      )) }
    </>
  )
}