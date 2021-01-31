import {ReactNativeAspect, ReactNativeMain} from '@teambit/react-native';
import {EnvsAspect, EnvsMain} from '@teambit/envs';
import {Aspect} from '@teambit/harmony';
import webpackConfig from './webpack/webpack.config';

const jestConfig = require.resolve('./jest/jest.config');

export class ReactNativeExtension {
  static dependencies: Aspect[] = [ReactNativeAspect, EnvsAspect];

  static async provider([reactNative, envs]: [ReactNativeMain, EnvsMain]) {
    const reactNativeEnv = reactNative.compose([
      reactNative.overrideDevServerConfig(webpackConfig),
      reactNative.overrideJestConfig(jestConfig),
    ]);

    envs.registerEnv(reactNativeEnv);

    return new ReactNativeExtension();
  }
}
