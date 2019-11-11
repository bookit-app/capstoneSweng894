import React from 'react'
import { View, Text, Platform } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import styles from '../styles/General.styles'

/**
 * CustomPicker - Individual field component
 * @param {*} settings 
 */
const renderPickerField = (settings) => { 
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

const Time = ({placeHour, defaultHour, optionsHour, onHourChange, hour,
    placeMinute, defaultMinute, optionsMinute, onMinuteChange, minute}) => {
    
    return (
        <View>
            <View style={styles.Row}>
                <View style={{paddingEnd: 5}}>
                    <CustomPicker
                        placeholder={placeHour}
                        defaultValue={defaultHour}
                        fieldTemplate={renderPickerField}
                        options={optionsHour}
                        onValueChange={onHourChange}
                        value={hour}
                    />

                </View>
                <Text>{':'}</Text>
                <View style={{paddingStart: 5}}>
                    <CustomPicker
                        placeholder={placeMinute}
                        defaultValue={defaultMinute}
                        fieldTemplate={renderPickerField}
                        options={optionsMinute}
                        onValueChange={onMinuteChange}
                        value={minute}
                    />
                </View>
            </View>
        </View>
    )
}

export {Time}