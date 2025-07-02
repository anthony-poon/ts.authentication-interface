import React from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';

const style = {
  p: 0,
  width: '100%',
  minWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

type ListDatum = {
  key?: string|number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

type ListItemImpProps = {
  buttons?: {
    text: React.ReactNode,
    onClick: () => void,
  }[],
  isLast: boolean,
  onClick?: () => void,
}

const ListItemImp = (props: React.PropsWithChildren<ListItemImpProps>) => {
  const common = {
    divider: !props.isLast,
    sx: {
      minHeight: '60px',
    },
  };

  return props.onClick ? (
    <ListItemButton {...common} onClick={props.onClick}>
      {props.children}
    </ListItemButton>
  ) : (
    <ListItem {...common}>
      {props.children}
    </ListItem>
  );
}

type ListDatumProps = {
  item: ListDatum;
  isLast: boolean;
  hasIcon: boolean
  hasSubtitle: boolean;
  onClick?: () => void;
}


const ListDatum = (props: ListDatumProps) => {
  const { item } = props;
  return (
    <ListItemImp
      isLast={props.isLast}
      onClick={props.onClick}
    >
      { props.hasIcon && (
        <ListItemIcon>
          { item.icon }
        </ListItemIcon>
      ) }
      <ListItemText
        primary={item.title}
        // Make height even if other item have subtitle
        secondary={item.subtitle || (props.hasSubtitle ? <>&nbsp;</> : null)}
      />
    </ListItemImp >
  )
}

type ListDataViewProps = {
  items: ListDatum[]
  title: string;
}

const ListDataView = (props: ListDataViewProps) => {
  const hasIcon = !!props.items.find(item => !!item.icon);
  const hasSubtitle  = !!props.items.find(item => !!item.subtitle);
  return (
    <List sx={style} subheader={
      <ListSubheader sx={{
        backgroundColor: "#F5F5F5",
        color: "#000",
        fontSize: 16,
        fontWeight: 400,
      }}>
        <Box py={1}>
          { props.title }
        </Box>
      </ListSubheader>
    }>
      <Divider />
      { props.items.map((item, index) => (
        <ListDatum
          key={item.key ? item.key : item.title}
          item={item}
          hasIcon={hasIcon}
          hasSubtitle={hasSubtitle}
          onClick={item.onClick}
          isLast={props.items.length - 1 === index}
        />
      )) }
    </List>
  )
}

export default ListDataView;