/* eslint-disable react/jsx-filename-extension */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../components/Login/Login';
// import LoginScreen from '../screens/authScreens/LoginScreen';
import RegScreen from '../screens/authScreens/RegScreen';
import StartScreen from '../screens/authScreens/StartScreen';

const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Start" component={StartScreen} />
      <AuthStack.Screen name="Reg" component={RegScreen}/>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
