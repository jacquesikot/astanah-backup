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
import storage from '../utils/cache';

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const getFavorites = async () => {
    setLoading(true);
    const favorites = await storage.permanentGet('user_favorites');
    if (favorites === null) {
      setError(true);
      setLoading(false);
      return;
    }
    setFavorites(favorites);
    setLoading(false);
    return;
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ProductPageSkeleton header="Favorites" />
      ) : error ? (
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
                data={favorites}
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
