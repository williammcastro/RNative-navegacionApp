import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {

    const { signIn, logout, authState:{ isLoggedIn } } = useContext( AuthContext )
    // const { isLoggedIn } = authState;

    // console.log('authState', authState.isLoggedIn)

    return (
        <View style={ styles.globalMargin} >
            <Text style={ styles.title } >Contacts Screen</Text>

           {
                !isLoggedIn && <Button title="Sign In" onPress={ signIn } />
            }
           {
                isLoggedIn && <Button title="Logout" onPress={ () => logout() } />
            }
           
        </View>
        )
}
