import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { AccountNavParamList, CustomerCardDetailsProp } from '../../../types';
import {
  Box,
  CustomerCard,
  StackHeader,
  BillingSkeleton,
  ErrorLoading,
  NoContent,
  theme,
  Button,
  ActivityIndicator,
} from '../../components';
import { useApi } from '../../hooks';
import paymentCardApi from '../../api/paymentCard';
import { useAppContext } from '../../context/context';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    height,
  },
});

const PaymentInfo = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'PaymentInfo'>) => {
  const { user } = useAppContext();
  const getPaymentCardApi = useApi(paymentCardApi.getCards);
  const deletePaymentCardApi = useApi(paymentCardApi.deleteCard);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getPaymentCardApi.request(user.id);
  }, []);

  const onDelete = async (id: number) => {
    setLoading(true);
    await deletePaymentCardApi.request(id);
    if (deletePaymentCardApi.data.length < 1) {
      setError(true);
      setLoading(false);
    }
    navigation.navigate('Profile');
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {getPaymentCardApi.loading ? (
        <BillingSkeleton back={true} title="Credit & Debit Card" />
      ) : getPaymentCardApi.error ? (
        <ErrorLoading reload={() => getPaymentCardApi.request(user.id)} />
      ) : getPaymentCardApi.data < 1 ? (
        <NoContent
          title="Credit & Debit Card"
          back={() => navigation.goBack()}
          onPress={() => navigation.navigate('AddCard')}
          buttonText="Add Card"
          message="No Payment cards found"
        />
      ) : (
        <>
          <Box style={{ alignItems: 'center', height: height * 0.8 }}>
            <ActivityIndicator visible={loading} opacity={0.8} />
            <StackHeader
              title="Credit & Debit Card"
              back={() => navigation.goBack()}
            />
            <Box
              marginTop="s"
              marginBottom="xl"
              style={{ height: '85%', paddingBottom: 10 }}
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                data={getPaymentCardApi.data}
                keyExtractor={(item: CustomerCardDetailsProp) =>
                  item.id.toString()
                }
                renderItem={({ item }) => (
                  <Box style={{ marginVertical: 8 }}>
                    <CustomerCard
                      deleteItem={() => onDelete(item.id)}
                      customerCard={item}
                      borderColor="light"
                    />
                  </Box>
                )}
              />
            </Box>
            <Box style={{ height: 0.2 }}>
              <Button
                noShadow
                label="Add Card"
                onPress={() => navigation.navigate('AddCard')}
              />
            </Box>
          </Box>
        </>
      )}
    </SafeAreaView>
  );
};

export default PaymentInfo;
