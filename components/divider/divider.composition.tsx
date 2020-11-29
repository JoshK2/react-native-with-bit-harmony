import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from './divider';

export const SimpleDivider = () => (
  <View>
    <View>
      <Text>Up</Text>
    </View>
    <Divider />
    <View>
      <Text>Bottom</Text>
    </View>
  </View>
);

export const DividerWithCustomStyle = () => (
  <View>
    <View>
      <Text>Up</Text>
    </View>
    <Divider style={{backgroundColor: 'black'}} />
    <View>
      <Text>Bottom</Text>
    </View>
  </View>
);
