import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Input} from './input';

export default function Overview() {
  return null;
}

Overview.abstract = 'A basic input component.';

Overview.labels = ['react native', 'typescript', 'input', 'text'];

Overview.examples = [
  {
    scope: {
      Input,
      useState,
    },
    title: 'Simple Input',
    description: 'Simple example',
    code: `
    () => {
      const [value, setValue] = useState('');
      return <Input onChange={setValue} value={value} />;
    }
    `,
  },
  {
    scope: {
      Input,
      useState,
    },
    title: 'Input with place holder',
    description: 'Using the input component with place holder',
    code: `
    () => {
      const [value, setValue] = useState('');
      return <Input placeHolder="Search" onChange={setValue} value={value} />;
    }
    `,
  },
];
