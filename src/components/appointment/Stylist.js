import React from 'react'
import { View, Text } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'

/**
 * Stylist handler
 * @param {*} props 
 */
const Stylist = (props) => {
    const { status, staffMemberName, stylistList, onSetStylist } = props
    
    if(!status){
        return (
            <View>
                <Text>{staffMemberName}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={"i.e. Stylist"}
                    fieldTemplate={AppointmentRenderPickerField}
                    options={stylistList.map(s => s.Name)}
                    onValueChange={onSetStylist}//s => onSetStylist(s)}
                    value={staffMemberName}
                />
            </View>
        )
    }
}

export {Stylist}