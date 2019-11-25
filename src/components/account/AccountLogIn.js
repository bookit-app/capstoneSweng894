import React from 'react'
import { View, Platform } from 'react-native'
import { InputCustom } from '../common'
import CustomInputStyles from '../styles/CustomInputStyles'

/**
 * Account Log-In/Sign-Up user & password fields 
 * 
 * @param {*} props 
 */
const  AccountLogIn = (props) => {
    return(
        <View>
            <View>
                <InputCustom
                    placeholder="user.email@dummy.com"
                    label="Email: "
                    value={props.emailValue}
                    onChangeText={props.emailOnChge}
                    error={props.errorEmail}
                    inputStyle = { CustomInputStyles.inputStyleOsNormal}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.error} 
                    textAlign = {CustomInputStyles.inputTextAlignment}

                />
            </View>
            <View>
                <InputCustom
                    secureTextEntry
                    placeholder="*******************"
                    label={"Password: "}
                    value={props.passwordValue}
                    onChangeText={props.passwordOnChge}
                    error={props.errorPassword}
                    inputStyle = {CustomInputStyles.inputStyleOsNormal}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.error } 
                    textAlign = {CustomInputStyles.inputTextAlignment}


                />
            </View>
        </View>
    )
}

export default AccountLogIn