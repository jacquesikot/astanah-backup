import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {
  BillingCardSkeleton,
  theme,
  Box,
  StackHeader,
  Button,
} from '../../components';
import { BillingInfo } from '../../../types';
import { addresses } from '../../data';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    alignItems: 'center',
  },
  noItem: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: '20%',
  },
});

interface BillingSkeletonProps {
  back: any;
  title?: string;
}

const { height } = Dimensions.get('window');

const BillingSkeleton = ({ back, title }: BillingSkeletonProps) => {
  const titleValue = title ? title : 'Address';
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ alignItems: 'center', height: height * 0.8 }}>
        <StackHeader title={titleValue} back={() => back} />
        <Box marginTop="s" marginBottom="m">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={addresses}
            keyExtractor={(item: BillingInfo) => item.user_id.toString()}
            renderItem={({ item }) => <BillingCardSkeleton trash />}
          />
        </Box>
      </Box>
      <Box style={{ height: height * 0.2 }}>
        <Button
          label={''}
          onPress={() => true}
          color={theme.colors.offWhite2}
        />
      </Box>
    </SafeAreaView>
  );
};

export default BillingSkeleton;
