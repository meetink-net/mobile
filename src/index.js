import React, { useContext } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import { AppTabsNavigator, AuthStackNavigator } from './navigation';
import { AuthProvider, AuthContext } from './context';

const RootNavContainer = () => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.isSignedIn && <AppTabsNavigator />}
      {!state.isSignedIn && <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <RootNavContainer />
    </AuthProvider>
  );
}

registerRootComponent(App);
