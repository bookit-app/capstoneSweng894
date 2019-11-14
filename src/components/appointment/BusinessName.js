import React from 'react'
import { View, Text } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'

/**
 * Shop Name handler
 * @param {*} props 
 */
const BusinessName = (props) => {
    const { status, businessName,  onbusinessList, onSetProvider, onSetShopName, onSetAddress1, onSetAddress2 } = props

    if(!status){
        return(
            <View>
                <Text>{businessName}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={"i.e. Salon"}
                    fieldTemplate={AppointmentRenderPickerField}
                    options={onbusinessList.map(b => b.Name)}
                    onValueChange={b => {
                        onSetShopName(b)  
                        onSetProvider(onbusinessList.filter(i => i.Name == b)[0].Id)
                        onSetAddress1(onbusinessList.filter(i => i.Name == b)[0].Address1)
                        onSetAddress2(onbusinessList.filter(i => i.Name == b)[0].Address2)
                    }}
                    value={businessName}
                />
            </View>
        )
    }
}

export { BusinessName }
