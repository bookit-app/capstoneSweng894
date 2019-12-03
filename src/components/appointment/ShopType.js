import React from 'react'
import {View, Platform} from 'react-native'
import { Button, ButtonCustom } from '../common'

/*Setups the Input Field for User Location 
 * @param {*} props 
*/

const CreateAppointmentBtn = (props) => {
    return (
        <View style={props.viewStyle}>
            <ButtonCustom
            onPress={props.btnAction}
            buttonStyle={props.shopBtnStyle}
            textStyle={props.textStyle}
            alignItems= {'center'}

            >
                {props.text}
                </ButtonCustom>
        </View>
        
    )
}

export default (CreateAppointmentBtn)