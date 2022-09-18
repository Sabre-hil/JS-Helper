import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Qestion from './Qestion';
import { colors } from '../../../constants';

function GameDev({ navigation }) {
  const [currentQestionId, setCurrentQestionId] = useState(0);
  return (
    <View
      style={{
        backgroundColor: colors.mainColor,
        flex: 1,
        // height: 100,
      }}
    >
      <Header currentQestionId={currentQestionId} />
      <Qestion currentQestionId={currentQestionId} />
    </View>
  );
}

export default GameDev;
