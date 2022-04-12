import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets();


    return (
    <Tab.Navigator
        style={{paddingTop: top}}// aplica padding al top
        sceneContainerStyle={{ backgroundColor: '#fff' }}//fondo de la pantalla
        screenOptions={({ route }) => ({
            tabBarShowIcon: true,//para que se vea el icono
            tabBarPressColor: colores.secondary,//el color que se muestra cuando se presiona una opcion del tab
            tabBarIndicatorStyle: { backgroundColor: colores.primary },//el color del indicador
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },//el tamaño de la letra
            tabBarStyle: { 
                backgroundColor: 'white',//el color del fondo
                borderTopColor: 'red',//el color del borde de arriba
                borderTopWidth: 0,//el ancho del borde de arriba
                elevation: 0,//el efecto de la sombra - quita del todo la linea de separacion de abajo
                shadowOpacity: 1,//la opacidad de la sombra depende el elevation
                shadowRadius: 0,//el radio de la sombra
                shadowOffset: { height: 0, width: 0 },//la distancia de la sombra
            },
            tabBarIcon: ( { color, focused } ) => {
                // console.log('este es route', route.name);
                // console.log('este es color, focused, size:', color, focused, size);
                let iconName;
                switch (route.name) {
                    case 'Chat':
                        iconName = <Ionicons name="chatbox-outline" size={25} color={color} />;
                        break;
                
                    case 'Contacts':
                        iconName = <Ionicons name="person-outline" size={25} color={color} />;
                        break;
                    case 'Albums':
                        iconName = <Ionicons name="book-outline" size={25} color={color} />;
                        break;
                }
                // return <Text style={{color: color}}  >{iconName}</Text>
                // return  <Ionicons name="star" size={25} color="green" />
                return <Text style={ {color} }>{iconName}</Text>
            }
        })}

    >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
    );
}

