import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MovieCard, Props as MovieCardProps} from '../movie-card';

type Props = {
  list: MovieCardProps[];
};

export const MovieCardList = ({list}: Props) => {
  return (
    <View style={styles.container}>
      {list &&
        list.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.year}
            imdbID={movie.imdbID}
            type={movie.type}
            poster={movie.poster}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
