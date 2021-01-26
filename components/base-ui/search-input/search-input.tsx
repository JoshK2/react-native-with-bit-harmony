import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {searchImage} from '@netflux/assets.images.search';

type Props = {
  placeHolder?: string;
  onChange: any;
  value: string;
  style?: any;
};

export const SearchInput = ({
  placeHolder = 'place holder',
  onChange,
  value = '',
  style,
}: Props) => {
  return (
    <View>
      <Image style={styles.searchIcon} source={searchImage} />
      <TextInput
        style={StyleSheet.flatten([styles.input, style])}
        onChangeText={onChange}
        value={value}
        placeholder={placeHolder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 5,
  },
  searchIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 4,
    right: 5,
  },
});
