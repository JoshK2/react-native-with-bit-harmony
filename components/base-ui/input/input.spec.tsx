import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {InputWithPlaceHolder, SimpleInput} from './input.composition';

describe('Input component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SimpleInput />);
  });
  // it('snapshot test', () => {
  //   const component = testRenderer.create(<SimpleInput />);
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  it('renders correctly with place holder', () => {
    testRenderer.create(<InputWithPlaceHolder />);
  });
});
