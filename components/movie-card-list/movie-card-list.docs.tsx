import React from 'react';
import {Section} from '@teambit/documenter.ui.section';
import {ThemeContext} from '@teambit/documenter.theme.theme-context';
import {Separator} from '@teambit/documenter.ui.separator';
import {MovieCardList} from './movie-card-list';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          The movie-card-list displays a list of movie-card with their title and
          the poster of the movie.
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movie card list component.';

Overview.labels = ['react native', 'typescript', 'movie', 'card', 'list'];

Overview.examples = [
  {
    scope: {
      MovieCardList,
    },
    title: 'Simple Example',
    description: 'Simple example that shows a list of two movies',
    code: `
    () => {
      const movies = [
        {
          title: 'The Wolf of Wall Street',
          imdbID: 'tt0993846',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
        },
        {
          title: 'WALL·E',
          imdbID: 'tt0993846',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg',
        },
      ];
      return <MovieCardList list={movies} />;
    }
    `,
  },
];
