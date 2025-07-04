import React from 'react';
import { ActionList } from '@component/list/ActionList';
import { Meta, StoryObj } from '@storybook/react';
import { ActionListHeader } from '@component/list/ActionListHeader';
import { NavigableAction } from '@component/list/NavigableAction';
import { Box } from '@mui/material';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Component/Action List/Navigable Action',
  component: NavigableAction,
  args: {
    onClick: () => action('clicked')(),
  },
  render: (args) => {
    return (
      <Box maxWidth={500}>
        <ActionList title={"Some Title"}>
          <ActionListHeader>
            Some Subheader
          </ActionListHeader>
          <NavigableAction {...args}>
            Action 1
          </NavigableAction>
          <NavigableAction {...args}>
            Action 2
          </NavigableAction>
          <NavigableAction {...args}>
            Action 3
          </NavigableAction>
        </ActionList>
      </Box>
    )
  }
} as Meta<typeof NavigableAction>

export const Default: StoryObj<typeof NavigableAction> = {
}

export const WithSubtitle: StoryObj<typeof NavigableAction> = {
  args: {
    subtitle: "Some subtitle"
  }
}