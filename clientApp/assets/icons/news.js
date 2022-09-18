/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image } from 'react-native';

function NewsIcon({ focused }) {
  return (
    <Image source={require('../../src/components/SideMenu/icons/home.png')} resizeMode="contain" style={{ width: 60, height: 60, tintColor: focused ? '#e32f45' : '#748c94' }} />
  );
}

export default NewsIcon;
