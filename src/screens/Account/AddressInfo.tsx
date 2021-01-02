import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import {
  BillingSkeleton,
  theme,
  ErrorLoading,
  Box,
  Text,
  StackHeader,
  Button,
  AddressItem,
  ActivityIndicator,
  ErrorMessage,
} from '../../components';
import { AccountNavParamList } from '../../../types';
import billingApi from '../../api/billing';
import { useApi } from '../../hooks';
import { BillingInfo } from '../../../types';
import { useAppContext } from '../../context/context';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  noItem: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const { width } = Dimensions.get('window');

interface AddressInfoProps {}

const AddressInfo = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'AddressInfo'>) => {
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);

  const { user } = useAppContext();
  const getBillingApi = useApi(billingApi.getBilling);
  const deleteBillingApi = useApi(billingApi.deleteBilling);

  useEffect(() => {
    getBillingApi.request(user.id);
  }, []);

  const handleDelete = async (billing_id: number) => {
    await deleteBillingApi.request(billing_id);
    // if (deleteBillingApi.error) return;
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      {getBillingApi.loading ? (
        <BillingSkeleton back={true} />
      ) : getBillingApi.error ? (
        <ErrorLoading reload={getBillingApi.request(user.id)} />
      ) : getBillingApi.data < 1 ? (
        <Box style={styles.noItem}>
          <StackHeader title="Address" back={() => navigation.goBack()} />
          <Box
            style={{
              marginTop: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../../assets/empty_cart.png')}
              style={{ width: 287, height: 218.5 }}
            />
            <Text variant="h4" color="primary" marginTop="m" marginBottom="xl">
              No Delivery Address Found..
            </Text>
            <Button
              label="Add Address"
              onPress={() => navigation.navigate('AddAddress')}
              width={width * 0.6}
            />
          </Box>
        </Box>
      ) : (
        <>
          <Box style={{ alignItems: 'center' }}>
            <ActivityIndicator
              visible={deleteBillingApi.loading}
              opacity={0.8}
            />
            <StackHeader title="Address" back={() => navigation.goBack()} />
            <ErrorMessage
              error="An unexpected error occured. Try again.."
              visible={deleteBillingApi.error}
            />
            <Box
              marginTop="s"
              marginBottom="m"
              style={{ height: '75%', paddingBottom: 10 }}
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                data={getBillingApi.data}
                keyExtractor={(item: BillingInfo) => item.user_id.toString()}
                renderItem={({ item }) => (
                  <AddressItem
                    trash={handleDelete(item.id)}
                    edit={() => true}
                    billing={item}
                  />
                )}
              />
            </Box>
            <Button
              label="Add Address"
              onPress={() => navigation.navigate('AddAddress')}
            />
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default AddressInfo;
