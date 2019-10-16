import React from 'react'
import { View, Text } from 'react-native'
import style from '../styles/PrefTop.styles'

const PrefTop = ({children}) => {
    return (
        <View>
            <Text style={style.headerTxt}>
                {'Pre Top: ' + children}
            </Text>
        </View>
    )
}

export { PrefTop }