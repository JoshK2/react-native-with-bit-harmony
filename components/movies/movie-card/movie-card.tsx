import React from 'react';
import {StyleSheet, View, Text, Image, Platform} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {Button} from '@netflux/base-ui.button';

export type Props = {
  title: string;
  imdbID: string;
  poster: string;
};

export const MovieCard = ({title, imdbID, poster}: Props) => {
  const isWeb = Platform.OS === 'web';
  // const navigation = !isWeb && useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: poster}} />
      <Text style={styles.title}>{title}</Text>
      <Button
        value="More Info"
        onPress={() => {
          // !isWeb && navigation.navigate('Movie Details', {imdbID});
        }}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#cdcdcd',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  image: {width: 300, height: 300, marginBottom: 10},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  button: {
    backgroundColor: '#010101',
  },
});
