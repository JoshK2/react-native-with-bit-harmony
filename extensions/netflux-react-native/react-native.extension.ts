import {EnvsMain, EnvsAspect} from '@teambit/envs';
import {ReactNativeAspect, ReactNativeMain} from '@teambit/react-native';
import {
  previewConfigTransformer,
  devServerConfigTransformer,
} from './webpack/webpack-transformers';

const jestConfig = require.resolve('./jest/jest.config');

export class ReactNativeExtension {
  constructor(private reactNative: ReactNativeMain) {}

  static dependencies: any = [EnvsAspect, ReactNativeAspect];

  static async provider([envs, reactNative]: [EnvsMain, ReactNativeMain]) {
    const CustomReactNativeEnv = reactNative.compose([
      /*
        Use any of the "reactNative.override..." transformers to
      */
      reactNative.useWebpack({
        previewConfig: [previewConfigTransformer],
        devServerConfig: [devServerConfigTransformer],
      }),
      reactNative.overrideJestConfig(jestConfig),
    ]);

    envs.registerEnv(CustomReactNativeEnv);

    return new ReactNativeExtension(reactNative);
  }
}
