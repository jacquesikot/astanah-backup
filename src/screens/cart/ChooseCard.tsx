import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, Dimensions, Alert } from 'react-native';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import { CartNavParamList, CustomerCardDetailsProp } from '../../../types';
import {
  Box,
  CustomerCard,
  StackHeader,
  BillingSkeleton,
  ErrorLoading,
  ActivityIndicator,
  NoContent,
  theme,
  Button,
  Text,
  ErrorMessage,
} from '../../components';
import { useApi } from '../../hooks';
import paymentCardApi from '../../api/paymentCard';
import orderApi from '../../api/order';
import { useAppContext } from '../../context/context';
import paymentApi, { IChargeData } from '../../api/paymentClient';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
});

const PaymentInfo = ({
  navigation,
}: StackScreenProps<CartNavParamList, 'ChooseCard'>) => {
  const {
    user,
    manageCart,
    cart,
    address,
    setAddress,
    cartTotal,
  } = useAppContext();

  const [card, setCard] = useState<CustomerCardDetailsProp>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getPaymentCardApi = useApi(paymentCardApi.getCards);
  const newOrderApi = useApi(orderApi.newOrder);

  useEffect(() => {
    getPaymentCardApi.request(user.id);
  }, []);

  const order: any = {
    user_id: user.id,
    payment_method: 'card',
    set_paid: 1,
    billing_id: address.id,
    products: cart,
    status: 'processing',
    total: cartTotal.toString(),
  };

  const public_key = 'FLWPUBK_TEST-ba55d43d5f3c5a83c97daa995fe2d1f4-X';

  const handleCard = async () => {
    setLoading(true);
    const data: IChargeData = {
      public_key,
      tx_ref: Math.random().toString(),
      card_number: '5531886652142950',
      cvv: '564',
      expiry_month: '09',
      expiry_year: '32',
      amount: '5000',
      currency: 'NGN',
      type: 'card',
      phone_number: '09059032943',
      fullName: 'Jacques Ikot',
      email: 'jacquesikot@gmail.com',
      pin: '3310',
    };
    const response = await paymentApi.cardCharge(data);
    console.log(response.data);
    setLoading(false);
  };

  const handleOrder = async () => {
    try {
      if (!card) return Alert.alert('Card', 'Please select a payment card');
      setLoading(true);
      await newOrderApi.request(order);
      if (newOrderApi.error) {
        setError(true);
        return setLoading(false);
      }
      manageCart('EMPTY_CART');
      setAddress({});
      navigation.navigate('Success');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {getPaymentCardApi.loading ? (
        <BillingSkeleton back={true} title="Choose Card" />
      ) : getPaymentCardApi.error || error ? (
        <ErrorLoading reload={() => getPaymentCardApi.request(user.id)} />
      ) : getPaymentCardApi.data < 1 ? (
        <NoContent
          title="Choose Card"
          back={() => navigation.goBack()}
          onPress={() => navigation.navigate('AddAddress')}
          buttonText="Add Card"
          message="No Payment cards found.."
        />
      ) : (
        <>
          <ActivityIndicator visible={loading} opacity={0.8} />
          <Box style={{ alignItems: 'center', height: height * 0.8 }}>
            <StackHeader
              title="Choose Card"
              back={() => navigation.goBack()}
              plus={() => navigation.navigate('AddCard')}
            />
            <ErrorMessage visible={error} error="An unexpected error occured" />
            <Box marginTop="s" marginBottom="m" style={{ height: '85%' }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={getPaymentCardApi.data}
                keyExtractor={(item: CustomerCardDetailsProp) =>
                  item.id.toString()
                }
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback onPress={() => setCard(item)}>
                    <Box style={{ marginVertical: 8 }}>
                      <CustomerCard
                        customerCard={item}
                        borderColor={item === card ? 'primary' : 'light'}
                      />
                    </Box>
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
            <Box style={{ height: height * 0.2 }}>
              <Button
                noShadow
                label={`Pay ZK${cartTotal}`}
                onPress={handleCard}
              />
            </Box>
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default PaymentInfo;
