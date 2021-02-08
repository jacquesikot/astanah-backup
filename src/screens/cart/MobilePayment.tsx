import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Text, Button, theme, ActivityIndicator } from '../../components';
import paymentApi, { IMobilePayment } from '../../api/paymentClient';
import { useAppContext } from '../../context/context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
});

interface MobilePaymentProps {}
const MobilePayment = () => {
  const { cartTotal, user } = useAppContext();

  const handleSubmit = async () => {
    setLoading(true);
    const data: IMobilePayment = {
      tx_ref: Math.random().toString(),
      amount: cartTotal.toString(),
      currency: 'ZMW',
      email: user.email,
      phone_number: '054709929220',
      network: 'MTN',
      fullname: user.first_name,
      order_id: 'URF_MMGH_1585323540079_5981535',
    };
    const response = await paymentApi.mobilePayment(data);
    console.log(response.data);
    setLoading(false);
  };

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <Text variant="b1" color="dark" marginBottom="xl">
        Mobile Payment
      </Text>
      <Button label={`Pay ZK${cartTotal}`} onPress={handleSubmit} noShadow />
    </SafeAreaView>
  );
};

export default MobilePayment;
