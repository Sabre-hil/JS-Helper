import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, StyleSheet, Image, TouchableNativeFeedback,
} from 'react-native';

function SideMenu() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.icons} source={require('./icons/profile.png')} />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => navigation.navigate('Messages')}>
        <Image style={styles.icons} source={require('./icons/message.png')} />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => navigation.navigate('General')}>
        <Image style={styles.icons} source={require('./icons/home.png')} />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => navigation.navigate('Category')}>
        <Image style={styles.icons} source={require('./icons/quest.png')} />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => navigation.navigate('Community')}>
        <Image style={styles.icons} source={require('./icons/community.png')} />
      </TouchableNativeFeedback>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fad481',
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    bottom: 0,

  },
  icons: {
    width: 60,
    borderRadius: 50,
    resizeMode: 'stretch',
    height: 60,
    // backgroundColor: '#9E9E9E',
    // fontSize: 30,
  },
});

export default SideMenu;
