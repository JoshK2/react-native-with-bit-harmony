---
labels: ['react native', 'typescript', 'movie', 'card']
description: 'A movie card component.'
---

import {MovieCard} from './movie-card';

The movie-card displays the title and the poster of the movie. And it also contains the movie ID to get more info from the API.

An example that shows the title and the image of a movie:

```js live
<MovieCard
  title="The Wolf of Wall Street"
  imdbID="tt0993846"
  poster="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
/>
```
