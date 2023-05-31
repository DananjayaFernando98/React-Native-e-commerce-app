import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SpalshScreen';
import SignupPage from './components/SignupPage';
// You can import from local files

import AssetExample from './components/AssetExample';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Stack=createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,headerBackTitle:''}}>
      
     <Stack.Screen  name="SplashScreen" component={SplashScreen} />
    <Stack.Screen  name="WelcomeScreen" component={WelcomeScreen} />
      
      <Stack.Screen  name="LoginScreen" component={LoginScreen} />
      <Stack.Screen  name="SignupPage" component={SignupPage} />

      
      {/* <Stack.Screen name="Login"  component={LoginScreen} />
      <Stack.Screen name="Product"  component={Products} /> */}

      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //  <AssetExample/>
    // </View>
  );
}

const styles = StyleSheet.create({
  
  
});


