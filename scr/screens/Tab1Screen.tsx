import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1 Screen useEffect')
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title } >Iconos</Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="attach-outline" />
                <TouchableIcon iconName="bar-chart" />
                <TouchableIcon iconName="calculator-outline" />
                <TouchableIcon iconName="ios-duplicate" />
            </Text>
        </View>
    )
}

