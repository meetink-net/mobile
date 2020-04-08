import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SigninScreen } from '../screens';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SigninScreen}
        options={{
          headerTitle: 'Sign In',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
