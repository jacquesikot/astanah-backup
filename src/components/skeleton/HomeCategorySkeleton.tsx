import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CategorySkeleton } from '..';
import { Category } from '../../../types';

const styles = StyleSheet.create({
  container: {},
});

interface HomeCategorySkeletonProps {
  data: Category[];
}
const HomeCategorySkeleton = ({ data }: HomeCategorySkeletonProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => <CategorySkeleton />}
    />
  );
};

export default HomeCategorySkeleton;
