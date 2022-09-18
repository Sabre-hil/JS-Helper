/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, Linking, ScrollView, ActivityIndicator, Image,
} from 'react-native';
import { colors } from '../../../constants';
import themeContext from '../../components/config/themeContext';
import styles from '../../components/Homescreen/stylesHomePage';
// import SideMenu from '../SideMenu/SideMenu';

function GeneralScreen() {
  const [news, setNews] = useState([]);
  const theme = useContext(themeContext);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch('https://js-helper.herokuapp.com/news')
      .then((responce) => responce.json())
      .then((responce) => {
        setNews(responce);
        setLoad(false);
      })
      .catch((err) => console.log('Произошла ошибка', err));
  }, []);
  return (
    <>
      <View style={[styles.genCard, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.genDescription, { color: theme.color }]}>Главные новости в мире IT</Text>
        <ScrollView>
          {load ? (
            <ActivityIndicator
              color={colors.GOLD}
              size="large"
              style={styles.activityIndicatorStyles}
            />
          ) : (
            news?.map((el, i) => (
              <TouchableOpacity key={i} style={[styles.genLinkButton, { backgroundColor: theme.commentBackColor }]} title="link" onPress={() => { Linking.openURL(el.link).catch((err) => console.log('Ошибка в соединении', err)); }}>
                <Text
                  key={i}
                  style={[styles.genNew,
                    { color: theme.commentColor }]}
                >
                  {el.title}

                </Text>
                <Image
                  style={styles.itImage}
                  source={{ uri: el.images }}
                />
                <Text style={[styles.genNew,
                  { color: theme.commentColor }]}
                >
                  {el.subTitle}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
      {/* <SideMenu navigation={navigation} /> */}

    </>
  );
}

export default GeneralScreen;
