import React from 'react'
import { View, Text } from 'react-native'
import { Input, InputCustom } from '../common'
import CustomInputStyles from '../styles/CustomInputStyles'

/**
 * Account Log-In/Sign-Up user & password fields 
 * 
 * @param {*} props 
 */
const  AccountSignUp = (props) => {
    return(
        <View>
            <View>
                <InputCustom
                    placeholder="First Name"
                    label="First Name: "         
                    inputStyle = {CustomInputStyles.inputStyle}
                    containerStyle = {CustomInputStyles.containerStyle}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle} 
                />
            </View>
            <View>
                <InputCustom
                    secureTextEntry
                    placeholder="Last Name"
                    label={"Last Name: "}
                    inputStyle = {CustomInputStyles.inputStyle}
                    containerStyle = {CustomInputStyles.containerStyle}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
            </View>
            <View>
                <InputCustom
                    secureTextEntry
                    placeholder="Email"
                    label={"Email: "}
                    value={props.passwordValue}
                    onChangeText={props.passwordOnChge}
                    error={props.errorPassword}
                    inputStyle = {CustomInputStyles.inputStyle}
                    containerStyle = {CustomInputStyles.containerStyle}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
            </View>
            <View>
                <InputCustom
                    secureTextEntry
                    placeholder="Password"
                    label={"Password:"}
                    value={props.emailValue}
                    onChangeText={props.emailOnChge}
                     error={props.errorEmail}   
                    inputStyle = {CustomInputStyles.inputStyle}
                    containerStyle = {CustomInputStyles.containerStyle}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
            </View>
        </View>
    )
}

export default AccountSignUp