import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/react/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.{ts,tsx}',
    '!**/src/react/helpers/render.tsx',
    '!**/src/react/helpers/storybook-helpers.ts',
  ],
  coveragePathIgnorePatterns: ['!*.d.ts'],
  testPathIgnorePatterns: ['/.yalc/', '/cypress/'],
  errorOnDeprecated: true,
}

export default config
