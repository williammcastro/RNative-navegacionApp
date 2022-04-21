import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

import { AuthContext } from '../context/AuthContext';
import { TouchableIcon } from '../components/TouchableIcon';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const { authState } = useContext(AuthContext);
    // console.log('este es authState:',authState);

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20,
        }}>
            <Text style={ styles.title }>Settings Screen</Text>

            {
                authState.favoriteIcon && <Text><TouchableIcon iconName={ authState.favoriteIcon } /></Text>
            }

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>
        </View>
    )
}
