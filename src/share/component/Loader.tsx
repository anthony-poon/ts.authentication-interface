import ErrorIcon from "@mui/icons-material/Error";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

type DisplayProps = {
  display: boolean,
}

const JSImplementation = (props: React.PropsWithChildren<DisplayProps>) => {
  if (!props.display) {
    return null;
  }
  return <>{props.children}</>;
};

const CSSImplementation = (props: React.PropsWithChildren<DisplayProps>) => {
  return (
    <div
      style={{
        display: props.display ? "initial" : "none",
      }}>
      {props.children}
    </div>
  );
};

type LoaderProps = {
  isLoading: boolean;
  isError?: boolean;
  implementation?: "js" | "css";
}

const Loader = (props: React.PropsWithChildren<LoaderProps>) => {
  const DisplayImp = props.implementation === "js" ? JSImplementation : CSSImplementation;
  const icon = props.isError ? (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      style={{
        minHeight: 150,
        width: "100%",
      }}>
      <ErrorIcon />
    </Box>
  ) : props.isLoading ? (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      style={{
        minHeight: 150,
        width: "100%",
      }}>
      <CircularProgress />
    </Box>
  ) : null;
  return (
    <>
      <DisplayImp
        display={!props.isLoading}
      >
        { props.children }
      </DisplayImp>
      {icon}
    </>
  );
};

export default Loader;