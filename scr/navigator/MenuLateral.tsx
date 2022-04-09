import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, useWindowDimensions, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

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

export const MenuLateral = () => {

    const { width } = useWindowDimensions();
    return (
    <Drawer.Navigator
        drawerContent={(props) => <MenuInterno { ...props } />}
    >
        <Drawer.Screen name="StackNavigator" component={StackNavigator} />
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
                        style={ styles.menuBoton }
                        onPress={ () => navigation.navigate('StackNavigator') }
                        // onPress={ () => props.navigation.navigate('StackNavigator') }// ** si no lo quiero desestructurar
                    >
                        <Text style={ styles.menuTexto }>Navegación</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={ styles.menuBoton }
                        onPress={ () => navigation.navigate('SettingsScreen') }
                    >
                        <Text style={ styles.menuTexto }>Ajustes</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </DrawerContentScrollView>
    );
}