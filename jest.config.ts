import { Config } from '@jest/types';

export default {
  bail: 0,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/tests/**/*.spec.ts'],
} as Config.InitialOptions;
