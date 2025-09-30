import env from '@env';
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router';
import { URLs } from '@url';
import AppLayout from '../AppLayout';
import { DefaultContainer } from '@component/layout/components/container/DefaultContainer';

const IndexApp = () => {
  return (
    <AppLayout>
      <DefaultContainer>
        <Box>
          Hello World. Current environment: {env.APP_ENV}
        </Box>
        <Box>
          <Link to={URLs.authorize_login + "?redirect=" + URLs.home}>Login</Link>
        </Box>
      </DefaultContainer>
    </AppLayout>
  )
}

export default IndexApp;