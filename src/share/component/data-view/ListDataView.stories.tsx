import React from 'react';
import ListDataView from '@component/data-view/ListDataView';
import HomeIcon from '@mui/icons-material/Home';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: ListDataView,
  title: "Component/Data View/List",
  args: {
    title: "Some Title",
    items: [
      {
        title: "This is a title 1",
        subtitle: "This is a subtitle 1",
      },{
        title: "This is a title 2",
      },{
        title: "This is a title 3",
        subtitle: "This is a subtitle 3"
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
  }
} as Meta<typeof ListDataView>;

export const Default: StoryObj<typeof ListDataView> = {}

export const WithIcon: StoryObj<typeof ListDataView> = {
  args: {
    items: [
      {
        title: "This is a title 1",
        subtitle: "This is a subtitle 1",
        icon: <HomeIcon />
      },{
        title: "This is a title 2",
      },{
        title: "This is a title 3",
        subtitle: "This is a subtitle 3"
      },
    ],
  }
}

export const WithoutSubtitle: StoryObj<typeof ListDataView> = {
  args: {
    items: [
      {
        title: "This is a title 1",
        icon: <HomeIcon />
      },{
        title: "This is a title 2",
      },{
        title: "This is a title 3",
      },
    ],
  }
}

export const Clickable: StoryObj<typeof ListDataView> = {
  args: {
    items: [
      {
        title: "This is a title 1",
        onClick: action("onClick"),
      },{
        title: "This is a title 2",
        onClick: action("onClick"),
      },{
        title: "This is a title 3",
        onClick: action("onClick"),
      },
    ],
  }
}