import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';




export const Tabs = () => {
    return Platform.OS === 'ios' 
        ? <TabsIOS />
        : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{ backgroundColor: colores.primary }}
            screenOptions={({ route }) => ({
            
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarIcon: ( { color, focused } ) => {
                    // console.log('este es route', route.name);
                    // console.log('este es color, focused, size:', color, focused, size);
                    let iconName;
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = <Ionicons name="star" size={25} color={color} />;
                            break;
                    
                        case 'Tab2Screen':
                            iconName = <Ionicons name="star" size={25} color={color} />;
                            break;
                        case 'StackNavigator':
                            iconName = <Ionicons name="star" size={25} color={color} />;
                            break;
                    }
                    // return <Text style={{color: color}}  >{iconName}</Text>
                    return <Text style={{color}}  >{iconName}</Text>
                }
            })}         
        
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab 1'}} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab 2'}} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}}component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{ backgroundColor: "white" }}
        screenOptions={({ route }) => ({
            
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
                tabBarIcon: ( { color, focused, size } ) => {
                    // console.log('este es route', route.name);
                    // console.log('este es color, focused, size:', color, focused, size);
                    let iconName;
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = <Ionicons name="ios-cube-outline" size={25} color={color} />;
                            break;
                    
                        case 'Tab2Screen':
                            iconName = <Ionicons name="folder-open-outline" size={25} color={color} />;
                            break;
                        case 'StackNavigator':
                            iconName = <Ionicons name="game-controller-outline" size={25} color={color} />;
                            break;
                    }
                    // return <Text style={{color: color}}  >{iconName}</Text>
                    return <Text style={{color}}  >{iconName}</Text>
                }
        })}           
        
        >
        {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab 1', tabBarIcon: ( props ) => <Text style={ {color: props.color }}  >Texto 1</Text> }} component={Tab1Screen} /> */}
        <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab 1'}} component={Tab1Screen} />
        {/* <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab 2'}} component={Tab2Screen} /> */}
        <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab 2'}} component={TopTabNavigator} />
        <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}}component={StackNavigator} />
    </BottomTabIOS.Navigator>
    );
}

