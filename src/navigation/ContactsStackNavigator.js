import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ContactListScreen, ContactDetailsScreen } from '../screens';

const ContactsStack = createStackNavigator();
const ContactsStackNavigator = () => {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen
        name="ContactList"
        component={ContactListScreen}
        options={{
          headerTitle: 'Contact List',
        }}
      />
      <ContactsStack.Screen
        name="ContactDetails"
        component={ContactDetailsScreen}
        options={{
          headerTitle: 'Contact Details',
        }}
      />
    </ContactsStack.Navigator>
  );
};

export default ContactsStackNavigator;
