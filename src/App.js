import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GetStarted } from './pages';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
