import React from 'react'
import {View, Text} from 'react-native'

/**
 * CustomPicker - Individual field component
 * @param {*} settings 
 */
const AppointmentRenderPickerField = (settings) => { 
    const { selectedItem, defaultText, getLabel} = settings

    return (
        <View>
            {!selectedItem && <Text style={{ color: 'grey', alignSelf: 'center' }}>{defaultText}</Text>}
            {selectedItem && (
                <View style={{alignSelf: 'center'}}>
                    <Text style={{alignSelf: 'center'}}>
                        {getLabel(selectedItem)}
                    </Text>
                </View>
            )}
        </View>
    )
}

export {AppointmentRenderPickerField}