import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Box,
  Button,
  StackHeader,
  Text,
  TextInput,
  theme,
  ActivityIndicator,
  ErrorMessage,
} from '../../components';
import { AccountNavParamList, BillingInfo } from '../../../types';
import useApi from '../../hooks/useApi';
import billingApi from '../../api/billing';
import { useAppContext } from '../../context/context';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  form: {
    alignItems: 'center',
    marginTop: 15,
  },
});

interface AddAddressProps {}

const { height } = Dimensions.get('window');

const AddressSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2)
    .max(50)
    .required('First name is a required field'),
  last_name: Yup.string()
    .min(2)
    .max(50)
    .required('Last name is a required field'),
  address: Yup.string().min(2).max(50).required('Address is a required field'),
  city: Yup.string().min(2).max(50).required('City is a required field'),
  postcode: Yup.string()
    .min(2)
    .max(50)
    .required('Postcode is a required field'),
  state: Yup.string().min(2).max(50).required('State is a required field'),
  country: Yup.string().min(2).max(50).required('Country is a required field'),
  phone: Yup.string().min(2).max(50).required('Phone is a required field'),
});

const AddAddress = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'AddAddress'>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const inputRef = useRef(null);

  const { user } = useAppContext();

  const getBillingApi = useApi(billingApi.addBilling);

  const handleSubmit = async (billingInfo: BillingInfo) => {
    Keyboard.dismiss();
    setLoading(true);
    await getBillingApi.request(billingInfo);
    if (getBillingApi.error) {
      setError(true);
      return setLoading(false);
    }
    navigation.navigate('Profile');
    return setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <StackHeader title="Add Address" back={() => navigation.goBack()} />
      <ScrollView decelerationRate={16} bounces={false}>
        <KeyboardAvoidingView behavior="padding">
          <Formik
            validationSchema={AddressSchema}
            initialValues={{
              user_id: user.id,
              first_name: '',
              last_name: '',
              address: '',
              city: '',
              state: '',
              postcode: '',
              country: '',
              phone: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
              <Box style={{ marginBottom: 100 }}>
                <Box style={{ alignItems: 'center', marginTop: 10 }}>
                  <ErrorMessage
                    error="An unexpected error has occured. Try again"
                    visible={error}
                  />
                </Box>
                <Box style={styles.form}>
                  <TextInput
                    placeholder="First Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="name"
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    error={errors.first_name}
                    touched={touched.first_name}
                    returnKeyType="next"
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.first_name}
                    </Text>
                  )}
                </Box>
                <Box style={styles.form}>
                  <TextInput
                    placeholder="Last Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="name"
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    error={errors.last_name}
                    touched={touched.last_name}
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.last_name}
                    </Text>
                  )}
                </Box>

                <Box style={styles.form}>
                  <TextInput
                    placeholder="Street Address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="streetAddressLine1"
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    error={errors.address}
                    touched={touched.address}
                    multiline
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.address}
                    </Text>
                  )}
                </Box>
                <Box style={styles.form}>
                  <TextInput
                    placeholder="City"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="addressCity"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    error={errors.city}
                    touched={touched.city}
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.city}
                    </Text>
                  )}
                </Box>
                <Box style={styles.form}>
                  <TextInput
                    placeholder="State/province/region"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="addressState"
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    error={errors.state}
                    touched={touched.state}
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.state}
                    </Text>
                  )}
                </Box>

                <Box style={styles.form}>
                  <TextInput
                    placeholder="Postcode"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="postalCode"
                    onChangeText={handleChange('postcode')}
                    onBlur={handleBlur('postcode')}
                    error={errors.postcode}
                    touched={touched.postcode}
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.postcode}
                    </Text>
                  )}
                </Box>
                <Box style={styles.form}>
                  <TextInput
                    placeholder="Country"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="addressState"
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                    error={errors.country}
                    touched={touched.country}
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.country}
                    </Text>
                  )}
                </Box>
                <Box style={styles.form}>
                  <TextInput
                    placeholder="Phone Number"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    error={errors.phone}
                    touched={touched.phone}
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.phone}
                    </Text>
                  )}
                </Box>

                <Box style={styles.form}>
                  <Button noShadow label="Add Address" onPress={handleSubmit} />
                </Box>
              </Box>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddress;
