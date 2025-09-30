import React from "react";
import { matchPath, useLocation } from 'react-router-dom';
import { URLMap } from '@component/url/type';

type BreadcrumbContextType = {
  get: () => { url: string, label: string }[];
}

export const BreadcrumbContext = React.createContext<BreadcrumbContextType|undefined>(undefined);

type BreadcrumbContextProviderProps<T extends URLMap> = {
  urls: T,
  labels: Partial<Record<keyof T, string>>
  breadcrumbs: Partial<Record<keyof T, ReadonlyArray<keyof T>>>
  children: React.ReactNode;
}

const useProvider = <T extends URLMap>(props: BreadcrumbContextProviderProps<T>) => {
  const location = useLocation();
  const get = () => {
    let url: keyof T | null = null;
    for (const [key, value] of Object.entries(props.urls)) {
      if (matchPath({ path: value, end: true }, location.pathname)) {
        url = key;
      }
    }
    if (!url) return [];
    const breadcrumb = props.breadcrumbs[url] || [];

    const rtn = breadcrumb.map(b => {
      return {
        url: props.urls[b],
        label: props.labels[b] || b as string,
      }
    });
    rtn.push({
      url: props.urls[url],
      label: props.labels[url] || url as string,
    })
    return rtn;
  }
  return { get }
}
export const BreadcrumbContextProvider = <T extends URLMap>(props: BreadcrumbContextProviderProps<T>) => {
  return (
    <BreadcrumbContext.Provider value={{ ...useProvider(props) }}>
      { props.children }
    </BreadcrumbContext.Provider>
  )
}