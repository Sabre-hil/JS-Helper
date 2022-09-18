/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-pascal-case */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GeneralScreen from '../../screens/appScreens/GeneralScreen';

const GenStack = createNativeStackNavigator();

function GeneralNav() {
  return (
    <GenStack.Navigator screenOptions={{ headerShown: false }}>
      <GenStack.Screen name="General" component={GeneralScreen} />
    </GenStack.Navigator>
  );
}

export default GeneralNav;
