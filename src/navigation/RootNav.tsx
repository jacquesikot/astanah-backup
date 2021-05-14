import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';

import { RootParamList, User } from '../../types';
import { AuthNav, AppNav } from '../navigation';
import { useAppContext } from '../context/context';
import authStorage from '../utils/authStorage';

const RootStack = createStackNavigator<RootParamList>();

const RootNav = () => {
  const { isLoggedIn, addUserDetails, setUserState } = useAppContext();
  const [isReady, setIsReady] = useState<boolean>(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) {
      addUserDetails(user as User);
      setUserState(true);
    }
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <RootStack.Navigator headerMode="none">
      {/* <RootStack.Screen name="AuthNav" component={AuthNav} /> */}

      <RootStack.Screen name="AppNav" component={AppNav} />
    </RootStack.Navigator>
  );
};

export default RootNav;
