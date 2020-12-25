import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import {
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native-gesture-handler';
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

const { width } = Dimensions.get('window');

const CARD_SPACING = 30;
const CARD_HEIGHT = 240;
const CARD_WIDTH = (width - CARD_SPACING - theme.spacing.xl * 2) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  productContainer: {
    marginTop: 20,
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

  useEffect(() => {
    getProductsApi.request(category_name);
  }, []);

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
              numColumns={2}
              data={getProductsApi.data}
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
