import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import {
  Box,
  LikeButton,
  ProductDetailImgSlider,
  StackHeader,
  Text,
  theme,
  Button,
  ProductCard,
  QuantityModal,
  ProductFlatListSkeleton,
} from '../components';
import { FavoriteProps, HomeNavParamList, Product } from '../../types';
import { discountPrecentage, numberWithCommas } from '../utils';
import { useAppContext } from '../context/context';
import { useApi } from '../hooks';
import productsApi from '../api/products';
import favoritesApi from '../api/favorites';
import storage from '../utils/cache';
import { products } from '../data';

const { width } = Dimensions.get('window');
const CARD_WIDTH = 141;
const CARD_HEIGHT = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    width,
  },
  titleBox: {
    flexDirection: 'row',
    width,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    marginTop: 40,
  },
  rowBox: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  likeButton: {
    borderWidth: 1,
    width: 70,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.light,
    position: 'absolute',
    left: width - 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    top: 2,
  },
  discount: {
    marginLeft: theme.spacing.xl,
    marginTop: 3,
    flexDirection: 'row',
  },
});

interface ProductDetailProps {}

const ProductDetail = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'ProductDetail'>) => {
  const { isProductInCart, user } = useAppContext();

  const { product } = route.params;

  const [favoriteButton, setFavoriteButton] = useState<boolean>(false);

  const [modal, setModal] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>();
  const [favoritesData, setFavoritesData] = useState<any[]>([]);

  const {
    title,
    regular_price,
    sale_price,
    short_description,
    gallery,
    categories,
  } = product;

  const price = Number(regular_price).toFixed(2);
  const salePrice = Number(sale_price).toFixed(2);

  const getProductsApi = useApi(productsApi.getProductsByCategory);

  const check = async () => {
    try {
      setFavoriteButton(false);

      const response = await favoritesApi.getFavorites(user.id);
      const data: any = response.data;
      setFavoritesData(data);
      const res = data.some((f: any) => f.id === product.id);

      res && setTouched(true);

      setFavoriteButton(true);

      if (res) return true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    check();
    getProductsApi.request(gallery);
  }, []);

  const addToFavorites = async () => {
    try {
      if (touched) return;
      Alert.alert('Favorites', 'Added to favorites');
      await favoritesApi.addFavorite({
        user_id: user.id,
        product_id: product.id,
      });
      setFavoritesData([...favoritesData, product]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = async () => {
    try {
      Alert.alert('Favorites', 'Removed from favorites');
      const favoriteToDelete = favoritesData.find(({ id }) => {
        return id === product.id;
      });
      if (favoriteToDelete)
        await favoritesApi.deleteFavorite(favoriteToDelete.favorite_id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavorites = async () => {
    try {
      if (favoritesData.some((f: any) => f.id === product.id)) {
        setTouched(false);
        await removeFromFavorites();
      }
      setTouched(true);
      await addToFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  const images = categories && categories.split(', ');

  return (
    <SafeAreaView style={styles.container}>
      <Box>
        <StackHeader title={title} back={() => navigation.goBack()} />
        <ScrollView
          scrollEventThrottle={16}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <ProductDetailImgSlider banners={images} />

          <Box style={styles.titleBox}>
            <Text
              numberOfLines={2}
              variant="h3"
              color="primary"
              style={{ width: width - theme.spacing.xl * 2 }}
            >
              {title}
            </Text>
          </Box>
          <Box style={styles.rowBox}>
            <Box style={{ flex: 1 }} />
          </Box>
          <Box style={styles.rowBox}>
            <Text variant="h3" color="secondary" marginTop="s">
              {sale_price
                ? 'ZK' + ' ' + numberWithCommas(Number(salePrice))
                : 'ZK' + ' ' + numberWithCommas(Number(price))}
            </Text>
            <Box style={{ flex: 1 }} />
            <Box style={styles.likeButton} visible={favoriteButton}>
              <TouchableOpacity onPress={handleFavorites}>
                <LikeButton touched={touched} />
              </TouchableOpacity>
            </Box>
          </Box>
          <Box style={styles.discount}>
            <Text variant="b2B" color="grey" textDecorationLine="line-through">
              {sale_price ? 'ZK' + ' ' + numberWithCommas(Number(price)) : ''}
            </Text>
            <Box style={{ width: 5 }} />
            <Text variant="b2B" color="red">
              {sale_price
                ? discountPrecentage(
                    Number(regular_price),
                    Number(sale_price)
                  ) + '%Off'
                : ''}
            </Text>
          </Box>
          <Box style={styles.rowBox}>
            <Text variant="h4" color="primary" marginTop="m" marginBottom="m">
              Description
            </Text>
            <Box style={{ flex: 1 }} />
          </Box>
          <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Text variant="b3" color="dark" style={{ lineHeight: 20 }}>
              {short_description
                ? short_description
                : 'Sorry, no description available'}
            </Text>
          </Box>
          <Box style={styles.rowBox}>
            <Text variant="h4" color="primary" marginTop="xl" marginBottom="m">
              You Might Also Like
            </Text>
            <Box style={{ flex: 1 }} />
          </Box>
          <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
            {getProductsApi.loading ? (
              <ProductFlatListSkeleton
                data={products}
                horizontal={true}
                scrollIndicator={false}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                numColummns={undefined}
                marginRight={10}
              />
            ) : (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={getProductsApi.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.push('ProductDetail', { product: item })
                    }
                  >
                    <ProductCard
                      product={item}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT}
                      marginRight={20}
                      noRating
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            )}
          </Box>
          <Box style={styles.button}>
            <Button
              noShadow
              label="Add to Cart"
              onPress={() => {
                if (isProductInCart(product))
                  return Alert.alert('Cart', 'Product already in cart');
                setModal(true);
              }}
            />
          </Box>
        </ScrollView>
      </Box>
      <QuantityModal
        visible={modal}
        closeModal={() => setModal(false)}
        product={product}
      />
    </SafeAreaView>
  );
};

export default ProductDetail;
