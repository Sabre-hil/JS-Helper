import { AsyncStorage } from 'react-native';

export const setStorage = async (cook) => {
  try {
    await AsyncStorage.setItem(
      'session',
      JSON.stringify(cook),
    );
  } catch (error) {
    console.error(error);
  }
};

export const getStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(
      'session',
    );
    return JSON.parse(value);
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const removeStorage = async () => {
  try {
    const value = await AsyncStorage.removeItem(
      'session',
    );
    if (!value) {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};
