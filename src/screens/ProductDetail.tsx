import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
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
  Ratings,
  Button,
  ProductCard,
  QuantityModal,
} from '../components';
import { HomeNavParamList, Product } from '../../types';
import { discountPrecentage, numberWithCommas } from '../utils';
import { useAppContext } from '../context/context';
import { useApi } from '../hooks';
import productsApi from '../api/products';
import storage from '../utils/cache';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = 141;
const CARD_HEIGHT = 210;

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
    bottom: 1,
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
  const { isProductInCart } = useAppContext();

  const { product } = route.params;

  const [modal, setModal] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);

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

  const check = async (product: Product) => {
    try {
      const data = await storage.permanentGet('user_favorites');
      if (data.find((favorite: Product) => favorite.id === product.id))
        return true;
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const setTouchedButton = async () => {
    if (await check(product)) return setTouched(true);
    return setTouched(false);
  };

  useEffect(() => {
    setTouchedButton();
    getProductsApi.request(categories);
  }, []);

  const addToFavorites = async (product: Product) => {
    try {
      if (await check(product)) {
        return;
      }

      const favoritesArray = await storage.permanentGet('user_favorites');
      const newFavorites = [...favoritesArray, product];

      await storage.permanentStore('user_favorites', newFavorites);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = async (product: Product) => {
    try {
      const favoritesArray = await storage.permanentGet('user_favorites');
      const updatedFavorites = favoritesArray.filter(
        (favorite: Product) => favorite.id !== product.id
      );

      await storage.permanentStore('user_favorites', updatedFavorites);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavorites = async () => {
    try {
      if (await check(product)) {
        await removeFromFavorites(product);
        setTouched(false);
        alert('Removed from favorites');
        return;
      }
      await addToFavorites(product);
      setTouched(true);
      alert('Added to favorites');
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const images = gallery.split(', ');

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
            <Ratings rating={1} size={18} />
            <Box style={{ flex: 1 }} />
          </Box>
          <Box style={styles.rowBox}>
            <Text variant="h3" color="secondary" marginTop="s">
              {sale_price
                ? 'ZK' + ' ' + numberWithCommas(Number(salePrice))
                : 'ZK' + ' ' + numberWithCommas(Number(price))}
            </Text>
            <Box style={{ flex: 1 }} />
            <Box style={styles.likeButton}>
              <TouchableOpacity onPress={handleFavorites}>
                <LikeButton touched={touched} />
              </TouchableOpacity>
            </Box>
          </Box>
          <Box style={styles.discount}>
            <Text variant="b2B" color="grey" textDecorationLine="line-through">
              {sale_price
                ? 'ZK' + ' ' + numberWithCommas(Number(regular_price))
                : ''}
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
                  />
                </TouchableWithoutFeedback>
              )}
            />
          </Box>
          <Box style={styles.button}>
            <Button
              noShadow
              label="Add to Cart"
              onPress={() => {
                if (isProductInCart(product))
                  return alert('Product already in cart');
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
