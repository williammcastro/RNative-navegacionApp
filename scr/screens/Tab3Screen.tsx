import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab3Screen = () => {

    useEffect(() => {
        console.log('Tab 3 Screen useEffect')
    }, [])

    return (
        <View>
            <Text>Tab3 Screen</Text>
        </View>
    )
}
