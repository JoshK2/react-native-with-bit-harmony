import React from 'react';
import {Loader} from './loader';

export default function Overview() {
  return null;
}

Overview.abstract = 'A simple loader component.';

Overview.labels = ['react native', 'typescript', 'loader'];

Overview.examples = [
  {
    scope: {
      Loader,
    },
    title: 'Simple Loader',
    description: 'Simple example',
    jsx: <Loader />,
  },
];
