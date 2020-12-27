import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Box, SearchInput, Text, theme } from '../components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingTop: theme.spacing.xl,
  },
});

interface SearchProps {}
const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput />
      <Text>searchScreen</Text>
    </SafeAreaView>
  );
};

export default Search;
