---
labels: ['react native', 'typescript', 'movie', 'card', 'list']
description: 'A movie card list component.'
---

import {MovieCardList} from './movie-card-list';

The movie-card-list displays a list of movie-card with their title and the poster of the movie.

An example that shows a list of two movies:

```js live
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
};
```
