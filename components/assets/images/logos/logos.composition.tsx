import React from 'react';
import {Image} from 'react-native';
import {bitLogo} from './index';

export const LogoImageExample = () => (
  <Image source={bitLogo} style={{width: 200, height: 200}} />
);
