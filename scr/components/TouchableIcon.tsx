import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string,
}

export const TouchableIcon = ( {iconName}: Props ) => {

    const {  changeFavoriteIcon  } = useContext(AuthContext)
    // const { favoriteIcon } = authState

    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(iconName)}            
        >
            <Ionicons 
                name={iconName}
                size={50} 
                color={ colores.primary } />
        </TouchableOpacity>
    )
}
