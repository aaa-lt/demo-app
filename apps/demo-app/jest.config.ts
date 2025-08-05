import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  displayName: '@demo-app/demo-app',
  preset: '../../jest.preset.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/demo-app',
  testEnvironment: 'jsdom',
  forceExit: true,
};

export default createJestConfig(config);
