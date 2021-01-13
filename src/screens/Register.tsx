import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Keyboard,
  Image,
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Box,
  Text,
  theme,
  TextInput,
  Button,
  Link,
  BackButton,
  ActivityIndicator,
  ErrorMessage,
} from '../components';
import { AuthParamList } from '../../types';
import { CloseEye, Eye } from '../Svg';
import usersApi from '../api/users';
import useAuth from '../hooks/useAuth';
import authApi from '../api/localAuth';
import { capitalize } from '../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 72,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.s,
    marginBottom: theme.spacing.xl,
    marginTop: 20,
  },
  inputs: {
    marginTop: 25,
  },
  button: {
    marginTop: theme.spacing.l,
  },
  backButton: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  textInputs: {
    marginTop: 0,
  },
});

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, 'First name must be at least 3 characters')
    .max(50, 'First name must not exceed 50 characters')
    .required('First name is a required field'),
  last_name: Yup.string()
    .min(3, 'Last name must be at least 3 characters')
    .max(50, 'Last name must not exceed 50 characters')
    .required('Last name is a required field'),
  email: Yup.string().email().required('Email is a required field'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .max(50, 'Password must not exceed 50 characters')
    .required('Password is a required field'),
});

interface RegisterProps {}

const Register = ({
  navigation,
}: StackScreenProps<AuthParamList, 'Register'>) => {
  const [passwordVissible, setPasswordVissible] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const loginApi = authApi.login;
  const registerApi = usersApi.register;
  const { logIn } = useAuth();

  const handleSubmit = async (userInfo: any) => {
    Keyboard.dismiss();
    setLoading(true);
    const result = await registerApi(userInfo);
    console.log(result);
    if (!result.ok) {
      if (result.data) setError(result.data as string);
      else {
        setError('An unexpected error occured.');
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken as string);
    setLoading(false);
  };

  const errorVisible = error ? true : false;

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      >
        <Box style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackButton />
          </TouchableOpacity>
          <Box style={{ flex: 1 }} />
        </Box>
        <Box style={styles.main}>
          <Box style={styles.logo}>
            <Image
              source={require('../../assets/astanah_logo.png')}
              style={{ width: 100, height: 85 }}
            />
          </Box>
          <Text variant="h4" color="primary">
            Let's get Started
          </Text>
          <Text variant="b3" color="grey" style={{ marginTop: 10 }}>
            Create a new account
          </Text>
          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              password: '',
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
              <Box>
                <Box style={{ marginTop: 10 }}>
                  <ErrorMessage
                    error={error ? capitalize(error) : ''}
                    visible={errorVisible}
                  />
                </Box>
                <Box style={styles.textInputs}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="name"
                    icon="user"
                    placeholder="First Name"
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    error={errors.first_name}
                    touched={touched.first_name}
                  />
                </Box>
                {errors && (
                  <Text variant="b3" color="red">
                    {errors.first_name}
                  </Text>
                )}
                <Box style={styles.textInputs}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    textContentType="name"
                    icon="user"
                    placeholder="Last Name"
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    error={errors.last_name}
                    touched={touched.last_name}
                  />
                </Box>
                {errors && (
                  <Text variant="b3" color="red">
                    {errors.last_name}
                  </Text>
                )}
                <Box style={styles.textInputs}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    icon="mail"
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                  />
                </Box>
                {errors && (
                  <Text variant="b3" color="red">
                    {errors.email}
                  </Text>
                )}
                <Box style={styles.textInputs}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={!passwordVissible}
                    textContentType="password"
                    icon="lock"
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={errors.password}
                    touched={touched.password}
                  />
                  {errors && (
                    <Text variant="b3" color="red">
                      {errors.password}
                    </Text>
                  )}
                  <Box
                    style={{ position: 'absolute', left: width - 80, top: 14 }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setPasswordVissible(!passwordVissible)}
                    >
                      {passwordVissible ? (
                        <Eye width={18} />
                      ) : (
                        <CloseEye width={18} />
                      )}
                    </TouchableOpacity>
                  </Box>
                </Box>

                <Box style={styles.button}>
                  <Button noShadow label="Sign Up" onPress={handleSubmit} />
                </Box>
              </Box>
            )}
          </Formik>
          <Box style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text variant="b3" color="grey">
              have an account?{' '}
            </Text>
            <Link
              label="Sign In"
              onPress={() => navigation.navigate('Welcome')}
            />
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
