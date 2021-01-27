import React, { useEffect, useState } from 'react';
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
} from '../components';
import { HomeNavParamList, Product } from '../../types';
import { LOWER_CARD_HEIGHT, LOWER_CARD_WIDTH } from '../screens/Home';
import favoritesApi from '../api/favorites';
import { useApi } from '../hooks';
import { useAppContext } from '../context/context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  products: {
    paddingTop: 20,
    paddingBottom: 80,
    marginLeft: theme.spacing.xl,
  },
  noItem: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: '20%',
  },
});

interface FavoritesProps {
  product: Product;
}

const Favorites = ({
  navigation,
}: StackScreenProps<HomeNavParamList, 'Favorites'>) => {
  const { user } = useAppContext();

  const getFavoritesApi = useApi(favoritesApi.getFavorites);

  useEffect(() => {
    getFavoritesApi.request(Number(user.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {getFavoritesApi.loading ? (
        <ProductPageSkeleton header="Favorites" />
      ) : getFavoritesApi.isEmpty ? (
        <>
          <StackHeader title="Favorites" back={() => navigation.goBack()} />
          <Box style={styles.noItem}>
            <Image
              source={require('../../assets/empty_cart.png')}
              style={{ width: 287, height: 218.5 }}
            />
            <Text variant="b1" color="primary" marginTop="m">
              No Products in Favorites
            </Text>
          </Box>
        </>
      ) : (
        <>
          <StackHeader title="Favorites" back={() => navigation.goBack()} />
          <Box style={styles.products}>
            <Box>
              <FlatList
                numColumns={2}
                data={getFavoritesApi.data}
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
