/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import { Provider } from 'react-redux';
import themeContext from './src/components/config/themeContext';
import theme from './src/components/config/Theme';
import store from './src/redux/store';
import StackNavigation from './src/navigator/StackNavigation';

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const eventListener = EventRegister.addEventListener(
      'changeTheme',
      (data) => {
        setMode(data);
      },
    );
    return () => {
      EventRegister.removeAllListeners(eventListener);
    };
  });
  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </themeContext.Provider>

  );
}
