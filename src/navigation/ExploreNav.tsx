import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ExploreNavParamList } from '../../types';
import {
  Explore,
  CategoryDetail,
  Favorites,
  Notifications,
  ProductDetail,
  Search,
} from '../screens';

const ExploreStack = createStackNavigator<ExploreNavParamList>();

const ExploreNav = () => {
  return (
    <ExploreStack.Navigator headerMode="none">
      <ExploreStack.Screen name="Explore" component={Search} />
      <ExploreStack.Screen name="ProductDetails" component={ProductDetail} />
    </ExploreStack.Navigator>
  );
};

export default ExploreNav;
