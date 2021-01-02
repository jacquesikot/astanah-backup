import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
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
}

const BillingSkeleton = ({ back }: BillingSkeletonProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ alignItems: 'center' }}>
        <StackHeader title="Address" back={() => back} />
        <Box
          marginTop="s"
          marginBottom="m"
          style={{ height: '75%', paddingBottom: 10 }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={addresses}
            keyExtractor={(item: BillingInfo) => item.user_id.toString()}
            renderItem={({ item }) => <BillingCardSkeleton trash />}
          />
        </Box>
        <Button label="Add Address" onPress={() => true} />
      </Box>
    </SafeAreaView>
  );
};

export default BillingSkeleton;
