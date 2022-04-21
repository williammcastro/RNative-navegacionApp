import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from './scr/navigator/StackNavigator';
// import { MenuLateralBasico } from './scr/navigator/MenuLateralBasico';
import { MenuLateral } from './scr/navigator/MenuLateral';
import { Tabs } from './scr/navigator/Tabs';
import { AuthProvider } from './scr/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppState>  
        <MenuLateral />
        {/* <MenuLateralBasico /> */}
        {/* <StackNavigator /> */}
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer >
  );
}

const AppState = ( { children }: any ) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}
