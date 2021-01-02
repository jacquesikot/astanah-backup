import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { AccountNavParamList, User } from '../../../types';
import { useAppContext } from '../../context/context';
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
import { capitalize } from '../../utils';
import usersApi from '../../api/users';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  form: {
    alignItems: 'center',
    marginTop: 15,
  },
});

interface BasicInfoProps {}
const { height } = Dimensions.get('window');

const BasicInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'First name must be at least 3 characters')
    .max(50, 'First name must not exceed 50 characters')
    .required('First name is a required field'),
  lastName: Yup.string()
    .min(3, 'Last name must be at least 3 characters')
    .max(50, 'Last name must not exceed 50 characters')
    .required('Last name is a required field'),
});

const BasicInfo = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'BasicInfo'>) => {
  const { user, addUserDetails } = useAppContext();

  const [firstName, setFirstName] = useState<string>(user.first_name);
  const [lastName, setLastName] = useState<string>(
    user.last_name ? user.last_name : ''
  );
  const [serverError, setServerError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const ErrorVisible = serverError ? true : false;

  // This code should not be here
  const handleUpdate = async (values: any, { resetForm }: any) => {
    setLoading(true);
    const data = {
      id: user.id,
      first_name: values.firstName,
      last_name: values.lastName,
    };
    const { id, first_name, last_name } = data;
    const result = await usersApi.update(id, first_name, last_name);
    if (!result.ok) return setServerError('An unexpected error occured.');
    const response = result.data as any;
    resetForm();
    setFirstName(response.first_name);
    setLastName(response.last_name);
    addUserDetails({
      first_name: response.first_name as string,
      last_name: response.last_name as string,
      email: user.email,
      id: user.id,
    });
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <StackHeader title="Basic Information" back={() => navigation.goBack()} />
      <Formik
        validationSchema={BasicInfoSchema}
        initialValues={{ firstName: '', lastName: '' }}
        onSubmit={(values, { resetForm }) =>
          handleUpdate(values, { resetForm })
        }
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
          <Box style={{ height }}>
            <Box style={styles.form}>
              <ErrorMessage error={serverError} visible={ErrorVisible} />
            </Box>
            <Text variant="h5" color="primary" marginLeft="xl" marginTop="xl">
              First Name
            </Text>
            <Box style={styles.form}>
              <TextInput
                placeholder={capitalize(firstName)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                textContentType="name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                error={errors.firstName}
                touched={touched.firstName}
              />
              {errors && (
                <Text variant="b3" color="red">
                  {errors.firstName}
                </Text>
              )}
            </Box>
            <Text variant="h5" color="primary" marginLeft="xl">
              Last Name
            </Text>
            <Box style={styles.form}>
              <TextInput
                placeholder={capitalize(lastName)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                textContentType="name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                error={errors.lastName}
                touched={touched.lastName}
              />
              {errors && (
                <Text variant="b3" color="red">
                  {errors.lastName}
                </Text>
              )}
            </Box>
            <Box style={[styles.form, { marginTop: height * 0.35 }]}>
              <Button label="Update user" onPress={handleSubmit} />
            </Box>
          </Box>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default BasicInfo;
