import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from './divider';

export default function Overview() {
  return null;
}

Overview.abstract =
  'A divider component to set a separation between two elements.';

Overview.labels = ['react native', 'typescript', 'divider', 'separation'];

Overview.examples = [
  {
    scope: {
      Divider,
      View,
      Text,
    },
    title: 'Simple Divider',
    description: 'Simple example',
    jsx: (
      <View>
        <View>
          <Text>Up</Text>
        </View>
        <Divider />
        <View>
          <Text>Bottom</Text>
        </View>
      </View>
    ),
  },
  {
    scope: {
      Divider,
      View,
      Text,
    },
    title: 'Divider With Custom Style',
    description: 'Using the divider with custom style',
    jsx: (
      <View>
        <View>
          <Text>Up</Text>
        </View>
        <Divider style={{backgroundColor: 'black'}} />
        <View>
          <Text>Bottom</Text>
        </View>
      </View>
    ),
  },
];
