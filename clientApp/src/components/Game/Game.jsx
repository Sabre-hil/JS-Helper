import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from './Header';
import Buttons from './Buttons';
import Qestion from './Qestion';
import { colors } from '../../../constants';

function Game({ navigation }) {
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
      <ScrollView>
        <Buttons
          currentQestionId={currentQestionId}
          setCurrentQestionId={setCurrentQestionId}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}

export default Game;
