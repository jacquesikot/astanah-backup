import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Keyboard,
  Image,
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import theme, { Box, Text } from '../components/Theme';
import {
  Button,
  ErrorMessage,
  Link,
  LoginButton,
  TextInput,
  ActivityIndicator,
} from '../components';
import { AccountNavParamList, AuthParamList } from '../../types';
import { CloseEye, Eye } from '../Svg';
import localAuthApi from '../api/localAuth';
import googleAuthApi from '../api/googleAuth';
import useAuth from '../hooks/useAuth';
import { CommonActions } from '@react-navigation/routers';

const { width } = Dimensions.get('window');
const SCREEN_PADDING = theme.spacing.xl * 2;
const SEPERATOR_TEXT_WIDTH = 60;
const SEPERATOR_WIDTH = (width - SCREEN_PADDING - SEPERATOR_TEXT_WIDTH) / 2;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 72,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.s,
    marginBottom: theme.spacing.xl,
  },
  inputs: {
    marginTop: 25,
  },
  button: {
    marginTop: theme.spacing.l,
  },
  seperator: {
    flexDirection: 'row',
    marginTop: theme.spacing.l,
    marginBottom: theme.spacing.l,
  },
});

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

interface WelcomeProps {}
interface FormProps {
  email: string;
  password: string;
}

const Welcome = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'Welcome'>) => {
  const [passwordVissible, setPasswordVissible] = useState<boolean>(false);
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async ({ email, password }: FormProps) => {
    Keyboard.dismiss();
    setLoading(true);
    const result = await localAuthApi.login(email, password);
    if (!result.ok) {
      setLoginFailed(true);
      setLoading(false);
      return;
    }
    setLoginFailed(false);
    logIn(result.data as string);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      })
    );
    setLoading(false);
  };

  // const handleGoogleLogin = async () => {
  //   try {
  //     Keyboard.dismiss();
  //     setLoading(true);
  //     const result = await googleAuthApi.login();
  //     if (!result.ok) {
  //       setLoginFailed(true);
  //       setLoading(false);
  //       return;
  //     }
  //     setLoginFailed(false);
  //     logIn(result.data as string);
  //     setLoading(false);
  //   } catch (e) {
  //     setLoginFailed(true);
  //     setLoading(false);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <Box style={styles.logo}>
        <Image
          source={require('../../assets/astanah_logo.png')}
          style={{ width: 100, height: 85 }}
        />
      </Box>
      <Text variant="h4" color="primary">
        Welcome to Astanah
      </Text>
      <Text variant="b3" color="grey" style={{ marginTop: 10 }}>
        Sign in to continue
      </Text>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <Box style={styles.inputs}>
            <Box style={{ marginBottom: 7 }}>
              <Box>
                <ErrorMessage
                  error="Invalid email and/or password"
                  visible={loginFailed}
                />
              </Box>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                icon="mail"
                placeholder="Your Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
              />
            </Box>
            <Box style={{ flexDirection: 'row' }}>
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
              <Box style={{ position: 'absolute', left: width - 80, top: 14 }}>
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
              <Button noShadow label="Sign In" onPress={handleSubmit} />
            </Box>
          </Box>
        )}
      </Formik>
      <Box style={styles.seperator}>
        {/* <Box
          borderBottomWidth={1}
          borderBottomColor="light"
          width={SEPERATOR_WIDTH}
          height={20}
        /> */}
        {/* <Box
          style={{
            marginTop: 10,
            width: SEPERATOR_TEXT_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text variant="h5" color="grey" paddingLeft="m" paddingRight="m">
            OR
          </Text>
        </Box>
        <Box
          borderBottomWidth={1}
          borderBottomColor="light"
          width={SEPERATOR_WIDTH}
          height={20}
        /> */}
      </Box>
      {/* <Box style={{ marginBottom: 10, marginTop: 7 }}>
        <LoginButton
          type="Google"
          onPress={() => alert('Login with google coming soon')}
        />
      </Box>
      <LoginButton
        type="Facebook"
        onPress={() => alert('Login with Facebook coming soon')}
      /> */}
      <Box style={{ flexDirection: 'row', marginTop: 8 }}>
        <Text variant="b3" color="grey">
          Don't have an account?{' '}
        </Text>
        <Link
          label="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Welcome;

// TODO

// Factorize seperator into its own component
