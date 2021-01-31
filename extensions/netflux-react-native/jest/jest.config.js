const merge = require('lodash.merge');
const {jestConfig} = require('@teambit/react-native');

const config = {};

const mergedConfig = merge(jestConfig, config);

module.exports = mergedConfig;
