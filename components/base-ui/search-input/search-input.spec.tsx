import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {SearchInputExample} from './search-input.composition';

describe('Input component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SearchInputExample />);
  });
});
