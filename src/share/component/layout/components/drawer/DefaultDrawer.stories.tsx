import { Meta, StoryObj } from '@storybook/react';
import { DefaultDrawer } from '@component/layout/components/drawer/DefaultDrawer';
import React, { useContext } from 'react';
import { LayoutContext, LayoutContextProvider } from '@component/layout/LayoutContext';
import { Box } from '@mui/material';
import { DefaultContainer } from '@component/layout/components/container/DefaultContainer';

const Render = (props: React.ComponentProps<typeof DefaultDrawer>) => {
  const context = useContext(LayoutContext);
  return (
    <>
      <DefaultDrawer {...props}>
        <Box>
          This is a menu: { context?.drawer.isOpen ? 'Opened' : 'Closed' }
        </Box>
      </DefaultDrawer>
      <DefaultContainer>
        <button onClick={context?.drawer.toggle}>Toggle</button>
      </DefaultContainer>
    </>
  )
}

type StoryBookArgs = {
  variant: "toggle" | "permanent",
} & typeof DefaultDrawer;

export default {
  title: 'Component/Layout/Component/Drawer',
  component: DefaultDrawer,
  render: (args) => (
    <LayoutContextProvider drawer={args.variant}>
      <Render {...args}/>
    </LayoutContextProvider>
  ),
  parameters: {
    layout: 'fullscreen',
  }
} as Meta<StoryBookArgs>

export const Default: StoryObj<typeof DefaultDrawer> = {}

export const Permanent: StoryObj<typeof DefaultDrawer> = {
  args: {
    variant: "permanent",
  }
}