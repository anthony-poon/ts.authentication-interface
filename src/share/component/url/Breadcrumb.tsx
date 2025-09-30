import React from "react";
import { BreadcrumbContext } from '@component/url/BreadcrumbContext';
import { Box, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router';
import { generatePath, matchPath } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const Breadcrumb = () => {
  const context = React.useContext(BreadcrumbContext);
  const crumbs = context?.get() || null;
  const location = useLocation();

  if (!crumbs) return null;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Box px={2} mb={3} display={"flex"} justifyContent={"center"}>
        { crumbs.map((crumb, i) => {
          const match = matchPath({ path: crumb.url }, location.pathname);
          const to = match?.params ? generatePath(crumb.url, match?.params) : crumb.url;
          if (i < crumbs.length - 1) {
            return (
              <>
                <Link key={i} to={to} component={RouterLink} underline="none">{crumb.label}</Link>
                <Box component={"span"} mx={1} display={"flex"} alignItems={"center"}>
                  <ArrowForwardIosIcon sx={{ fontSize: 12 }}/>
                </Box>
              </>
            )
          } else {
            return (
              <b key={i}>{crumb.label}</b>
            )
          }
        }) }
      </Box>
    </Breadcrumbs>
  )
}