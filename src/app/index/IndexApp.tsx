import env from '@env';
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router';
import URLs from '@url';

const IndexApp = () => {
  return (
    <div>
      <Box>
        Hello World. Current environment: {env.APP_ENV}
      </Box>
      <Box>
        <Link to={URLs.authorize.login + "?redirect=" + URLs.home}>Login</Link>
      </Box>
    </div>
  )
}

export default IndexApp;