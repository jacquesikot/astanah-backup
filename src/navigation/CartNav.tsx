import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CartNavParamList } from '../../types';
import {
  Cart,
  ShipTo,
  Payment,
  ChooseCard,
  Success,
  AddAddress,
  AddCard,
} from '../screens';

const CartStack = createStackNavigator<CartNavParamList>();

const CartNav = () => {
  return (
    <CartStack.Navigator headerMode="none">
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="ShipTo" component={ShipTo} />
      <CartStack.Screen name="Payment" component={Payment} />
      <CartStack.Screen name="ChooseCard" component={ChooseCard} />
      <CartStack.Screen name="Success" component={Success} />
      <CartStack.Screen name="AddAddress" component={AddAddress} />
      <CartStack.Screen name="EditAddress" component={AddAddress} />
      <CartStack.Screen name="AddCard" component={AddCard} />
    </CartStack.Navigator>
  );
};

export default CartNav;
