import AppUIProvider from '../src/app/AppUIProvider';
import React from 'react';
import { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

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
    viewport: {
      viewports: {
        xs: {
          name: 'xs (480px)',
          styles: { width: '480px', height: '100%' }
        },
        sm: {
          name: 'sm (1024px)',
          styles: { width: '1024px', height: '100%' }
        },
        md: {
          name: 'md (1280px)',
          styles: { width: '1280px', height: '100%' }
        },
        lg: {
          name: 'lg (1600px)',
          styles: { width: '1600px', height: '100%' }
        }
      }
    },
    controls: {
      disableSaveFromUI: false,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, context) => {
      return (
        <AppUIProvider>
          <CssBaseline />
          <Provider store={mockStore}>
            <MemoryRouter>
              <Story />
            </MemoryRouter>
          </Provider>
        </AppUIProvider>
      )
    },
  ],
};

export default preview;