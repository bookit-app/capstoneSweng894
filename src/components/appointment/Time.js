import React from 'react'
import { View, Text } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import styles from '../styles/General.styles'
import { AppointmentRenderPickerField } from '../appointment'



const Time = ({placeHour, defaultHour, optionsHour, onHourChange, hour,
    placeMinute, defaultMinute, optionsMinute, onMinuteChange, minute}) => {
    
    return (
        <View>
            <View style={styles.Row}>
                <View style={{paddingEnd: 5}}>
                    <CustomPicker
                        placeholder={placeHour}
                        defaultValue={defaultHour}
                        fieldTemplate={AppointmentRenderPickerField}
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
                        fieldTemplate={AppointmentRenderPickerField}
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