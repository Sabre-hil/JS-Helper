import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Homescreen from './components/Homescreen/Homescreen';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Game from './components/Game/Game';
import Profile from './components/Profile/Profile';
import GeneralScreen from './components/GeneralScreen/GeneralScreen';
import Messages from './components/Messages/Messages';
import Community from './components/Community/Community';
import About from './components/About/About';
import morePost from './components/Community/morePost';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const { auth } = useSelector((s) => s);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name="Home" component={Homescreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Reg" component={Registration} options={{ title: 'Registration' }} />
          <Stack.Screen name="Log" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="Game" component={Game} options={{ title: 'Game-Page' }} />
          {/* <Stack.Screen name="Menu" component={SideMenu} options={{ title: 'Side-Menu' }} /> */}
          <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
          <Stack.Screen name="General" component={GeneralScreen} options={{ title: 'General' }} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Community" component={Community} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Post" component={morePost} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* {auth ? (
        <SideMenu />
      )
        : <></>} */}
    </>

  );
}

export default StackNavigation;
