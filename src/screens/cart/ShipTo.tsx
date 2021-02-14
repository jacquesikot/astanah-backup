import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native-gesture-handler';
import * as Browser from 'expo-web-browser';
import Linking from 'expo-linking';
import Constants from 'expo-constants';

import {
  AddressItem,
  Box,
  StackHeader,
  theme,
  Button,
  BillingSkeleton,
  ErrorLoading,
  Text,
  ActivityIndicator,
  ErrorMessage,
} from '../../components';
import { CartNavParamList, BillingInfo } from '../../../types';
import billingApi from '../../api/billing';
import { useApi } from '../../hooks';
import {
  useAppContext,
  IMPORT_CHARGES,
  SHIPPING_COST,
} from '../../context/context';
import orderApi from '../../api/order';
import flutterPay, { CardPayProps } from '../../api/flutterPay';
import { numberWithCommas } from '../../utils';
import { add } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

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

const ShipTo = ({
  navigation,
}: StackScreenProps<CartNavParamList, 'ShipTo'>) => {
  const getBillingApi = useApi(billingApi.getBilling);

  const { user, setAddress, cart, cartTotal, manageCart } = useAppContext();

  const [address, setAddressState] = useState<BillingInfo>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const flutterPayment = useApi(flutterPay.sendPay);
  const newOrderApi = useApi(orderApi.newOrder);

  const finalAmount = Number(cartTotal) + IMPORT_CHARGES + SHIPPING_COST;

  // Addres problem in storing data
  const saveOrder = async () => {
    try {
      const order: any = {
        user_id: user.id,
        payment_method: 'card',
        set_paid: 1,
        billing_id: address?.id,
        products: cart,
        status: 'processing',
        total: finalAmount.toString(),
      };

      await newOrderApi.request(order);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    if (!address) return Alert.alert('Address', 'Please Select an address');
    const data: CardPayProps = {
      amount: finalAmount.toString(),
      consumer_id: user.id.toString(),
      email: user.email,
      name: `${user.first_name} ${user.last_name}`,
      phonenumber: address.phone,
      redirect_url: Constants.linkingUri,
    };
    setLoading(true);
    const payRequest = await flutterPayment.request(data);
    if (flutterPayment.error) return setLoading(false);
    const link = await payRequest.data.data.link;
    setLoading(false);
    const browser: any = await Browser.openAuthSessionAsync(
      link,
      Constants.linkingUri
    );
    console.log(browser);
    const redirect_link = browser.url;
    if (redirect_link.includes('status=success')) {
      manageCart('EMPTY_CART');
      setAddress({});
      navigation.navigate('Success');
      await saveOrder();
    } else if (browser.type !== 'success') {
      setError(true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getBillingApi.request(user.id);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {getBillingApi.loading ? (
        <BillingSkeleton back={true} title="Ship To" />
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
            <Text variant="b1" color="primary" marginTop="m" marginBottom="xl">
              Add address in the account screen
            </Text>
          </Box>
        </Box>
      ) : (
        <>
          <ActivityIndicator visible={loading} opacity={0.8} />
          <Box style={{ alignItems: 'center', height: height * 0.8 }}>
            <StackHeader title="Ship To" back={() => navigation.goBack()} />
            <ErrorMessage
              error="An error occured while making payment"
              visible={error}
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
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
          </Box>
          <Box style={{ height: height * 0.2 }}>
            <Button
              label={`Pay ZK${numberWithCommas(finalAmount)}`}
              onPress={handleSubmit}
              noShadow
            />
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default ShipTo;
