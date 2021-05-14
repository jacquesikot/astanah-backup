import React from 'react';
import { StyleSheet, SafeAreaView, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import {
  Box,
  StackHeader,
  theme,
  ProfileHead,
  ListItem,
  Text,
} from '../../components';
import { StackScreenProps } from '@react-navigation/stack';
import { AccountNavParamList } from '../../../types';
import {
  CardTransferIcon,
  GenderIcon,
  LocationIcon,
  LockIcon,
  LogOut,
} from '../../Svg';
import useAuth from '../../hooks/useAuth';
import { CommonActions } from '@react-navigation/routers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

interface ProfileProps {}

const Profile = ({
  navigation,
}: StackScreenProps<AccountNavParamList, 'Profile'>) => {
  const { user, logOut } = useAuth();
  const { first_name, last_name, email } = user;
  const lastNameValue = last_name ? last_name : '';

  return (
    <SafeAreaView style={styles.container}>
      <Box>
        <StackHeader title="Account" />
        {user.email !== '' ? (
          <ProfileHead
            firstName={first_name}
            lastName={lastNameValue}
            email={email}
          />
        ) : (
          <Box
            width="100%"
            alignItems="center"
            height="10%"
            justifyContent="center"
            backgroundColor="light"
          >
            <Text variant="h5" color="dark">
              {' '}
              Login to save details
            </Text>
          </Box>
        )}
        <Box>
          <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => {
              if (user.email !== '') {
                navigation.navigate('BasicInfo');
              }
              Alert.alert('', 'Login to add info');
            }}
          >
            <ListItem
              label="Basic Information"
              icon={<GenderIcon color={theme.colors.primary} />}
              chevron
            />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => {
              if (user.email !== '') {
                navigation.navigate('AddressInfo');
              }
              Alert.alert('', 'Login to add info');
            }}
          >
            <ListItem
              label="Addresses"
              icon={<LocationIcon color={theme.colors.primary} />}
              chevron
            />
          </TouchableHighlight>
          {/* <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => navigation.navigate('PaymentInfo')}
          >
            <ListItem
              label="Payments"
              icon={<CardTransferIcon color={theme.colors.primary} />}
              chevron
            />
          </TouchableHighlight> */}
          <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => {
              if (user.email !== '') {
                navigation.navigate('ForgotPassword');
              }
              Alert.alert('', 'Login to add info');
            }}
          >
            <ListItem
              label="Passwords"
              icon={<LockIcon color={theme.colors.primary} />}
              chevron
            />
          </TouchableHighlight>
        </Box>
        <TouchableHighlight
          underlayColor={theme.colors.light}
          onPress={() => {
            if (user.email !== '') {
              logOut();
            }
            navigation.navigate('Welcome');
          }} // implement 'are you sure you wanna logout'
        >
          {user.email !== '' ? (
            <ListItem
              label="Logout"
              icon={<LogOut color={theme.colors.red} />}
              chevron
              textColor="red"
            />
          ) : (
            <ListItem
              label="Login"
              icon={<LogOut color={theme.colors.primary} />}
              chevron
              textColor="primary"
            />
          )}
        </TouchableHighlight>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;
