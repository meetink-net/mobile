import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import { AppTabsNavigator, AuthStackNavigator } from './navigation';

export default function App() {
  const isAuth = true;

  return (
    <NavigationContainer>
      {isAuth && <AppTabsNavigator />}
      {!isAuth && <AuthStackNavigator />}
    </NavigationContainer>
  );
}

registerRootComponent(App);
