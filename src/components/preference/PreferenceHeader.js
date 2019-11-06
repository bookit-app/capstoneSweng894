import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../page/styles/Preference.styles'

const PreferenceHeader = (props) => {
    return (
        <View>
            <View style={styles.RowHeader}>
                <Text style={styles.listHeader}>{props.PreferenceHeader}</Text>
            </View>
        </View>
    )
}

export {PreferenceHeader}