import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Ionicons from '@expo/vector-icons/Ionicons';


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1 Screen useEffect')
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title } >Iconos</Text>
            <Text>
                <Ionicons name="airplane-outline" size={50} color="blue" />
                <Ionicons name="attach-outline" size={50} color="blue" />
                <Ionicons name="bar-chart" size={50} color="blue" />
                <Ionicons name="calculator-outline" size={50} color="blue" />
                <Ionicons name="ios-duplicate" size={50} color="blue" />
            </Text>
        </View>
    )
}

