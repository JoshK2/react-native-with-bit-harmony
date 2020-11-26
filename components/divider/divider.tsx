import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  style?: any;
};

export const Divider = ({style}: Props) => (
  <View style={StyleSheet.flatten([styles.divider, style])} />
);

const styles = StyleSheet.create({
  divider: {
    backgroundColor: 'transparent',
    height: 10,
  },
});
