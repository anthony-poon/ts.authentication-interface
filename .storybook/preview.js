import DefaultUIProvider from '../src/app/DefaultUIProvider';
import React from 'react';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <DefaultUIProvider>
        <div style={{ width: "100%", height: "100%" }}>
          <Story />
        </div>
      </DefaultUIProvider>
    ),
  ],
};

export default preview;