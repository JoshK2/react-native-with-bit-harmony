import React from 'react';
import {Image} from 'react-native';
import {searchImage} from './index';

export const SearchImageExample = () => (
  <Image source={searchImage} style={{width: 100, height: 100}} />
);
