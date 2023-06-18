import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

type ContactScreenProps = {
  navigation: NavigationProp<any>;
};


const Contact = ({navigation}:ContactScreenProps):JSX.Element => {
  return (
    <View>
      <Text>Contact</Text>
      <Button title="go Back" onPress={() => navigation.navigate('RouteHome')}/>
    </View>
  )
}

export default Contact