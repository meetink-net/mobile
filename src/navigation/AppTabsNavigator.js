import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContactsStackNavigator from './ContactsStackNavigator';
import FoldersStackNavigator from './FoldersStackNavigator';

const AppTabs = createBottomTabNavigator();
const AppTabsNavigator = () => {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen
        name="Contacts"
        component={ContactsStackNavigator}
        options={{
          headerTitle: 'Contacts',
        }}
      />
      <AppTabs.Screen
        name="Folders"
        component={FoldersStackNavigator}
        options={{
          headerTitle: 'Folders',
        }}
      />
    </AppTabs.Navigator>
  );
};

export default AppTabsNavigator;
