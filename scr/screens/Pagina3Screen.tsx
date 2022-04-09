import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({ navigation }: Props) => {

    return (
        <View style={ styles.globalMargin } >
            <Text style={ styles.title }>Pagina3Screen</Text>
            <Button title="devolverse a Pagina 2 con pop" onPress={() => navigation.pop() } />
            <Button title="Ir a home con popToTop" onPress={() => navigation.popToTop() } />
        </View>

    )
}
