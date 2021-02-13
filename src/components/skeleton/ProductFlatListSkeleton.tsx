import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ProductSkeleton } from '..';
import { Product } from '../../../types';

const styles = StyleSheet.create({
  container: {},
});

interface ProductFlatListSkeletonProps {
  data: Product[];
  horizontal: boolean;
  scrollIndicator: boolean;
  width: number;
  height: number;
  numColummns: number | undefined;
  marginRight?: number;
}
const ProductFlatListSkeleton = ({
  data,
  horizontal,
  scrollIndicator,
  width,
  height,
  numColummns,
  marginRight,
}: ProductFlatListSkeletonProps) => {
  const noOfColumnsValue = numColummns ? numColummns : undefined;
  const marginRightValue = marginRight ? marginRight : 10;
  return (
    <FlatList
      numColumns={noOfColumnsValue}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={scrollIndicator}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <ProductSkeleton
          width={width}
          height={height}
          marginRight={marginRightValue}
        />
      )}
    />
  );
};

export default ProductFlatListSkeleton;
