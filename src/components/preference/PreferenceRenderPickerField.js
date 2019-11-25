import React from 'react'
import {View, Text} from 'react-native'
import styles from '../styles/PrefResult.styles'

/**
 * CustomPicker - Individual field component
 * @param {*} settings 
 */
const PreferenceRenderPickerField = (settings) => { 
    const { selectedItem, defaultText, getLabel} = settings

    return (
        <View>
            <View style={styles.containerStyle}>
            {!selectedItem && <Text style={styles.inputStyle, { color: 'grey' }}>{defaultText}</Text>}
            {selectedItem && (
                <View style={styles.inputStyle}>
                    <Text>
                        {getLabel(selectedItem)}
                    </Text>
                    <Text/>
                </View>
            )}
            </View>
        </View>
    )
}

export{PreferenceRenderPickerField}