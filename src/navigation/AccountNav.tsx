import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountNavParamList } from '../../types';
import {
  Profile,
  BasicInfo,
  AddressInfo,
  PaymentInfo,
  Password,
  AddAddress,
  AddCard,
  EditAddress,
  Welcome,
  ForgotPassword,
  Register,
} from '../screens';

const AccountStack = createStackNavigator<AccountNavParamList>();

const AcountNav = () => {
  return (
    <AccountStack.Navigator headerMode="none">
      <AccountStack.Screen name="Profile" component={Profile} />
      <AccountStack.Screen name="BasicInfo" component={BasicInfo} />
      <AccountStack.Screen name="AddressInfo" component={AddressInfo} />
      <AccountStack.Screen name="PaymentInfo" component={PaymentInfo} />
      <AccountStack.Screen name="Password" component={Password} />
      <AccountStack.Screen name="AddCard" component={AddCard} />
      <AccountStack.Screen name="AddAddress" component={AddAddress} />
      <AccountStack.Screen name="EditAddress" component={EditAddress} />
      <AccountStack.Screen name="Welcome" component={Welcome} />
      <AccountStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AccountStack.Screen name="Register" component={Register} />
    </AccountStack.Navigator>
  );
};

export default AcountNav;
