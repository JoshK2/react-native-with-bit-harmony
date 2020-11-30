import React from 'react';
import {View} from 'react-native';
import {MovieCardList} from './movie-card-list';

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

export const MovieCardListExample = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <MovieCardList list={movies} />
  </View>
);
