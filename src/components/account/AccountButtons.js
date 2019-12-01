import React from 'react'
import { View } from 'react-native'
import { ButtonCustom } from '../common/ButtonCustom' 

/**
 * General customizable button 
 * 
 * @param {*} props 
 */
const AccountButtons = (props) => {
    return (
        <View>
            <ButtonCustom
                testID='AccountBtn'
                onPress={props.btnOne}
                buttonStyle={props.btnOneStyle}
                textStyle={props.txtOnetyle}
            >
                {props.txtOne}
            </ButtonCustom>
        </View>
    )
}

export default AccountButtons