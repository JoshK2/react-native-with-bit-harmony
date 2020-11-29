import React from 'react';
import {Alert} from 'react-native';
import {Button} from './button';

export const SimpleButton = () => (
  <Button onPress={() => console.log('on press')} />
);

export const ButtonWithValue = () => (
  <Button onPress={() => console.log('on press')} value="More Info" />
);
