import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Search from '../screens/Search';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import Address from '../screens/Address';
import Category from '../screens/Category';
import StoresList from '../screens/StoresList';
import Store from '../screens/Store';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        headerBackVisible: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="StoresList" component={StoresList} />
      <Stack.Screen name="Store" component={Store} />

      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default AppStack;
