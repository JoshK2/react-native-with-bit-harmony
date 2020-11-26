import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Loader = () => (
  <View style={styles.loader}>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  loader: {
    backgroundColor: 'transparent',
    height: 20,
    textAlign: 'center',
  },
});
