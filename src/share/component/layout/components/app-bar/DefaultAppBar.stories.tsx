import { Meta, StoryObj } from '@storybook/react';
import { DefaultAppBar } from '@component/layout/components/app-bar/DefaultAppBar';
import { LayoutContext, LayoutContextProvider } from '@component/layout/LayoutContext';
import React from 'react';
import { Box } from '@mui/material';

const Render = (props: React.ComponentProps<typeof DefaultAppBar>) => {
  const context = React.useContext(LayoutContext);
  return (
    <>
      <DefaultAppBar {...props} />
      <Box p={2}>
        Drawer: { context?.drawer.isOpen ? "Opened": "Closed" }
      </Box>
    </>
  )
}

export default {
  title: "Component/Layout/Component",
  component: DefaultAppBar,
  render: (args) => {
    return (
      <LayoutContextProvider>
        <Render {...args} />
      </LayoutContextProvider>
    )
  },
  args: {
    title: "some-title",
  },
  parameters: {
    layout: "fullscreen",
  }
} as Meta<typeof DefaultAppBar>;

export const AppBar: StoryObj<typeof DefaultAppBar> = {
}