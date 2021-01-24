import React from 'react';
import 'react-native';
import testRenderer from 'react-test-renderer';
import {SimpleLoader} from './loader.composition';

describe('Loader component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SimpleLoader />);
  });
  // it('snapshot test', () => {
  //   const component = testRenderer.create(<SimpleLoader />);
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
