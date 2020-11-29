import React, {useState} from 'react';
import {} from 'react-native';
import {Input} from './input';

export const SimpleInput = () => {
  const [value, setValue] = useState('');
  return <Input onChange={setValue} value={value} />;
};

export const InputWithPlaceHolder = () => {
  const [value, setValue] = useState('');
  return <Input placeHolder="Search" onChange={setValue} value={value} />;
};
