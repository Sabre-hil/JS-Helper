/* eslint-disable no-use-before-define */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
import { login } from '../../redux/actions/authAction';
import { colors } from '../../../constants';
import styles from '../Homescreen/stylesHomePage';
import { loading } from '../../redux/actions/loadAction';

function Login() {
  const { load } = useSelector((s) => s);
  const dispatch = useDispatch();

  // const navigation = useNavigation();

  const [inputs, setInputs] = useState({ email: '', password: '' });

  const submitHandler = async () => {
    dispatch(loading());
    if (inputs.email !== '' && inputs.password !== '') {
      const response = await fetch(
        'https://js-helper.herokuapp.com/login',
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
      if (res) {
        dispatch(login(res));
        dispatch(loading());
        await AsyncStorage.setItem('session', JSON.stringify(res));
        // navigation.navigate('General');
      } else {
        dispatch(loading());
        Alert.alert('Введеные данные не верны');
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
              onChangeText={(text) => setInputs({ ...inputs, email: text })}
              placeholder="Enter email"
            />
            <TextInput
              style={stylesCreated.input}
              onChangeText={(text) => setInputs({ ...inputs, password: text })}
              placeholder="Enter password"
              secureTextEntry
            />
            <TouchableOpacity style={styles.cardButton} onPress={submitHandler}>
              <Text style={styles.buttonText}>Войти</Text>
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

export default Login;
