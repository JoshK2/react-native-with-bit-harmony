import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Divider} from '@netflux/base-ui.divider';
import {SearchInput} from '@netflux/base-ui.search-input';
import {Button} from '@netflux/base-ui.button';
import {Loader} from '@netflux/base-ui.loader';
import {MovieCardList} from '@netflux/movies.grid.movie-card-list';
import {useSearchMovies} from '@netflux/movies.hooks.use-search-movies';

export const MoviesSearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [getMovies, movies, isLoading, error] = useSearchMovies();

  return (
    <View style={styles.container}>
      <Divider />
      <View style={styles.searchContainer}>
        <SearchInput
          placeHolder="Search"
          onChange={setSearchValue}
          value={searchValue}
        />
        <Divider />
        <Button value="Search" onPress={() => getMovies(searchValue)} />
      </View>
      <Divider />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {isLoading ? <Loader /> : <MovieCardList list={movies} />}
        {error !== '' && <Text>{error}</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    width: '90%',
  },
});
