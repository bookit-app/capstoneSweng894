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
            <ButtonCustom
                onPress={props.btnTwo}
                buttonStyle={props.btnTwoStyle}
                textStyle={props.txtTwotyle}
            >
                {props.txtTwo}
            </ButtonCustom>
        </View>
    )
}

export default AccountButtons