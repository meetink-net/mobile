import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

const FolderListScreen = ({ navigation }) => {
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
