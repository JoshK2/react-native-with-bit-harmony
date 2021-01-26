import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {SearchImageExample} from './search.composition';

describe('Search image component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SearchImageExample />);
  });
});
