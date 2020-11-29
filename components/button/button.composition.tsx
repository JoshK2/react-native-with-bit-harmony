import React from 'react';
import {Button} from './button';

export const SimpleButton = () => (
  <Button onPress={() => console.log('on press')} />
);

export const ButtonWithValue = () => (
  <Button onPress={() => console.log('on press')} value="More Info" />
);

export const ButtonWithCustomStyle = () => (
  <Button
    onPress={() => console.log('on press')}
    buttonStyle={{backgroundColor: 'black'}}
  />
);

export const ButtonWithCustomTextStyle = () => (
  <Button
    onPress={() => console.log('on press')}
    buttonStyle={{backgroundColor: '#fafafa'}}
    textStyle={{color: 'black'}}
  />
);
