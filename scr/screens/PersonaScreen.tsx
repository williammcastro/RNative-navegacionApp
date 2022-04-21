import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

import { RootStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AuthContext'

// //inicio tipado de datos forma rapida 
// interface RouterParams {
//     id: number;
//     nombre: string;
// }
// //fin tipado de datos forma rapida

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};


export const PersonaScreen = ( { route, navigation }: Props) => {

    const { changeUsername } = useContext(AuthContext);

    // console.log('estos son los props.route', route)
    // const params = route.params as RouterParams;// adicional para tipado rapido y asi quitar el !
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        })
    }, [])

    useEffect(() => {
        //disparar la accion de cambiar el nombre cahngeUsername
        changeUsername(params.nombre);
    }, [])
    

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}

