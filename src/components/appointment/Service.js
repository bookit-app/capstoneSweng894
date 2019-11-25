import React from 'react'
import { View, Text } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'

/**
 * Service handler
 * @param {*} props 
 */
const Service = (props) => {
    const { status, service, serviceList, onSetServiceList} = props

    if(!status){
        return (
            <View>
                <Text>{service}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={"i.e. Service"}
                    fieldTemplate={AppointmentRenderPickerField}
                    options={serviceList.map(l => l.Name)}
                    onValueChange={onSetServiceList}//l => onSetServiceList(l)}
                    value={service}
                />
            </View>
        )
    }
}

export { Service }