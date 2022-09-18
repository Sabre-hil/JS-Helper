/* eslint-disable react/jsx-filename-extension */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CategoryGame from '../../components/Game/CategoryGame';
import QuestionsScreen from '../../screens/appScreens/QuestionsScreen';

const QuestStack = createNativeStackNavigator();

function QuestionsNav() {
  return (
    <QuestStack.Navigator screenOptions={{ headerShown: false }}>
      <QuestStack.Screen name="Category" component={CategoryGame} />
      <QuestStack.Screen name="Game" component={QuestionsScreen} />
    </QuestStack.Navigator>

  );
}

export default QuestionsNav;
