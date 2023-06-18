import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import HomeScreen from './App.section/screens/HomeScreen/homeScreen';
import Footer from './App.section/components/footer/footer';
import Header from './App.section/components/header/header';



function App(): JSX.Element {


  return (
    <SafeAreaView>
      <StatusBar backgroundColor="grey" barStyle="default" hidden={false} />
      <Header />
      <HomeScreen />
      <Footer />
    </SafeAreaView>
  );
}


export default App;
