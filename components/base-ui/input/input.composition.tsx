import React, {useState} from 'react';
import {Input} from './input';

export const SimpleInput = () => {
  const [value, setValue] = useState('');
  return <Input onChange={setValue} value={value} />;
};

export const InputWithPlaceHolder = () => {
  const [value, setValue] = useState('');
  return <Input placeHolder="Search" onChange={setValue} value={value} />;
};

export const InputWithCustomStyle = () => {
  const [value, setValue] = useState('');
  return <Input style={{color: 'blue'}} onChange={setValue} value={value} />;
};
