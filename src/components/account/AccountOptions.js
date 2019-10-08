import React from 'react'
import { View } from 'react-native'
import { ButtonCustom } from '../common/ButtonCustom' 


/**
 * Custom button for Account options
 * 
 * @param {} props 
 */
const AccountOptions = (props) => {
    return (
        <View style={props.viewStyle}>
            <ButtonCustom
                onPress={props.onPress}
                buttonStyle={props.buttonStyle}
                textStyle={props.textStyle}
            >
                {props.children}
            </ButtonCustom>
        </View>
    )
}

export default AccountOptions