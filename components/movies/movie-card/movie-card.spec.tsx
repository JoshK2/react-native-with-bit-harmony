import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import {MovieCardExample} from './movie-card.composition';

describe('Movie card component', () => {
  it('renders correctly', () => {
    testRenderer.create(<MovieCardExample />);
  });
  it('snapshot test', () => {
    const component = testRenderer.create(<MovieCardExample />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with value', () => {
    const {getByText} = render(<MovieCardExample />);
    expect(getByText(/The Wolf of Wall Street/)).toBeTruthy();
  });
});
