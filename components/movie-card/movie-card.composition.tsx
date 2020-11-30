import React from 'react';
import {View} from 'react-native';
import {MovieCard} from './movie-card';

export const MovieCardExample = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <MovieCard
      title="The Wolf of Wall Street"
      imdbID="tt0993846"
      poster="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
    />
  </View>
);
