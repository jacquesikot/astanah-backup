import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native';

import { Box, HomeHeader, Text, CategorySkeleton } from '..';
import { categories } from '../../data';

const { width } = Dimensions.get('window');
const CIRCLE_MARGIN = 20;

const styles = StyleSheet.create({
  container: {},
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 30,
    marginLeft: (width - (280 + CIRCLE_MARGIN * 4)) / 2,
    width: width,
    paddingBottom: 10,
  },
});

interface ExploreProps {}

const Explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <HomeHeader favorite={() => true} notification={() => true} />
        <ScrollView decelerationRate={16} showsVerticalScrollIndicator={false}>
          <Text variant="h4" color="primary" marginLeft="xl" marginTop="xl">
            Main Categories
          </Text>
          <Box style={styles.categories}>
            <FlatList
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={() => <CategorySkeleton />}
            />
          </Box>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Explore;
