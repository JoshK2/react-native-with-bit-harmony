import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {MoviesSearchScreenExample} from './movies-search.composition';

describe('Movies search screen component', () => {
  it('renders correctly', () => {
    testRenderer.create(<MoviesSearchScreenExample />);
  });
});
