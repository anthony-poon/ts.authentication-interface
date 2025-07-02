import { StorybookConfig } from '@storybook/react-webpack5';

import path from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      return config;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@api': path.resolve(__dirname, "../src/share/api"),
      '@env': path.resolve(__dirname, "../src/share/env"),
      '@component': path.resolve(__dirname, "../src/share/component"),
      '@hook': path.resolve(__dirname, "../src/share/hook"),
      '@store': path.resolve(__dirname, "../src/share/store"),
      '@url': path.resolve(__dirname, "../src/share/url"),
    };
    return config;
  }
};
export default config;