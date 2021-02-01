const merge = require('lodash.merge');
const {jestConfig} = require('@teambit/react-native');

const config = {
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-button|@netflux)/)',
  ],
};

const mergedConfig = merge(jestConfig, config);

module.exports = mergedConfig;
