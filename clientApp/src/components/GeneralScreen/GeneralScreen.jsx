import React, { useEffect, useState, useContext } from 'react';
import {
  View, Text, TouchableOpacity, Linking, ScrollView, ActivityIndicator, Image,
} from 'react-native';
import themeContext from '../config/themeContext';
import { colors } from '../../../constants';
import styles from '../Homescreen/stylesHomePage';

function GeneralScreen() {
  const theme = useContext(themeContext);
  console.log('general', theme);

  const [news, setNews] = useState([]);
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
    <View style={[styles.genCard, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.genDescription,
        { color: theme.color }]}
      >
        Главные новости в мире IT

      </Text>
      <ScrollView>
        {load ? (
          <ActivityIndicator
            color={colors.GOLD}
            size="large"
            style={styles.activityIndicatorStyles}
          />
        ) : (
          news?.map((el, i) => (
            <TouchableOpacity key={i} style={styles.genLinkButton} title="link" onPress={() => { Linking.openURL(el.link).catch((err) => console.log('Ошибка в соединении', err)); }}>
              <Text key={i} style={styles.genNew}>{el.title}</Text>
              <Image
                style={styles.itImage}
                source={{ uri: el.images }}
              />
              <Text style={styles.genNewSecond}>
                {el.subTitle}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}

export default GeneralScreen;
