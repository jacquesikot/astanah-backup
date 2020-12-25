import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { Box, StackHeader, theme, ProductFlatListSkeleton } from '..';
import { products } from '../../data';
import { capitalize } from '../../utils';

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

interface ProductPageSkeletonProps {
  header: string;
}
const ProductPageSkeleton = ({ header }: ProductPageSkeletonProps) => {
  return (
    <>
      <StackHeader title={capitalize(header)} back={() => true} />
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
