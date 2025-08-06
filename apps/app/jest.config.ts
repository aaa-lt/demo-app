import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  displayName: '@demo-app/app',
  preset: '../../jest.preset.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/app',
  testEnvironment: 'jsdom',
  forceExit: true,
};

export default createJestConfig(config);
