import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

// interface Props extends DrawerScreenProps<any, any>{} //por si acaso no se muestra el icono de hamburguesa, coloco el boton de menu con toggle



export const Pagina1Screen = ( {navigation}: Props ) => {

    //por si acaso no se muestra el icono de hamburguesa, coloco el boton de menu con toggle
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Button 
    //                 title='Menu'
    //                 onPress={() => navigation.toggleDrawer()}>
    //             </Button>
    //         )
    //     })
    // }, [])
    
    
    // console.log(navigation)
    return (


        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>
            <Button title="Ir a Pagina2Screen" 
            onPress={() => navigation.navigate('Pagina2Screen')} />

            <Text>Navegar con argumentos</Text>

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style={ {
                        ...styles.botonGrande,
                        backgroundColor: 'lightblue',
                    } }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Juan'
                    })}
                >
                    <Text style={ styles.textobotonGrande }>Juan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                >
                    <Text style={ styles.textobotonGrande }>Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

