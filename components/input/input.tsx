import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type Props = {
  placeHolder?: string;
  onChange: any;
  value: string;
  style?: any;
};

export const Input = ({
  placeHolder = 'place holder',
  onChange,
  value = '',
  style,
}: Props) => {
  return (
    <TextInput
      style={StyleSheet.flatten([styles.input, style])}
      onChangeText={onChange}
      value={value}
      placeholder={placeHolder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 5,
  },
});
