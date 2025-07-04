import React from "react";
import { IconClickAction } from '@component/list/IconClickAction';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { ActionList } from '@component/list/ActionList';
import { ActionListHeader } from '@component/list/ActionListHeader';
import { NavigableAction } from '@component/list/NavigableAction';
import DeleteIcon from '@mui/icons-material/Delete';
import { action } from '@storybook/addon-actions';

export default {
  title: "Component/Action List/Icon Click Action",
  component: IconClickAction,
  args: {
    icon: <DeleteIcon />,
    onClick: () => action('clicked')(),
  },
  render: (args) => {
    return (
      <Box maxWidth={500}>
        <ActionList title={"Some Title"}>
          <ActionListHeader>
            Some Subheader
          </ActionListHeader>
          <IconClickAction {...args}>
            Action 1
          </IconClickAction>
          <IconClickAction {...args}>
            Action 2
          </IconClickAction>
          <IconClickAction {...args}>
            Action 3
          </IconClickAction>
        </ActionList>
      </Box>
    )
  }
} as Meta<typeof IconClickAction>

export const Default: StoryObj<typeof NavigableAction> = {
}

export const WithSubtitle: StoryObj<typeof NavigableAction> = {
  args: {
    subtitle: "Some subtitle"
  }
}