const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  // Use jsdom for React component testing
  testEnvironment: 'jsdom',

  // Clear mocks before each test
  clearMocks: true,

  // Collect coverage for SonarQube
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  // Ignore irrelevant files for coverage
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/__tests__/'],

  // Collect coverage from source files in src/
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.test.{ts,tsx}',
    '!**/*.spec.{ts,tsx}',
    '!**/__tests__/**',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],

  // Handle TypeScript and JavaScript files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Map Next.js module aliases and mock assets
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // Match test files for sonar.test.inclusions
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

  // Ignore build and node_modules for tests
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],

  // Setup file for jest-dom matchers
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Increase timeout for CI stability
  testTimeout: 60000,
};

module.exports = createJestConfig(config);
