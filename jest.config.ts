import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "moduleNameMapper": {
    "^@root/(.*)$": "<rootDir>/src/$1",
    "^@share/(.*)$": "<rootDir>/share/$1",
    "^@view/(.*)$": "<rootDir>/view/$1",
  },
};

export default config;