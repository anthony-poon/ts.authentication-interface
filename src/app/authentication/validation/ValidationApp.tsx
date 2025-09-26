import React from "react"
import { ValidationAppView } from './ValidationAppView';
import API from '@api/index';

export const ValidationApp = () => {
  return (
    <ValidationAppView authentication={API.Authentication}/>
  )
}