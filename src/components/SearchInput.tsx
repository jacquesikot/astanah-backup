import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Dimensions,
} from 'react-native';

import { Box } from './Theme';
import { SearchIcon } from '../Svg';
import { theme } from '.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.spacing.xl,
    height: 46,
    borderWidth: 1,
    borderColor: theme.colors.light,
    borderRadius: theme.spacing.s,
  },
  textInput: {
    width: '90%',
    paddingLeft: 10,
    height: 45,
  },
});

const { width } = Dimensions.get('window');
const WIDTH = width - theme.spacing.xl * 2;

interface SearchInputProps extends RNTextInputProps {
  placeholder: string;
  width?: number;
}

const SearchInput = ({ placeholder, width, ...props }: SearchInputProps) => {
  const widthValue = width ? width : WIDTH;
  return (
    <Box style={[styles.container, { width: widthValue }]}>
      <SearchIcon />
      <RNTextInput
        style={styles.textInput}
        placeholder={placeholder}
        {...props}
      />
    </Box>
  );
};

export default SearchInput;
