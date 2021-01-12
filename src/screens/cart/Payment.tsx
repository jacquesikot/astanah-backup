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
  { id: 2, title: 'PayPal', icon: <PayPalIcon />, method: 'paypal' },
  { id: 3, title: 'Bank Transfer', icon: <BankTransferIcon />, method: 'cash' },
];

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

interface PaymentProps {}

const Payment = ({
  navigation,
}: StackScreenProps<CartNavParamList, 'Payment'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ height }}>
        <StackHeader title="Payment" back={() => navigation.goBack()} />

        <FlatList
          showsVerticalScrollIndicator={true}
          bounces={false}
          data={paymentOptions}
          keyExtractor={(item: PaymentOptions) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              underlayColor={theme.colors.light}
              onPress={() => navigation.navigate('ChooseCard')}
            >
              <ListItem key={index} label={item.title} icon={item.icon} />
            </TouchableHighlight>
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Payment;
