import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Animated, StyleSheet, Text, View,
} from 'react-native';
import themeContext from '../config/themeContext';
import styles from '../Homescreen/stylesHomePage';

function Progress({ step, steps, height }) {
  // if (step >= steps) {
  //   const maxSteps = steps;
  //   step = maxSteps;
  // }
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const theme = useContext(themeContext);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text
        style={{
          fontFamily: 'Menlo',
          fontSize: 14,
          fontWeight: '900',
          marginBottom: 4,
          color: theme.color,
        }}
      >
        Ваш прогресс:
        {step}
        /
        {steps}
      </Text>
      <View
        onLayout={(e) => {
          const newWigth = e.nativeEvent.layout.width;
          setWidth(newWigth);
        }}
        style={{
          marginTop: 10,
          marginBottom: 10,
          width: 300,
          height,
          backgroundColor: '#8C8C8C',
          borderRadius: height,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={{
            height,
            width: 300,
            borderRadius: height,
            backgroundColor:
            step < steps * 0.2 ? '#EC3725'
              : step < steps * 0.4 ? '#F5881F'
                : step < steps * 0.6 ? '#FFCD01'
                  : step < steps * 0.8 ? '#E9E31A' : '#9ECB3D',
            // 'rgba(0,0,0,0.5)', // <====== ? тернарник
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [{
              translateX: animatedValue,
            }],
          }}
        />
      </View>
    </>
  );
}

function ProgressScore({ auth }) {
  return (
    <View style={styles.container}>
      <Progress step={auth.exp} steps={6100} height={20} />
    </View>
  );
}

export default ProgressScore;
