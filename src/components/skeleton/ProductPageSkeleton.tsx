import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { Box, StackHeader, theme, ProductFlatListSkeleton, Banner } from '..';
import { products } from '../../data';
import { capitalize } from '../../utils';

const { width } = Dimensions.get('window');

const CARD_SPACING = 30;
const CARD_HEIGHT = 220;
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
  banner: {
    alignItems: 'center',
    marginTop: 20,
  },
});

interface ProductPageSkeletonProps {
  header: string;
  banner?: any;
}
const ProductPageSkeleton = ({ header, banner }: ProductPageSkeletonProps) => {
  return (
    <>
      <StackHeader title={capitalize(header)} back={() => true} />
      {banner ? (
        <Box style={styles.banner}>
          <Banner src={banner} height={180} margin={false} />
        </Box>
      ) : null}
      <Box style={styles.productContainer}>
        <ProductFlatListSkeleton
          numColummns={2}
          horizontal={false}
          scrollIndicator={false}
          data={products}
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          marginRight={30}
        />
      </Box>
    </>
  );
};

export default ProductPageSkeleton;
