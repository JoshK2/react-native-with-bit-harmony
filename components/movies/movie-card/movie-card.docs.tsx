import React from 'react';
import {Section} from '@teambit/documenter.ui.section';
import {ThemeContext} from '@teambit/documenter.theme.theme-context';
import {Separator} from '@teambit/documenter.ui.separator';
import {MovieCard} from './movie-card';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          The movie-card displays the title and the poster of the movie. And it
          also contains the movie ID to get more info from the API.
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movie card component.';

Overview.labels = ['react native', 'typescript', 'movie', 'card'];

Overview.examples = [
  {
    scope: {
      MovieCard,
    },
    title: 'Simple Example',
    description: 'Simple example that shows the title and the image of a movie',
    jsx: (
      <MovieCard
        title="The Wolf of Wall Street"
        imdbID="tt0993846"
        poster="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
      />
    ),
  },
];
