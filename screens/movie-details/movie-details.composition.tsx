import React from 'react';
import {View} from 'react-native';
import {MovieDetails} from './movie-details';

export const MovieDetailsExample = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
    }}>
    <MovieDetails imdbID="tt0993846" />
  </View>
);
