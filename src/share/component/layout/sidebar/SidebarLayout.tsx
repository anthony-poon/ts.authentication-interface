import React from "react"
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import SidebarMenu from '@component/layout/sidebar/component/SidebarMenu';
import SidebarAppBar from '@component/layout/sidebar/component/SidebarAppBar';
import { Breakpoint } from '@mui/system';

const DRAWER_WIDTH = 240;

type SidebarLayoutProps = {
  title?: string;
  maxWidth?: Breakpoint | false,
  menus: {
    items: {
      icon?: React.ReactNode,
      text: string,
      onClick: () => void,
    }[],
    name?: string
  }[],
}

const SidebarLayout = (props: React.PropsWithChildren<SidebarLayoutProps>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  return (
    <Box style={{
      minHeight: '100vh',
    }}>
      <SidebarAppBar
        title={props.title}
        isMobile={isMobile}
        onMenuToggle={() => setMenuOpen(!isMenuOpen)}
      />
      <SidebarMenu
        isMobile={isMobile}
        width={DRAWER_WIDTH}
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setMenuOpen(false)}
        items={props.menus}
      />
      <Box style={{
        marginLeft: isMobile ? 0 : DRAWER_WIDTH,
        paddingTop: theme.spacing(2),
      }}>
        <Container maxWidth={props.maxWidth || false} fixed sx={{
          marginLeft: 0,
        }}>
          { props.children }
        </Container>
      </Box>
    </Box>
  )
}

export default SidebarLayout;