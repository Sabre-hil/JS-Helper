/* eslint-disable no-use-before-define */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet, Text, TextInput, View,
  TouchableOpacity, Alert, AsyncStorage, KeyboardAvoidingView, ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../constants';
import { login } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';
import { loading } from '../../redux/actions/loadAction';

function Registration() {
  const navigation = useNavigation();
  const { load } = useSelector((s) => s);
  const [inputs, setInputs] = useState({ userName: '', email: '', password: '' });

  const dispatch = useDispatch();

  const submitHandler = async () => {
    dispatch(loading());
    if (inputs.email !== '' && inputs.name !== '' && inputs.password !== '') {
      const response = await fetch(
        'https://js-helper.herokuapp.com/reg',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(inputs),
        },
      );
      const res = await response.json();
      console.log(res);
      if (res) {
        dispatch(login(res));
        dispatch(loading());
        await AsyncStorage.setItem('session', JSON.stringify(res));
        // navigation.navigate('General');
      } else {
        Alert.alert('Такой email или nickname уже занят');
        dispatch(loading());
      }
    } else {
      dispatch(loading());
      Alert.alert('Ошибка', 'Заполните все поля');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View
        style={{
			  backgroundColor: colors.mainColor,
			  height: '100%',
			  justifyContent: 'center',
			  alignItems: 'center',
        }}
      >
        {load ? <ActivityIndicator style={{ flex: 1 }} /> : (
          <View style={{ width: 300 }}>
            <TextInput
              style={stylesCreated.input}
              placeholder="Enter name"
              onChangeText={(text) => setInputs({ ...inputs, userName: text })}
            />
            <TextInput
              style={stylesCreated.input}
              placeholder="Enter email"
              onChangeText={(text) => setInputs({ ...inputs, email: text })}
            />
            <TextInput
              style={stylesCreated.input}
              placeholder="Enter password"
              secureTextEntry
              onChangeText={(text) => setInputs({ ...inputs, password: text })}
            />
            <TouchableOpacity
              style={styles.cardButton}
              title="Login"
              onPress={submitHandler}
            >
              <Text style={styles.buttonText}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const stylesCreated = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default Registration;
