/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,
  Modal, TextInput, ActivityIndicator, Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../constants';
import {
  createCOM, getCOMS,
} from '../../redux/actions/postAction';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';

function morePost({ route }) {
  const [input, setInput] = useState({ text: '' });
  const [toggle, setToggle] = useState(false);
  const [load, setLoad] = useState(false);
  const openHandler = () => {
    setToggle(!toggle);
  };

  const dispatch = useDispatch();
  const post = route.params;
  const { coms, auth } = useSelector((s) => s);

  const submitHandler = async () => {
    if (input.text !== '') {
      setToggle(!toggle);
      setLoad(true);
      const responce = await fetch(
        `https://js-helper.herokuapp.com/com/${post?.id}/${auth?.id}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(input),
        },
      );
      setInput({ text: '' });
      if (responce.ok) {
        const data = await responce.json();
        dispatch(createCOM(data));
        setLoad(false);
      } else {
        setLoad(false);
        Alert.alert('Ошибка соединения');
      }
    } else { Alert.alert('Заполните поле вводе'); }
  };

  useEffect(() => {
    setLoad(true);
    fetch(`https://js-helper.herokuapp.com/com/${post?.id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getCOMS(data));
        setLoad(false);
      });
  }, []);

  return (
    <>
      <View style={style.post}>

        <View style={style.head}>
          <Image style={style.image} source={{ uri: post?.User?.avatar }} />
          <Text style={style.text}>{post?.User?.userName}</Text>
        </View>
        <Text style={style.text}>{post?.title}</Text>
        <Text style={style.text}>{post?.text}</Text>
        <View style={{ height: 450, width: 100 }}>
          <TouchableOpacity
            style={style.cardButton}
            title="Open"
            onPress={openHandler}
          >

            <Text style={styles.buttonText}>Написать ответ</Text>

          </TouchableOpacity>
          <Text>Ответы:</Text>
          <ScrollView style={{ width: 310 }}>
            { load ? (
              <ActivityIndicator
                color={colors.GOLD}
                size="large"
                style={styles.activityIndicatorStyles}
              />
            ) : (

              coms.map((el) => (
                <View style={{
                  marginTop: 10, borderWidth: 3, borderColor: '#fad481',
                }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Image style={style.image} source={{ uri: el?.User?.avatar }} />
                    <Text style={{ marginTop: 10 }}>{el?.User?.userName}</Text>
                  </View>
                  <Text>{el?.text}</Text>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      </View>
      <SideMenu />
      <Modal animationType="slide" transparent visible={toggle}>
        <View style={styles.card}>
          <Text style={style.headText}>Ваш ответ</Text>
          <TextInput
            style={style.input}
            placeholder="Текст"
            onChangeText={(textt) => setInput({ ...input, text: textt })}
          />
          <TouchableOpacity
            style={style.cardButton}
            title="Send"
            onPress={submitHandler}
          >

            <Text style={styles.buttonText}>Ответить</Text>

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
  post: {
    flex: 1,
    padding: 20,
    borderColor: '#fad481',
    borderWidth: 10,
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: '#808080',
  },
  image: {
    resizeMode: 'stretch',
    width: 40,
    height: 40,
    // flex: 1,
    borderRadius: 50,

  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  head: {
    flexDirection: 'row',
  },
  status: {
    marginTop: 54,
    backgroundColor: '#FF000',
    width: 30,
    height: 30,
    justifyContent: 'center,',
    borderRadius: 50,
    flex: 1,
  },
  cardButton: {
    backgroundColor: '#fad481',
    paddingVertical: 10,
    marginVertical: 10,
    width: 300,
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

});

export default morePost;
