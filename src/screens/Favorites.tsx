import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native-gesture-handler';

import {
  Box,
  Text,
  ProductCard,
  StackHeader,
  theme,
  ProductPageSkeleton,
  ErrorLoading,
} from '../components';
import { HomeNavParamList, Product } from '../../types';
import { useApi } from '../hooks';
import productsApi from '../api/products';
import { LOWER_CARD_HEIGHT, LOWER_CARD_WIDTH } from '../screens/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  products: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 80,
    marginLeft: theme.spacing.xl,
  },
  noItem: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
  },
});

interface FavoritesProps {
  product: Product;
}

const Favorites = ({
  navigation,
}: StackScreenProps<HomeNavParamList, 'Favorites'>) => {
  const getProductsApi = useApi(productsApi.getProducts);

  useEffect(() => {
    getProductsApi.request();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {getProductsApi.loading ? (
        <ProductPageSkeleton header="Favorites" />
      ) : getProductsApi.error ? (
        <ErrorLoading reload={getProductsApi.request()} />
      ) : getProductsApi.data < 1 ? (
        <Box style={styles.noItem}>
          <Image
            source={require('../../assets/empty_cart.png')}
            style={{ width: 287, height: 218.5 }}
          />
          <Text variant="h4" color="primary" marginTop="m">
            No Products in Favorites
          </Text>
        </Box>
      ) : (
        <>
          <StackHeader
            title="Favorite Products"
            back={() => navigation.goBack()}
          />
          <Box style={styles.products}>
            <Box>
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
                      width={LOWER_CARD_WIDTH}
                      height={LOWER_CARD_HEIGHT}
                      marginRight={30}
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default Favorites;
