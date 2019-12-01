import React from 'react'
import {View, Platform} from 'react-native'
import {InputCustom}  from '../../components/common/InputCustom'
import CustomInputStyles from '../../components/styles/CustomInputStyles'
import { Button, ButtonCustom } from '../common'

/*Setups the Input Field for User Location 
 * @param {*} props 
*/

const ShopType = (props) => {
    return (
        <View style={props.viewStyle}>
            <ButtonCustom
            onPress={props.shopBtn}
            buttonStyle={props.shopBtnStyle}
            textStyle={props.textStyle}
            >
                {props.text}
                </ButtonCustom>
        </View>
        
    )
}

export default (ShopType)