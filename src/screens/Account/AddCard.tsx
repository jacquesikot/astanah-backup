import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Box,
  Text,
  theme,
  ActivityIndicator,
  ErrorMessage,
  TextInput,
  Button,
  StackHeader,
} from '../../components';
import { AccountNavParamList } from '../../../types';
import { useApi } from '../../hooks';
import paymentCardApi from '../../api/paymentCard';
import { useAppContext } from '../../context/context';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    flex: 1,
  },
  form: {
    alignItems: 'center',
    marginTop: 15,
  },
});

const PaymentCardSchema = Yup.object().shape({
  card_number: Yup.string().min(16).max(16).required(),
  card_holder_name: Yup.string().min(2).max(50).required(),
  card_exp_date: Yup.string().required(),
});
const { height } = Dimensions.get('window');

interface AddCardProps {}
interface FormDetails {
  card_number: string;
  card_holder_name: string;
  card_exp_date: string;
}

const AddCard = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'AddCard'>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);

  const addPaymentCardApi = useApi(paymentCardApi.addCard);
  const { user } = useAppContext();

  const handleSubmit = async (formDetails: FormDetails) => {
    const { card_number, card_holder_name, card_exp_date } = formDetails;
    setLoading(true);
    await addPaymentCardApi.request({
      user_id: user.id,
      card_number,
      card_holder_name,
      card_exp_date,
    });
    if (addPaymentCardApi.data.length < 1) {
      setServerError(true);
      return setLoading(false);
    }
    navigation.navigate('Profile');
    return setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <StackHeader back={() => navigation.goBack()} title="Add Card" />
      <Formik
        validationSchema={PaymentCardSchema}
        initialValues={{
          card_number: '',
          card_holder_name: '',
          card_exp_date: '',
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          resetForm,
        }) => (
          <Box>
            <Box
              style={{ alignItems: 'center', marginBottom: -15, marginTop: 5 }}
            >
              <ErrorMessage
                error="An unexpected error occured"
                visible={addPaymentCardApi.error}
              />
            </Box>
            <Box style={styles.form}>
              <TextInput
                placeholder="Card Number"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                textContentType="creditCardNumber"
                onChangeText={handleChange('card_number')}
                onBlur={handleBlur('card_number')}
                error={errors.card_number}
                touched={touched.card_number}
              />
              {errors && (
                <Text variant="b3" color="red">
                  {errors.card_number}
                </Text>
              )}
            </Box>
            <Box style={styles.form}>
              <TextInput
                placeholder="Card Holder Name"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                textContentType="name"
                onChangeText={handleChange('card_holder_name')}
                onBlur={handleBlur('card_holder_name')}
                error={errors.card_holder_name}
                touched={touched.card_holder_name}
              />
              {errors && (
                <Text variant="b3" color="red">
                  {errors.card_holder_name}
                </Text>
              )}
            </Box>
            <Box style={styles.form}>
              <TextInput
                placeholder="Card Expiry Date"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={handleChange('card_exp_date')}
                onBlur={handleBlur('card_exp_date')}
                error={errors.card_exp_date}
                touched={touched.card_exp_date}
              />
              {errors && (
                <Text variant="b3" color="red">
                  {errors.card_exp_date}
                </Text>
              )}
            </Box>
            <Box style={[styles.form, { marginTop: height * 0.4 }]}>
              <Button noShadow label="Add Card" onPress={handleSubmit} />
            </Box>
          </Box>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default AddCard;
