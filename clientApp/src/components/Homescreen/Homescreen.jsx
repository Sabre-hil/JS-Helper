import React, { useContext, useEffect } from 'react';
import {
  AsyncStorage,
  View, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GET_SESSION_THUNK } from '../../redux/actions/authAction';
import themeContext from '../config/themeContext';
// import { colors } from '../../../constants';
import styles from './stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';

function Homescreen({ navigation, mode }) {
  const theme = useContext(themeContext);
  console.log('>>>>>>>>>>>?????????????', theme);
  const { auth } = useSelector((s) => s);
  console.log('auth--->', auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_SESSION_THUNK());
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.description}>JS - Helper</Text>
      <Text style={styles.msg}>Изучайтe JS вместе с нами и найдите свою первую работу</Text>
      <View style={styles.buttonBlock}>
        {!auth ? (
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
              onPress={() => navigation.navigate('Log')}
            >

              <Text style={styles.buttonText}>Авторизация</Text>

            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.cardButton}
            title="Logout"
            onPress={() => navigation.navigate('General')}
          >
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

export default Homescreen;
