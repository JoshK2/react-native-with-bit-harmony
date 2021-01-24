import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {SimpleDivider, DividerWithCustomStyle} from './divider.composition';

describe('Divider component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SimpleDivider />);
  });
  // it('snapshot test', () => {
  //   const component = testRenderer.create(<SimpleDivider />);
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  it('renders correctly with style', () => {
    testRenderer.create(<DividerWithCustomStyle />);
  });
  // it('snapshot test with style', () => {
  //   const component = testRenderer.create(<DividerWithCustomStyle />);
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
