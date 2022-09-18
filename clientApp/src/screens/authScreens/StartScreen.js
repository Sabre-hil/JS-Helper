/* eslint-disable react/jsx-filename-extension */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import styles from '../../../Style';

function StartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.description}>JS - Helper</Text>
      <Text style={styles.msg}>Изучайтe JS вместе с нами и найдите свою первую работу</Text>
      <View style={styles.buttonBlock}>
        <>
          <TouchableOpacity
            style={styles.cardButton}
            title="Registration"
            onPress={() => navigation.navigate('Reg')}
          >
            <Text style={styles.buttonText}>Регистрация</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardButton}
            title="Login"
            onPress={() => navigation.navigate('Login')}
          >

            <Text style={styles.buttonText}>Авторизация</Text>

          </TouchableOpacity>
        </>
      </View>
    </View>

  );
}

export default StartScreen;
