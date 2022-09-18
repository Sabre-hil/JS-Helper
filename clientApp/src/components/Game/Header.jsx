import React from 'react';
import { Text, View } from 'react-native';

function Header({ currentQestionId }) {
  return (
    <View style={{
      marginTop: 20,
      backgroundColor: '#423d53',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      maxHeight: 70,
    }}
    >
      <Text style={{ fontSize: 40, color: 'white' }}>
        Вопрос: №
        {currentQestionId + 1}
      </Text>
    </View>
  );
}

export default Header;
