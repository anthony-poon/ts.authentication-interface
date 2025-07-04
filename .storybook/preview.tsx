import DefaultUIProvider from '../src/app/DefaultUIProvider';
import React from 'react';
import { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

const mockReducer = () => ({});

const dispatchLoggerMiddleware = () => (next: any) => (actionArg: any) => {
  action("Redux Dispatch")(JSON.stringify(actionArg));
  return next(actionArg);
};

const mockStore = configureStore({
  reducer: mockReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(dispatchLoggerMiddleware),
  preloadedState: {},
});

const preview: Preview  = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, context) => {
      return (
        <DefaultUIProvider>
          <Provider store={mockStore}>
            <MemoryRouter>
              <Story />
            </MemoryRouter>
          </Provider>
        </DefaultUIProvider>
      )
    },
  ],
};

export default preview;