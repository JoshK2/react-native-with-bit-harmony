import {ReactNativeAspect, ReactNativeMain} from '@teambit/react-native';
import {EnvsAspect, EnvsMain} from '@teambit/envs';
import {Aspect} from '@teambit/harmony';

const webpackConfig = require('./webpack/webpack.config');

export class ReactNativeExtension {
  static dependencies: Aspect[] = [ReactNativeAspect, EnvsAspect];

  static async provider([reactNative, envs]: [ReactNativeMain, EnvsMain]) {
    const reactNativeEnv = reactNative.compose([
      // @ts-ignore
      reactNative.overrideDevServerConfig(webpackConfig),
      // react.overridePreviewConfig(webpackConfig),
    ]);

    envs.registerEnv(reactNativeEnv);

    return new ReactNativeExtension();
  }
}
