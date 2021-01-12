import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import {
  Box,
  StackHeader,
  theme,
  ProfileHead,
  ListItem,
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
        <ProfileHead
          firstName={first_name}
          lastName={lastNameValue}
          email={email}
        />
        <Box>
          <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => navigation.navigate('BasicInfo')}
          >
            <ListItem
              label="Basic Information"
              icon={<GenderIcon color={theme.colors.primary} />}
              chevron
            />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => navigation.navigate('AddressInfo')}
          >
            <ListItem
              label="Addresses"
              icon={<LocationIcon color={theme.colors.primary} />}
              chevron
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => navigation.navigate('PaymentInfo')}
          >
            <ListItem
              label="Payments"
              icon={<CardTransferIcon color={theme.colors.primary} />}
              chevron
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={theme.colors.light}
            onPress={() => navigation.navigate('Password')}
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
          onPress={() => logOut()} // implement 'are you sure you wanna logout'
        >
          <ListItem
            label="Logout"
            icon={<LogOut color={theme.colors.red} />}
            chevron
            textColor="red"
          />
        </TouchableHighlight>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;
