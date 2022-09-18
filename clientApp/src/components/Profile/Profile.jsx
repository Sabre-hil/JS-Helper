import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import {
  View, Text, TouchableOpacity, Switch, ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { EventRegister } from 'react-native-event-listeners';
import { login, LOGOUT_SESSION_THUNK } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';
import Avatar from './Avatar';
import ProgressScore from './ProgressScore';
import themeContext from '../config/themeContext';

function Profile() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const { auth } = useSelector((s) => s);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(LOGOUT_SESSION_THUNK());
  };

  useEffect(() => {
    const prof = async () => {
      const response = await fetch(`https://js-helper.herokuapp.com/stat/0/${auth?.id}`);
      const json = await response.json();
      dispatch(login(json));
    };
    prof();
  }, []);
  console.log(theme);
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <Avatar auth={auth} />
      <View style={{ color: 'white' }}>

        <Text style={{
          fontFamily: 'Menlo',
          fontSize: 24,
          fontWeight: '900',
          marginBottom: 40,
          color: theme.color,
          textAlign:'center'
        }}
        >
          {auth?.userName}
        </Text>
        <ProgressScore auth={auth} />

        {/* <Text style={[styles.buttonText, { color: theme.color }]}>{auth?.userName}</Text> */}
        <TouchableOpacity
          style={styles.cardButton}
          title="Logout"
          onPress={logoutHandler}
        >
          <Text style={styles.buttonText}>Выход</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardButton}
          title="About"
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>О проекте</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Switch
            value={mode}
            onValueChange={(value) => {
              setMode(value);
              EventRegister.emit('changeTheme', value);
            }}
          />
        </View>
        <Text style={[styles.buttonText, { color: theme.color }]}>Сменить тему</Text>
      </View>
    </View>
  );
}

export default Profile;
