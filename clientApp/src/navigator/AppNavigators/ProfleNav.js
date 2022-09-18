/* eslint-disable react/jsx-filename-extension */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from '../../screens/appScreens/AboutScreen';
import ProfileScreen from '../../screens/appScreens/ProfileScreen';

const ProfStack = createNativeStackNavigator();

function ProfleNav() {
  return (
    <ProfStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfStack.Screen name="Profile" component={ProfileScreen} />
      <ProfStack.Screen name="About" component={AboutScreen} />
    </ProfStack.Navigator>

  );
}

export default ProfleNav;
