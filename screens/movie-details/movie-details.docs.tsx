import React from 'react';
import {Section} from '@teambit/documenter.ui.section';
import {ThemeContext} from '@teambit/documenter.theme.theme-context';
import {Separator} from '@teambit/documenter.ui.separator';
import {MovieDetails} from './movie-details';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          The movies-details screen component shows you all the details of a
          specific movie.
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movies details screen component.';

Overview.labels = ['react native', 'typescript', 'movies', 'details', 'screen'];

Overview.examples = [
  {
    scope: {
      MovieDetails,
    },
    title: 'Movies details screen example',
    description: 'Screen with movie details',
    jsx: <MovieDetails imdbID="tt0993846" />,
  },
];
