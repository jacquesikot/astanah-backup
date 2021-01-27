import React, { useEffect } from 'react';
import {
  StyleSheet,
  Animated,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {
  Box,
  HomeHeader,
  theme,
  BannerSlider,
  Text,
  HomeLink,
  Banner,
  ProductCard,
  HomeCategory,
  ErrorLoading,
  HomeSkeleton,
} from '../components';
import { SLIDE_HEIGHT } from '../components/home/BannerSlider';
import { CARD_MARGIN } from '../components/card/ProductCard';
import { HomeNavParamList, Product, Category } from '../../types';
import { HEADER_HEIGHT } from '../components/home/HomeHeader';
import homeBanners from '../data/homeBanner';
import { useApi } from '../hooks';
import categoriesApi from '../api/categories';
import productsApi from '../api/products';

const { width } = Dimensions.get('window');
const NEW_HEADER_HEIGHT = HEADER_HEIGHT + 10;
export const CARD_WIDTH = 141;
export const CARD_HEIGHT = 205;
export const LOWER_CARD_HEIGHT = 230;
const CARD_SPACING = 30;
export const LOWER_CARD_WIDTH =
  (width - CARD_SPACING - theme.spacing.xl * 2) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  banner: {
    marginTop: NEW_HEADER_HEIGHT,
    marginBottom: 30,
    height: SLIDE_HEIGHT,
    alignItems: 'center',
  },
  linkText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    marginBottom: 15,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: theme.spacing.xl,
    marginTop: 20,
    marginRight: -CARD_MARGIN,
  },
});

interface HomeProps {}

const Home = ({ navigation }: StackScreenProps<HomeNavParamList, 'Home'>) => {
  const getCategoriesApi = useApi(categoriesApi.getCategories);
  const getProductsApi = useApi(productsApi.getProducts);
  const getSaleProductsApi = useApi(productsApi.getSaleProducts);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, NEW_HEADER_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, NEW_HEADER_HEIGHT],
    outputRange: [0, -NEW_HEADER_HEIGHT],
  });

  useEffect(() => {
    getCategoriesApi.request(20);
    getProductsApi.request();
    getSaleProductsApi.request();
  }, []);

  const offset = 6;

  const t = true;
  return (
    <SafeAreaView style={styles.container}>
      {getProductsApi.loading ||
      getCategoriesApi.loading ||
      getSaleProductsApi.loading ? (
        <HomeSkeleton />
      ) : getProductsApi.error ||
        getCategoriesApi.error ||
        getSaleProductsApi.error ? (
        <ErrorLoading reload={getProductsApi.request} />
      ) : (
        <Box>
          <Animated.View
            style={{
              zIndex: 1,
              elevation: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              transform: [{ translateY: translateY }],
            }}
          >
            <HomeHeader
              favorite={() => navigation.navigate('Favorites')}
              notification={() => navigation.navigate('Notifications')}
            />
          </Animated.View>
          <Animated.ScrollView
            scrollEventThrottle={16}
            bounces={false}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: scrollY } },
                },
              ],
              { useNativeDriver: true }
            )}
          >
            <Box style={styles.banner}>
              <BannerSlider banners={homeBanners} />
            </Box>
            <Box style={styles.linkText}>
              <Text variant="h5" color="primary">
                Top Categories
              </Text>
              <Box style={{ flex: 1 }} />
              <HomeLink
                label="All categories"
                onPress={() =>
                  navigation.navigate('Categories', {
                    categories: getCategoriesApi.data,
                  })
                }
              />
            </Box>
            <Box
              style={{
                marginBottom: 15,
                alignItems: 'center',
                paddingLeft: 20,
              }}
            >
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={getCategoriesApi.data}
                keyExtractor={(item: Category) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('CategoryDetail', {
                        category: item,
                      })
                    }
                  >
                    <HomeCategory category={item} index={index} />
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
            <Box style={styles.linkText}>
              <Text variant="h5" color="primary">
                Sales
              </Text>
              <Box style={{ flex: 1 }} />
              <HomeLink
                label="See more"
                onPress={() => navigation.navigate('Sale')}
              />
            </Box>
            <Box style={{ paddingLeft: 20 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={getSaleProductsApi.data}
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
                      marginRight={10}
                      noRating
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
            <Box
              style={{ alignItems: 'center', marginRight: -20, marginTop: 10 }}
            >
              <Banner
                src={require('../../assets/offer/offer2.jpg')}
                height={180}
                margin
              />
            </Box>
            <Box
              style={{
                marginLeft: theme.spacing.xl,
                marginTop: theme.spacing.xl,
              }}
            >
              <Text variant="h5" color="primary">
                For you
              </Text>
            </Box>
            <Box style={styles.products}>
              <FlatList
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                data={getProductsApi.data.slice(0, offset)}
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
                      noRating
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
            <Box style={{ marginBottom: 20, marginTop: 10 }}>
              <HomeLink
                label="Load more"
                onPress={() => navigation.navigate('LoadMore', { offset })}
              />
            </Box>
          </Animated.ScrollView>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default Home;

// TODO
// Refactor linkText to its own component
// Consider using flatlist to render home page for performance reasons
