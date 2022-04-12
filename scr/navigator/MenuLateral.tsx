import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import { Text, useWindowDimensions, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
// import { StackNavigator } from './StackNavigator';
import { Tabs } from './Tabs';


// const Stack = createStackNavigator();

// const SettingsStackScreen = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen 
//             name="SettingsScreen" 
//             component={ SettingsScreen } 
//         />
//         </Stack.Navigator>
//     );
// }

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();//no la vamos a usar!
    return (
    <Drawer.Navigator
        drawerContent={(props) => <MenuInterno { ...props } />}
    >
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        {/* <Drawer.Screen name="SettingsScreen" component={ SettingsStackScreen } /> */}
    </Drawer.Navigator>
    );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
// const MenuInterno = ( props: DrawerContentComponentProps ) => {// ** si no lo quiero desestructurar
    return (
        <DrawerContentScrollView>
            {/* Seccion Avatar */}
            <View style={ styles.avatarContainer }>
                <Image source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8ajf3m16U_NFuaJ6ol6l02_6F2-omZyZAWTDprnrPZHvcmt2Ww5GSW5ZWMuuEXavoKQ&usqp=CAU',
                }} 
                style={ styles.avatar }
                />
            </View>

            {/* Seccion de opciones del menu*/}
            <View style={ styles.menuContainer }>
                <View >
                    <TouchableOpacity 
                        style={ {
                            ...styles.menuBoton,
                            flexDirection: 'row',
                        } }
                        onPress={ () => navigation.navigate('Tabs') }
                        // onPress={ () => props.navigation.navigate('StackNavigator') }// ** si no lo quiero desestructurar
                    >
                        <Ionicons name="ios-duplicate" size={20} color="grey" />
                        <Text style={ {...styles.menuTexto, paddingStart: 10} }>Tabs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={ {
                            ...styles.menuBoton,
                            flexDirection: 'row',
                        }  }
                        onPress={ () => navigation.navigate('SettingsScreen') }
                    >
                        <Ionicons name="ios-settings" size={20} color="grey" />
                        <Text style={ {...styles.menuTexto, paddingStart: 10} }>Ajustes</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </DrawerContentScrollView>
    );
}