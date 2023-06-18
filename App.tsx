



import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import HomeScreen from './App.section/screens/HomeScreen/homeScreen';
import Footer from './App.section/components/footer/footer';
import Header from './App.section/components/header/header';
import Contact from './App.section/screens/contactScreen/contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from './styles.section/style'

const App = ():JSX.Element =>{
  
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={Styles.safeAreaStyle}>
      <StatusBar backgroundColor="grey" barStyle="default" hidden={false} />
     
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName='RouteHomePage'>
          <Stack.Screen name='RouteHome' component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name='RouteContact' component={Contact} options={{ title: 'Contact' }} />
        </Stack.Navigator>
      </NavigationContainer>


   
    </SafeAreaView>
  );
}



export default App;

