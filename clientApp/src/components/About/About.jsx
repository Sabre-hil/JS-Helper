import React, { useContext } from 'react';
import {
  View, Text, Image, Linking, TouchableOpacity,
} from 'react-native';
import styles from '../Homescreen/stylesHomePage';
import themeContext from '../config/themeContext';

const hizirGit = 'https://github.com/Sabre-hil';
const zayushGit = 'https://github.com/mallospall';
const lekhaGit = 'https://github.com/pilpan';
const andreyGit = 'https://github.com/yyong1';
const hizInsta = 'https://www.instagram.com/duhur_dac/';

export default function About() {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.aboutContainer, { backgroundColor: theme.backgroundColor }]}>
      <Image
        style={styles.aboutImg}
        source={require('./dungeon-team.jpg')}
      />
      <Text style={[styles.aboutText, { color: theme.color }]}>
        Привет дорогой пользователь мы команда разработчиков JS-Helper, мы очень рады что ты пользуешься нашим приложением и мы делаем все чтобы ты мог с весельем и пользой проводит свое время в нашем приложении, с любовью
      </Text>

      <TouchableOpacity style={styles.aboutButton} title="JS-Helper" onPress={() => { Linking.openURL(hizirGit).catch((err) => console.log('Ошибка в соединении', err)); }}>

        <Text style={styles.aboutTextLink}>Хизир Абдеев</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} title="JS-Helper" onPress={() => { Linking.openURL(zayushGit).catch((err) => console.log('Ошибка в соединении', err)); }}><Text style={styles.aboutTextLink}>Аюш Джаднаем</Text></TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} title="JS-Helper" onPress={() => { Linking.openURL(andreyGit).catch((err) => console.log('Ошибка в соединении', err)); }}><Text style={styles.aboutTextLink}>Андрей Баранов</Text></TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} title="JS-Helper" onPress={() => { Linking.openURL(lekhaGit).catch((err) => console.log('Ошибка в соединении', err)); }}><Text style={styles.aboutTextLink}>Алексей Захаров</Text></TouchableOpacity>
    </View>
  );
}
