import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { AuthContext } from '../context';

const FolderListScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  console.log('state', state);

  return (
    <View>
      <Text>FolderListScreen</Text>
      <Button
        title="Go to Folder Details"
        onPress={() => navigation.navigate('FolderDetails')}
      />
    </View>
  );
};

export default FolderListScreen;
