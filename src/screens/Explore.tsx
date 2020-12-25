import React, { useEffect } from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { ExploreNavParamList } from '../../types';
import {
  Box,
  theme,
  HomeCategory,
  HomeHeader,
  Text,
  ErrorLoading,
  ExploreSkeleton,
} from '../components';
import { useApi } from '../hooks';
import categoriesApi from '../api/categories';

const { width } = Dimensions.get('window');
const CIRCLE_MARGIN = 20;
const CATEGORY_MARGIN = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
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

const Explore = ({
  navigation,
}: StackScreenProps<ExploreNavParamList, 'Explore'>) => {
  const getCategoriesApi = useApi(categoriesApi.getCategories);

  useEffect(() => {
    getCategoriesApi.request();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {getCategoriesApi.loading ? (
        <ExploreSkeleton />
      ) : getCategoriesApi.error ? (
        <ErrorLoading reload={getCategoriesApi.request} />
      ) : (
        <>
          <HomeHeader
            favorite={() => navigation.navigate('Favorites')}
            notification={() => navigation.navigate('Notifications')}
          />
          <ScrollView
            decelerationRate={16}
            showsVerticalScrollIndicator={false}
          >
            <Text variant="h4" color="primary" marginLeft="xl" marginTop="xl">
              Main Categories
            </Text>
            <Box style={styles.categories}>
              <FlatList
                numColumns={4}
                showsHorizontalScrollIndicator={false}
                data={getCategoriesApi.data}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CategoryDetail', {
                        category: item,
                      })
                    }
                  >
                    <HomeCategory
                      margin={CATEGORY_MARGIN}
                      category={item}
                      index={index}
                    />
                  </TouchableOpacity>
                )}
              />
            </Box>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default Explore;
