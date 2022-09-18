/* eslint-disable react/jsx-filename-extension */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import ComIcon from '../../assets/icons/com';
import NewsIcon from '../../assets/icons/news';
import ProfileIcon from '../../assets/icons/profile';
import QuestIcon from '../../assets/icons/quest';
import LoginScreen from '../screens/authScreens/LoginScreen';
import RegScreen from '../screens/authScreens/RegScreen';
import ComNav from './AppNavigators/ComNav';
import GeneralNav from './AppNavigators/GeneralNav';
import ProfleNav from './AppNavigators/ProfleNav';
import QuestionsNav from './AppNavigators/QuestionsNav';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styleBar, tabBarShowLabel: false }}>
      <BottomTab.Screen name="General" component={GeneralNav} options={{ tabBarIcon: ({ focused, size }) => <NewsIcon name="News" size={50} color={focused} /> }} />
      <BottomTab.Screen name="Questions" component={QuestionsNav} options={{ tabBarIcon: ({ focused, size }) => (<QuestIcon name="Quest" size={50} focused={focused} />) }} />
      <BottomTab.Screen name="Flow" component={ComNav} options={{ tabBarIcon: ({ focused, size }) => (<ComIcon name="Com" size={50} focused={focused} />) }} />
      <BottomTab.Screen name="Profile" component={ProfleNav} options={{ tabBarIcon: ({ focused, size }) => (<ProfileIcon name="Prof" size={50} focused={focused} />) }} />
    </BottomTab.Navigator>

  );
}

const styleBar = StyleSheet.create({
  activeTintColor: 'rgba(0, 122, 255, 1)',
  backgroundColor: '#fad481',
  // borderRadius: 15,
  // bottom: 25,
  // left: 20,
  // marginRight: 20,
  position: 'absolute',
  paddingTop: 30,
  paddingBottom: 30,

});

export default BottomTabNavigator;
