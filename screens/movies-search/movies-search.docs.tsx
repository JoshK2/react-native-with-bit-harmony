import React from 'react';
import {Section} from '@teambit/documenter.ui.section';
import {ThemeContext} from '@teambit/documenter.theme.theme-context';
import {Separator} from '@teambit/documenter.ui.separator';
import {MoviesSearchScreen} from './movies-search';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          The movies-search screen component allow you to search for movies and
          displays a list with their title and the poster of the movie.
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movies search screen component.';

Overview.labels = ['react native', 'typescript', 'movies', 'search', 'screen'];

Overview.examples = [
  {
    scope: {
      MoviesSearchScreen,
    },
    title: 'Movies search screen example',
    description: 'Screen with movies search option',
    jsx: <MoviesSearchScreen />,
  },
];
