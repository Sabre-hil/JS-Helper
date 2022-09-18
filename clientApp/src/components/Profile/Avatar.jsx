import React from 'react';
import { Image, View } from 'react-native';

function Avatar({ auth }) {
  console.log('avatar auth ===>', auth);
  return (
    <View style={{ borderRadius: 50, border: 2, borderColor: 'black' }}>
      <Image
        source={{ uri: auth?.avatar }}
        style={{
          height: 150,
          width: 150,
          //   overflow: 'visible',
          borderRadius: 100,
          marginBottom: 20,
        }}
      />
    </View>
  );
}

export default Avatar;
