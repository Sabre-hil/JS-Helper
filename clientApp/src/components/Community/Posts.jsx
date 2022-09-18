/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import themeContext from '../config/themeContext';

function Posts({ post }) {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <View style={[style.post, { backgroundColor: theme.commentBackColor }]}>

      <View style={style.head}>
        <Image style={style.image} source={{ uri: post?.User?.avatar }} />
        <Text style={[style.text, { color: theme.commentColor }]}>{post?.User?.userName}</Text>
      </View>
      <Text style={[style.text, { color: theme.commentColor }]}>{post?.title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Post', post)}>
        <View style={{
          borderColor: '#C4C4C4', borderWidth: 5, borderRadius: 50, width: 260, marginStart: 30, marginTop: 20,
        }}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  post: {
    padding: 20,
    borderRadius: 10,
    width: 350,
    marginTop: 30,
    backgroundColor: '#F5FAFE',
    marginLeft: 10,
  },
  image: {
    resizeMode: 'stretch',
    width: 40,
    height: 40,
    marginRight: 7,
    // flex: 1,
    borderRadius: 50,

  },
  text: {
    color: 'black',
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

});

export default Posts;
