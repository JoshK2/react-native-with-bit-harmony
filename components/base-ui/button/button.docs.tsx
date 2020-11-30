import React from 'react';
import {Button} from './button';

export default function Overview() {
  return null;
}

Overview.abstract = 'A button component with customizable options.';

Overview.labels = ['react native', 'typescript', 'button'];

Overview.examples = [
  {
    scope: {
      Button,
    },
    title: 'Simple Button',
    description: 'Using the basic component',
    jsx: <Button onPress={() => console.log('on press')} />,
  },
  {
    scope: {
      Button,
    },
    title: 'Button with value',
    description: 'Using the button with value option',
    jsx: <Button onPress={() => console.log('on press')} value="More Info" />,
  },
  {
    scope: {
      Button,
    },
    title: 'Button with custom style',
    description: 'Using the button with buttonStyle option',
    jsx: (
      <Button
        onPress={() => console.log('on press')}
        buttonStyle={{backgroundColor: 'black'}}
      />
    ),
  },
  {
    scope: {
      Button,
    },
    title: 'Button with custom text style',
    description: 'Using the button with buttonStyle and textStyle options',
    jsx: (
      <Button
        onPress={() => console.log('on press')}
        buttonStyle={{backgroundColor: '#fafafa'}}
        textStyle={{color: 'black'}}
      />
    ),
  },
];
