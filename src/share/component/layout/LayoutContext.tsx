import React from "react"
import { useMediaQuery, useTheme } from '@mui/material';

type DrawerVariant = "toggle" | "permanent";

type LayoutContextType = {
  isMobile: boolean
  drawer: DrawerContextType
}

type DrawerContextType = {
  isOpen: boolean;
  variant: DrawerVariant
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const LayoutContext = React.createContext<LayoutContextType | undefined>(undefined);

type LayoutContextProviderProps = {
  children: React.ReactNode;
  drawer?: DrawerVariant;
}

const useDrawer = (props: LayoutContextProviderProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const toggle = () => setOpen(!isOpen);

  return {
    isOpen,
    variant: props.drawer || "toggle" as const,
    open,
    close,
    toggle
  };
}

export const LayoutContextProvider = (props: LayoutContextProviderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const drawer = useDrawer(props);
  return (
    <LayoutContext.Provider value={{
      isMobile,
      drawer
    }}>
      { props.children }
    </LayoutContext.Provider>
  )
}