import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FolderListScreen, FolderDetailsScreen } from '../screens';

const FoldersStack = createStackNavigator();
const FoldersStackNavigator = () => {
  return (
    <FoldersStack.Navigator>
      <FoldersStack.Screen
        name="FolderList"
        component={FolderListScreen}
        options={{
          headerTitle: 'Folder List',
        }}
      />
      <FoldersStack.Screen
        name="FolderDetails"
        component={FolderDetailsScreen}
        options={{
          headerTitle: 'Folder Details',
        }}
      />
    </FoldersStack.Navigator>
  );
};

export default FoldersStackNavigator;
