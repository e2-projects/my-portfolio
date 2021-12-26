const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/app'],
  testFailureExitCode: 0,
  testMatch: ['**/?(*.)+(spec).(ts)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/app/test/'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'coverage',
      },
    ],
  ],
  modulePaths: [
    '<rootDir>'
  ],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/app/test/']
};
