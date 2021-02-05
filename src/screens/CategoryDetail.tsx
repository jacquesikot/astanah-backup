import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { HomeNavParamList, Product } from '../../types';
import {
  StackHeader,
  ProductCard,
  theme,
  Box,
  ErrorLoading,
  ProductPageSkeleton,
} from '../components';
import { useApi } from '../hooks';
import productsApi from '../api/products';
import { capitalize } from '../utils';
import { LOWER_CARD_HEIGHT } from '../screens/Home';

const { width, height } = Dimensions.get('window');

const CARD_SPACING = 30;
const CARD_HEIGHT = LOWER_CARD_HEIGHT;
const CARD_WIDTH = (width - CARD_SPACING - theme.spacing.xl * 2) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    height,
  },
  productContainer: {
    paddingTop: 20,
    marginLeft: theme.spacing.xl,
    paddingBottom: 80,
  },
});

interface CategoryDetailProps {}

const CategoryDetail = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'CategoryDetail'>) => {
  const { category } = route.params;
  const { category_name } = category;

  const getProductsApi = useApi(productsApi.getProductsByCategory);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getProductsApi.request(category_name);
  }, []);

  let offset = 6;

  const dataArray = [...getProductsApi.data.slice(0, offset)];

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await getProductsApi.request(category_name);
      dataArray.push(...getProductsApi.data.slice(0, offset));
      setRefreshing(false);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreData = async () => {
    if (dataArray.length < getProductsApi.data.length) {
      const newData = getProductsApi.data.slice(offset, offset + offset);
      dataArray.push(...newData);
      offset = offset + offset;
      return;
    }
    return (offset = 5);
  };

  return (
    <SafeAreaView style={styles.container}>
      {getProductsApi.loading ? (
        <ProductPageSkeleton header={category_name} />
      ) : getProductsApi.error ? (
        <ErrorLoading reload={() => navigation.goBack()} />
      ) : getProductsApi.data < 1 ? (
        <ErrorLoading
          buttonText="Go back"
          message="Oops.. no products in this category"
          reload={() => navigation.goBack()}
        />
      ) : (
        <>
          <StackHeader
            title={capitalize(category_name)}
            back={() => navigation.goBack()}
          />
          <Box style={styles.productContainer}>
            <FlatList
              refreshing={refreshing}
              onRefresh={onRefresh}
              onEndReachedThreshold={0.01}
              onEndReached={loadMoreData}
              ListFooterComponent={<ActivityIndicator />}
              numColumns={2}
              data={dataArray}
              keyExtractor={(item: Product) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('ProductDetail', { product: item })
                  }
                >
                  <ProductCard
                    product={item}
                    width={CARD_WIDTH}
                    height={CARD_HEIGHT}
                    marginRight={30}
                    noRating
                  />
                </TouchableWithoutFeedback>
              )}
            />
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default CategoryDetail;
