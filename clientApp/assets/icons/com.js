/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image, View } from 'react-native';

function ComIcon({ focused }) {
  return (
    <Image source={require('../../src/components/SideMenu/icons/community.png')} resizeMode="contain" style={{ width: 70, height: 70, tintColor: focused ? '#e32f45' : '#748c94' }} />
  );
}

export default ComIcon;
