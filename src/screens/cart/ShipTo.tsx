import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native-gesture-handler';

import {
  AddressItem,
  Box,
  StackHeader,
  theme,
  Button,
  BillingSkeleton,
  ErrorLoading,
  Text,
} from '../../components';
import { CartNavParamList, BillingInfo } from '../../../types';
import billingApi from '../../api/billing';
import { useApi } from '../../hooks';
import { useAppContext } from '../../context/context';

const { width, height } = Dimensions.get('window');
const BUTTON_TEXT = 'Payment';

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
  },
  outline: {
    backgroundColor: 'cyan',
  },
});

interface ShipToProps {}

const ShipTo = ({
  navigation,
}: StackScreenProps<CartNavParamList, 'ShipTo'>) => {
  const getBillingApi = useApi(billingApi.getBilling);

  const { user, setAddress } = useAppContext();

  const [address, setAddressState] = useState<BillingInfo>();

  useEffect(() => {
    getBillingApi.request(user.id);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {getBillingApi.loading ? (
        <BillingSkeleton back={true} title="Ship To" buttonText={BUTTON_TEXT} />
      ) : getBillingApi.error ? (
        <ErrorLoading reload={getBillingApi.request(user.id)} />
      ) : getBillingApi.data < 1 ? (
        <Box style={styles.noItem}>
          <StackHeader title="Ship To" back={() => navigation.goBack()} />
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
          <Box style={{ alignItems: 'center', height: height * 0.8 }}>
            <StackHeader
              title="Ship To"
              back={() => navigation.goBack()}
              plus={() => navigation.navigate('AddAddress')}
            />
            <Box
              marginTop="s"
              marginBottom="m"
              style={{ height: '85%', paddingBottom: 10 }}
            >
              <FlatList
                showsVerticalScrollIndicator={true}
                data={getBillingApi.data}
                keyExtractor={(item: BillingInfo) => item.user_id.toString()}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setAddressState(item);
                      setAddress(item);
                    }}
                  >
                    <AddressItem
                      borderColor={item === address ? 'primary' : 'light'}
                      billing={item}
                      // edit={() => navigation.navigate('EditAddress')}
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
          </Box>
          <Box style={{ height: height * 0.2 }}>
            <Button
              label={BUTTON_TEXT}
              onPress={() => navigation.navigate('Payment')}
            />
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default ShipTo;
