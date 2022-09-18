import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';

function Messages({ navigation }) {
  return (
    <>
      <View style={styles.card}>
        <Text>
          Messages
        </Text>
      </View>
      <SideMenu navigation={navigation} />
    </>
  );
}

export default Messages;
