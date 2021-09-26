// Override the Jest config to ignore transpiling from specific folders
// See the base Jest config: https://bit.dev/teambit/react/react-native/~code/jest/jest.config.js

const reactNativeJestConfig = require('@teambit/react-native').jestConfig;
const {
  generateNodeModulesPattern,
} = require('@teambit/dependencies.modules.packages-excluder');
const packagesToExclude = ['prop-types', '@teambit'];

module.exports = {
  ...reactNativeJestConfig,
  transformIgnorePatterns: [
    ...reactNativeJestConfig.transformIgnorePatterns,
    '<rootDir>/' + generateNodeModulesPattern({packages: packagesToExclude}),
  ],
};
