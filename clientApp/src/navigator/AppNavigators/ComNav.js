/* eslint-disable react/jsx-filename-extension */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ComScreen from '../../screens/appScreens/ComScreen';
import PostScreen from '../../screens/appScreens/PostScreen';

const ComStack = createNativeStackNavigator();

function ComNav() {
  return (
    <ComStack.Navigator screenOptions={{ headerShown: false }}>
      <ComStack.Screen name="Community" component={ComScreen} />
      <ComStack.Screen name="Post" component={PostScreen} />

    </ComStack.Navigator>

  );
}

export default ComNav;
