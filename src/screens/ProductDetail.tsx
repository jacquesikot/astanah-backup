import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
import { HomeNavParamList } from '../../types';
import { numberWithCommas } from '../utils';
import { useAppContext } from '../context/context';
import { useApi } from '../hooks';
import productsApi from '../api/products';

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
    paddingRight: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
});

interface ProductDetailProps {}

const ProductDetail = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'ProductDetail'>) => {
  const { isProductInCart } = useAppContext();
  const [modal, setModal] = useState<boolean>(false);

  const { product } = route.params;

  const {
    Title,
    Meta_thumbnail_id,
    Regular_price,
    Sale_price,
    Short_Desc,
    Gallery,
  } = product;
  const price = Number(Regular_price).toFixed(2);
  const salePrice = Number(Sale_price).toFixed(2);

  const getProductsApi = useApi(productsApi.getProducts);

  useEffect(() => {
    getProductsApi.request();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Box>
        <StackHeader title={Title} back={() => navigation.goBack()} />
        <ScrollView
          scrollEventThrottle={16}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* <ProductDetailImgSlider banners={} /> */}
          <Box
            style={{
              width: width * 0.9,
              height: height * 0.4,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={{ uri: Meta_thumbnail_id }}
              style={{
                width: width * 0.8,
                height: height * 0.45,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Box>
          <Box style={styles.titleBox}>
            <Text
              numberOfLines={3}
              variant="h4"
              color="primary"
              style={{ width: width * 0.78 }}
            >
              {Title}
            </Text>
            <Box style={{ flex: 1 }} />
            <LikeButton />
          </Box>
          <Box style={styles.rowBox}>
            <Ratings rating={1} size={18} />
            <Box style={{ flex: 1 }} />
          </Box>
          <Box style={styles.rowBox}>
            <Text
              variant="h3"
              color="secondary"
              marginTop="s"
              letterSpacing={1}
            >
              {Sale_price
                ? 'ZK' + ' ' + numberWithCommas(Number(salePrice))
                : 'ZK' + ' ' + numberWithCommas(Number(price))}
            </Text>
            <Box style={{ flex: 1 }} />
          </Box>

          <Box style={styles.rowBox}>
            <Text variant="h4" color="primary" marginTop="m" marginBottom="m">
              Description
            </Text>
            <Box style={{ flex: 1 }} />
          </Box>
          <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Text variant="b3" color="grey" style={{ lineHeight: 20 }}>
              {Short_Desc ? Short_Desc : 'Sorry, no description available'}
            </Text>
          </Box>
          <Box style={styles.rowBox}>
            <Text variant="h4" color="primary" marginTop="m" marginBottom="m">
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
