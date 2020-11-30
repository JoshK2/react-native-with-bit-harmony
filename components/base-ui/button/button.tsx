import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';

type Props = {
  value?: string;
  onPress: any;
  buttonStyle?: any;
  textStyle?: any;
};

export const Button = ({
  value = 'Click',
  onPress,
  buttonStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableHighlight
      style={StyleSheet.flatten([styles.button, buttonStyle])}
      onPress={onPress}
      underlayColor="#404040">
      <Text style={StyleSheet.flatten([styles.text, textStyle])}>{value}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00a5e2',
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical: 9,
    width: '100%',
    height: 40,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
