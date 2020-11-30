import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Platform,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Loader} from '@netflux/base-ui.loader';
import {
  useMovieDetails,
  MovieDetailsProps,
} from '@netflux/movies.hooks.use-movie-details';

type Props = {
  imdbID?: string;
};

export const MovieDetails = ({imdbID}: Props) => {
  const isWeb = Platform.OS === 'web';
  const route = !isWeb && useRoute();
  // @ts-ignore
  const movieID = imdbID || route?.params?.imdbID;
  const [getMovie, movie, isLoading, error] = useMovieDetails();

  useEffect(() => {
    getMovie(movieID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;
  if (error !== '') return <Text>{error}</Text>;
  const {
    title,
    year,
    type,
    poster,
    rated,
    released,
    runtime,
    genre,
    description,
  }: MovieDetailsProps = movie;
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.viewImage}>
          <Image style={styles.image} source={{uri: poster}} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>Year: {year}</Text>
        <Text style={styles.info}>Type: {type}</Text>
        <Text style={styles.info}>Rated: {rated}</Text>
        <Text style={styles.info}>Released: {released}</Text>
        <Text style={styles.info}>Runtime: {runtime}</Text>
        <Text style={styles.info}>Genre: {genre}</Text>
        <View style={styles.viewDescription}>
          <Text style={styles.description}>Description: {description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#cdcdcd',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 300, height: 500, marginBottom: 10},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  info: {marginBottom: 10},
  viewDescription: {
    flexDirection: 'row',
  },
  description: {flex: 1, flexWrap: 'wrap'},
});
