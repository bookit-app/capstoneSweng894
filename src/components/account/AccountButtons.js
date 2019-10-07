import React from 'react'
import { View } from 'react-native'
import { ButtonCustom } from '../common/ButtonCustom' 

const AccountButtons = (props) => {
    return (
        <View>
            <ButtonCustom
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