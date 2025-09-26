import React from "react";
import TOTPLoginAppView from './TOTPLoginAppView';
import API from '@api/index';

export const TOTPLoginApp = () => {
  return (
    <TOTPLoginAppView authentication={API.Authentication}/>
  )
}