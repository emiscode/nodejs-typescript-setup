import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'
  ],
  collectCoverageFrom: [
    'src/**',
  ]
};

export default config;