import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import { Box, ListItem, StackHeader, theme } from '../components';
import { Category, HomeNavParamList } from '../../types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
  },
});

interface CategoriesProps {}

const Categories = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'Categories'>) => {
  const categories = route.params.categories;

  return (
    <SafeAreaView style={styles.container}>
      <Box>
        <StackHeader title="Categories" back={() => navigation.goBack()} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categories}
          keyExtractor={(item: Category) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              onPress={() =>
                navigation.navigate('CategoryDetail', { category: item })
              }
              underlayColor={theme.colors.light}
            >
              <ListItem label={item.category_name} index={index} />
            </TouchableHighlight>
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Categories;
