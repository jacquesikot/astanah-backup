import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

import { Box, ListItem, StackHeader, Text, theme } from '../../components';
import { BankTransferIcon, CardTransferIcon, PayPalIcon } from '../../Svg';
import { StackScreenProps } from '@react-navigation/stack';
import { CartNavParamList, PaymentOptions } from '../../../types';

const paymentOptions: PaymentOptions[] = [
  {
    id: 1,
    title: 'Credit Card or Debit Card',
    icon: <CardTransferIcon />,
    method: 'card',
  },
  {
    id: 2,
    title: 'Mobile Money',
    icon: <BankTransferIcon />,
    method: 'mobile-money',
  },
];

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

const Payment = ({
  navigation,
}: StackScreenProps<CartNavParamList, 'Payment'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ height }}>
        <StackHeader title="Payment" back={() => navigation.goBack()} />

        <TouchableHighlight
          underlayColor={theme.colors.light}
          onPress={() => navigation.navigate('ChooseCard')}
        >
          <ListItem
            label={paymentOptions[0].title}
            icon={paymentOptions[0].icon}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={theme.colors.light}
          onPress={() => navigation.navigate('MobilePayment')}
        >
          <ListItem
            label={paymentOptions[1].title}
            icon={paymentOptions[1].icon}
          />
        </TouchableHighlight>
      </Box>
    </SafeAreaView>
  );
};

export default Payment;
