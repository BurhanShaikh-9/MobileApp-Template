import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go About"
        onPress={() => navigation.navigate('RouteContact')}
      />
    </View>
  );
};
export default HomeScreen;