import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/appTheme'



//inicio Corregir error de Pagina3Screen provisional
// export type RootStackParamList = {
//     Pagina1Screen: undefined;
//     Pagina2Screen: undefined;
//     Pagina3Screen: undefined;
// };

// //   const RootStack = createStackNavigator<RootStackParamList>();

//   declare global {
//     namespace ReactNavigation {
//       interface RootParamList extends RootStackParamList {}
//     }
//   }
//fin  Corregir error de Pagina3Screen provisional


export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Pagina 2',
            headerBackTitle: 'Volver',
        })
    }, [])
    

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina2Screen</Text>
            <Button 
                title="Ir a Pagina3Screen"
                onPress={ () => navigator.navigate('Pagina3Screen') } 
            />
        </View>
    )
}


