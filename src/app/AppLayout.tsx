import { Breadcrumbs, URLLabels, URLs } from '@url';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '@store/slice/authentication';
import { LayoutContextProvider } from '@component/layout/LayoutContext';
import { DefaultAppBar } from '@component/layout/components/app-bar/DefaultAppBar';
import { DefaultDrawer } from '@component/layout/components/drawer/DefaultDrawer';
import { DefaultMenu } from '@component/layout/components/menu/DefaultMenu';
import { Breadcrumb } from '@component/url/Breadcrumb';
import { BreadcrumbContextProvider } from '@component/url/BreadcrumbContext';

type AppLayoutProps = {
  children: React.ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
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
          to: URLs.setting,
          hidden: !isAuthenticated
        },{
          text: 'Logout',
          to: URLs.authorize_logout,
          hidden: !isAuthenticated
        },
      ]
    }
  ]

  return (
    <LayoutContextProvider>
      <BreadcrumbContextProvider breadcrumbs={Breadcrumbs} urls={URLs} labels={URLLabels}>
        <DefaultAppBar />
        <DefaultDrawer width={320}>
          <DefaultMenu items={APP_MENU}/>
        </DefaultDrawer>
        { props.children }
      </BreadcrumbContextProvider>

    </LayoutContextProvider>
  )
}

export default AppLayout;