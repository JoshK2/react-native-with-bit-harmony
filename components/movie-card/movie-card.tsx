import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@teambit/react-native.components.button';

export type Props = {
  title: string;
  imdbID: string;
  poster: string;
};

export const MovieCard = ({title, imdbID, poster}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: poster}} />
      <Text style={styles.title}>{title}</Text>
      <Button
        value="More Info"
        onPress={() => {
          console.log('clicked', imdbID);
          navigation.navigate('Movie Details', {imdbID});
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
