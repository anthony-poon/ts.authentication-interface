import React from 'react';
import UsernameLoginAppView from './UsernameLoginAppView';
import API from '@api/index';

const UsernameLoginApp = () => {
  return (
    <UsernameLoginAppView authentication={API.Authentication}/>
  )
}

export default UsernameLoginApp;