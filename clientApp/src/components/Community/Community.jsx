import React, { useContext, useEffect, useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, Modal, Alert, ActivityIndicator,
  TouchableOpacity, TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../constants';
import { createPOST, getPOSTS } from '../../redux/actions/postAction';
import theme from '../config/Theme';
import themeContext from '../config/themeContext';
import styles from '../Homescreen/stylesHomePage';
import Posts from './Posts';

function Community() {
  const theme = useContext(themeContext);
  const { auth, posts } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ title: '', text: '' });
  const [toggle, setToggle] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch('https://js-helper.herokuapp.com/posts')
      .then((res) => res.json())
      .then((data) => {
        dispatch(getPOSTS(data));
        setLoad(false);
      });
  }, []);

  const openHandler = () => {
    setToggle(!toggle);
  };

  const submitHandler = async () => {
    if (inputs.title !== '' && inputs.text !== '') {
      setLoad(true);
      setToggle(!toggle);
      const responce = await fetch(
        `https://js-helper.herokuapp.com/posts/${auth?.id}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(inputs),
        },
      );
      setInputs({ title: '', text: '' });
      if (responce.ok) {
        const data = await responce.json();
        dispatch(createPOST(data));
        setLoad(false);
      } else {
        setLoad(false);
        Alert.alert('Ошибка соединения');
      }
    } else { Alert.alert('Заполните все поля'); }
  };
  console.log(theme);
  return (
    <>
      <View style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
        <ScrollView style={style.card}>
          <View style={[style.form, { backgroundColor: theme.commentBackColor }]}>
            <Text style={[style.headText, { color: theme.commentColor }]}>

              Напишите о своей проблеме или помогите другим решить ее

            </Text>
            <TouchableOpacity
              style={style.cardButton}
              title="Open"
              onPress={openHandler}
            >

              <Text style={styles.buttonText}>Написать пост</Text>

            </TouchableOpacity>
          </View>
          {load ? (
            <ActivityIndicator
              color={colors.GOLD}
              size="large"
              style={styles.activityIndicatorStyles}
            />
          ) : (
            posts?.map((el) => <Posts key={el.id} post={el} />)
          )}
        </ScrollView>
      </View>
      <Modal animationType="slide" transparent visible={toggle}>
        <View style={{
          backgroundColor: theme.backgroundColor, flex: 1, justifyContent: 'center', alignItems: 'center',
        }}
        >
          <Text style={style.headText}>Заголовок</Text>
          <TextInput
            style={style.input}
            placeholder="Заголовок"
            onChangeText={(text) => setInputs({ ...inputs, title: text })}
          />
          <Text style={style.headText}>Содержание</Text>
          <TextInput
            style={style.input}
            placeholder="содержание"
            onChangeText={(textt) => setInputs({ ...inputs, text: textt })}
          />
          <TouchableOpacity
            style={style.cardButton}
            title="Send"
            onPress={submitHandler}
          >

            <Text style={styles.buttonText}>Выложить</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={style.cardButton}
            title="Close"
            onPress={openHandler}
          >

            <Text style={styles.buttonText}>Отмена</Text>

          </TouchableOpacity>
        </View>
      </Modal>
    </>

  );
}

const style = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10,
    borderColor: '#fad481',
    borderWidth: 5,
    borderRadius: 15,
    marginTop: 30,
    backgroundColor: '#808080',
    marginBottom: 50,
    justifyContent: 'center',
  },
  headText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  cardButton: {
    backgroundColor: '#fad481',
    paddingVertical: 10,
    marginVertical: 10,
    width: 340,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 300,
  },
  card: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.backgroundColor,
  },
});

export default Community;
