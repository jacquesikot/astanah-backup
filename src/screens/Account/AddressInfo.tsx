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
  NoContent,
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
    alignItems: 'center',
  },
});
const { height } = Dimensions.get('window');

interface AddressInfoProps {}

const AddressInfo = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'AddressInfo'>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { user } = useAppContext();
  const getBillingApi = useApi(billingApi.getBilling);
  const deleteBillingApi = useApi(billingApi.deleteBilling);

  useEffect(() => {
    getBillingApi.request(user.id);
  }, []);

  const handleDelete = async (billing_id: number) => {
    setLoading(true);
    await deleteBillingApi.request(billing_id);
    if (deleteBillingApi.error) {
      setError(true);
      setLoading(false);
      return;
    }
    getBillingApi.request(user.id);
    navigation.navigate('Profile');
    return setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {getBillingApi.loading ? (
        <BillingSkeleton back={true} />
      ) : getBillingApi.error ? (
        <ErrorLoading reload={getBillingApi.request(user.id)} />
      ) : getBillingApi.data < 1 ? (
        <NoContent
          title="Address"
          back={() => navigation.goBack()}
          onPress={() => navigation.navigate('AddAddress')}
          buttonText="Add Address"
          message="No Addreses found"
        />
      ) : (
        <>
          <Box style={{ alignItems: 'center', height: height * 0.8 }}>
            <ActivityIndicator visible={loading} opacity={0.8} />
            <StackHeader title="Address" back={() => navigation.goBack()} />
            <ErrorMessage
              error="An unexpected error occured. Try again.."
              visible={error}
            />
            <Box
              marginTop="s"
              marginBottom="m"
              style={{ height: '85%', paddingBottom: 10 }}
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                data={getBillingApi.data}
                keyExtractor={(item: BillingInfo) => item.user_id.toString()}
                renderItem={({ item }) => (
                  <AddressItem
                    trash={() => handleDelete(item.id ? item.id : 0)}
                    edit={() =>
                      navigation.navigate('EditAddress', { address: item })
                    }
                    billing={item}
                  />
                )}
              />
            </Box>
          </Box>
          <Box style={{ height: height * 0.2 }}>
            <Button
              label="Add Address"
              onPress={() => navigation.navigate('AddAddress')}
              noShadow
            />
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default AddressInfo;
