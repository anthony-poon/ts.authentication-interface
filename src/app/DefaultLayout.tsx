import SidebarLayout from '@component/layout/sidebar/SidebarLayout';
import URLs from '@url';
import { useNavigate } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
import { Breakpoint } from '@mui/system/createBreakpoints/createBreakpoints';

type DefaultLayoutProps = {
  maxWidth?: Breakpoint | false
  align?: "left" | "center"
}

const DefaultLayout = (props: React.PropsWithChildren<DefaultLayoutProps>) => {
  const navigate = useNavigate();
  const APP_MENU =  [
    {
      items: [
        {
          text: 'Home',
          icon: <HomeIcon />,
          onClick: () => navigate(URLs.home),

        },{
          text: 'Setting',
          icon: <SettingsIcon/>,
          onClick: () => navigate(URLs.setting.menu),
        },{
          text: 'Logout',
          onClick: () => navigate(URLs.authorize.logout),
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