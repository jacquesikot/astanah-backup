import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Keyboard,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  BackButton,
  Box,
  Button,
  StackHeader,
  Text,
  TextInput,
  theme,
  ActivityIndicator,
} from '../../components';
import { StackScreenProps } from '@react-navigation/stack';
import { AccountNavParamList } from '../../../types';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    alignItems: 'center',
    paddingTop: 20,
  },
  backButton: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
});

interface PasswordProps {}

const { height } = Dimensions.get('window');

const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Password = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'Password'>) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    Keyboard.dismiss();
    Alert.alert('Password', 'Check your email for details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      >
        <Box style={styles.main}>
          <Box style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackButton />
            </TouchableOpacity>
            <Box style={{ flex: 1 }} />
          </Box>
          <Box style={styles.image}>
            <Image
              source={require('../../../assets/forgotPassword.png')}
              style={{ width: 360, height: 286 }}
            />
          </Box>
          <Text variant="h2" color="primary" marginBottom="m">
            Forgot Password?
          </Text>
          <Text variant="b3" color="grey" marginBottom="xl">
            enter your email to recover your password
          </Text>

          <Formik
            validationSchema={emailSchema}
            initialValues={{ email: '' }}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <Box>
                <Box style={{ marginBottom: 7 }}>
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
                  {errors && (
                    <Text variant="b3" color="red" marginTop="s">
                      {errors.email}
                    </Text>
                  )}
                </Box>
                <Button
                  label="Recover password"
                  onPress={handleSubmit}
                  noShadow
                />
              </Box>
            )}
          </Formik>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Password;
