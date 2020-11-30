import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {MovieCardListExample} from './movie-card-list.composition';

describe('Movie card list component', () => {
  it('renders correctly', () => {
    testRenderer.create(<MovieCardListExample />);
  });
});
