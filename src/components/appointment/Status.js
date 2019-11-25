import React from 'react'
import { View, Text } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'
import { StatusList } from '../../constant'

/**
 * Status handler
 * @param {*} props 
 */
const Status = (props) => {
    const {status, onSetStatus, listType} = props
    const list = StatusList.filter(x => x.Id != -1)    

    if(listType.toUpperCase().trim() == "PREVIOUS") {
        return (
            <View>
                <Text>{'Status can not be Changed'}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={status}
                    fieldTemplate={AppointmentRenderPickerField}
                    options={list.map(a => a.Name)}
                    onValueChange={onSetStatus}//st => onSetStatus(st)}
                    value={status}
                />
            </View>
        )
    }
}

export {Status}