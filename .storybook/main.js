const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
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
    config.resolve.alias = {
      ...config.resolve.alias,
      '@api': path.resolve(__dirname, "../src/share/api"),
      '@env': path.resolve(__dirname, "../src/share/env"),
      '@component': path.resolve(__dirname, "../src/share/component"),
      '@hook': path.resolve(__dirname, "../src/share/hook"),
      '@store': path.resolve(__dirname, "../src/share/store"),
    };
    return config;
  }
};
export default config;