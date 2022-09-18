import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { GET_SESSION_THUNK } from '../redux/actions/authAction';

function StackNavigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_SESSION_THUNK());
  }, []);
  const { auth } = useSelector((s) => s);
  return (
    <NavigationContainer>
      { auth ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}

export default StackNavigation;
