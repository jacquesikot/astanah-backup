import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Box,
  HomeHeader,
  theme,
  BannerSlider,
  Text,
  HomeLink,
  Banner,
  HomeCategorySkeleton,
  ProductFlatListSkeleton,
} from '..';
import { SLIDE_HEIGHT } from '../home/BannerSlider';
import { CARD_MARGIN } from '../card/ProductCard';
import { HEADER_HEIGHT } from '../home/HomeHeader';
import homeBanners from '../../data/homeBanner';
import { categories, products } from '../../data';

const { width } = Dimensions.get('window');
const NEW_HEADER_HEIGHT = HEADER_HEIGHT + 10;
export const CARD_WIDTH = 141;
export const CARD_HEIGHT = 210;
const LOWER_CARD_HEIGHT = 240;
const CARD_SPACING = 30;
const LOWER_CARD_WIDTH = (width - CARD_SPACING - theme.spacing.xl * 2) / 2;

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

interface HomeSkeletonProps {}
const HomeSkeleton = () => {
  return (
    <Box>
      <View
        style={{
          zIndex: 1000,
          elevation: 1000,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <HomeHeader favorite={() => true} notification={() => true} />
      </View>
      <ScrollView
        scrollEventThrottle={16}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Box style={styles.banner}>
          <BannerSlider banners={homeBanners} />
        </Box>
        <Box style={styles.linkText}>
          <Text variant="h5" color="primary">
            Category
          </Text>
          <Box style={{ flex: 1 }} />
          <HomeLink label="All categories" onPress={() => true} />
        </Box>
        <Box
          style={{
            marginBottom: 15,
            alignItems: 'center',
            paddingLeft: 20,
          }}
        >
          <HomeCategorySkeleton data={categories} />
        </Box>
        <Box style={styles.linkText}>
          <Text variant="h5" color="primary">
            Sale
          </Text>
          <Box style={{ flex: 1 }} />
          <HomeLink label="See more" onPress={() => true} />
        </Box>
        <Box style={{ paddingLeft: 20 }}>
          <ProductFlatListSkeleton
            data={products}
            horizontal={true}
            scrollIndicator={false}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            numColummns={undefined}
            marginRight={10}
          />
        </Box>
        <Box style={{ alignItems: 'center', marginRight: -20, marginTop: 20 }}>
          <Banner
            src={require('../../../assets/offer/offer2.jpg')}
            margin
            height={180}
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
          <ProductFlatListSkeleton
            numColummns={2}
            horizontal={false}
            scrollIndicator={false}
            data={products}
            width={LOWER_CARD_WIDTH}
            height={LOWER_CARD_HEIGHT}
            marginRight={30}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeSkeleton;
