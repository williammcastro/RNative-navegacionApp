import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from './scr/navigator/StackNavigator';
// import { MenuLateralBasico } from './scr/navigator/MenuLateralBasico';
import { MenuLateral } from './scr/navigator/MenuLateral';

export default function App() {
  return (
    <NavigationContainer>
      <MenuLateral />
      {/* <MenuLateralBasico /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer >
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
