import React from 'react'
import { View, Text } from 'react-native'
import { SkipNav } from '../preference'
import styles from '../styles/PrefTop.styles'

const PrefTop = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <SkipNav
                    onClickMoveToNext={props.onClickMoveToNext} 
                />
            </View>
            <Text style={styles.headerTxt}>
                {props.header}
            </Text>
            <Text style={styles.subHeaderText}>
                {props.subHeader}
            </Text>
        </View>
    )
}

export { PrefTop }