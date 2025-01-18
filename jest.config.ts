import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "moduleNameMapper": {
    "^@api/(.*)$": "<rootDir>/src/share/api/$1",
    "^@env$": "<rootDir>/src/share/env",
    "^@component/(.*)$": "<rootDir>/src/share/component/$1",
    "^@hook/(.*)$": "<rootDir>/src/share/hook/$1",
    "^@store/(.*)$": "<rootDir>/src/share/store/$1",
    "^@url$": "<rootDir>/src/share/url",
  },
};

export default config;