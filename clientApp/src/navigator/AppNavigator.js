/* eslint-disable react/jsx-filename-extension */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import { StyleSheet } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

const AppStack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="App" component={BottomTabNavigator} screenOptions={{showLabel: false }} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
