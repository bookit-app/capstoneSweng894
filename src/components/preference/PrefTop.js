import React from 'react'
import { View, Text } from 'react-native'
import style from '../styles/PrefTop.styles'

const PrefTop = (props) => {
    return (
        <View>
            <Text style={style.headerTxt}>
                {'Pre Top'}
            </Text>
        </View>
    )
}

export default PrefTop