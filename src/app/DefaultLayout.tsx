import SidebarLayout from '@component/layout/sidebar/SidebarLayout';
import URLs from '@url';
import { useNavigate } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
import { Breakpoint } from '@mui/system/createBreakpoints/createBreakpoints';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectRoles } from '@store/slice/authentication';

type DefaultLayoutProps = {
  maxWidth?: Breakpoint | false
  align?: "left" | "center"
}

const DefaultLayout = (props: React.PropsWithChildren<DefaultLayoutProps>) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const APP_MENU =  [
    {
      items: [
        {
          text: 'Home',
          icon: <HomeIcon />,
          to: URLs.home,
        },{
          text: 'Setting',
          icon: <SettingsIcon/>,
          to: URLs.setting.menu,
          hidden: !isAuthenticated
        },{
          text: 'Logout',
          to: URLs.authorize.logout,
          hidden: !isAuthenticated
        },
      ]
    }
  ]

  return (
    <SidebarLayout
      maxWidth={props.maxWidth || false}
      menus={APP_MENU}
      align={props.align}
    >
      { props.children }
    </SidebarLayout>

  )
}

export default DefaultLayout;