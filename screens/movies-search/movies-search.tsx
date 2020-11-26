import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Divider} from '../../components/divider';
import {Input} from '../../components/input';
import {Button} from '../../components/button';
import {Loader} from '../../components/loader';
import {MovieCardList} from '../../components/movie-card-list';
import {useSearchMovies} from '../../api/hooks/use-search-movies';

export const MoviesSearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [getMovies, movies, isLoading, error] = useSearchMovies();

  return (
    <View style={styles.container}>
      <Divider />
      <View style={styles.searchContainer}>
        <Input
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
