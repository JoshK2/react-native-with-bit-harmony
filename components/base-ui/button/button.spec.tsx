import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import {SimpleButton, ButtonWithValue} from './button.composition';

describe('Button component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SimpleButton />);
  });
  it('snapshot test', () => {
    const component = testRenderer.create(<SimpleButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with value', () => {
    const {getByText} = render(<ButtonWithValue />);
    expect(getByText(/More Info/)).toBeTruthy();
  });
});
