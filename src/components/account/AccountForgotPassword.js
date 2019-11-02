import React from 'react'
import { View, Text, ScrollView, Platform } from 'react-native'
import { InputCustom } from '../common'
import styles from '../styles/General.styles'
import CustomInputStyles from '../styles/CustomInputStyles'

import '../../../helper/enzyme-setup'

/**
 * Account Forgot Password component
 */
const AccountForgotPassword = (props) => {
    return (
        <ScrollView>
            <View style={styles.Row}>
                <Text style={styles.labelStyle}>{props.header}</Text>
            </View>
            <View>
                <InputCustom
                    placeholder="user.email@dummy.com"
                    label="Email: "
                    value={props.email}
                    onChangeText={props.emailOnChge}
                    error={props.errorEmail}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
            <View style={styles.Row}>
                <props.onPasswordReset/>
            </View>
        </ScrollView>
    )
}

export {AccountForgotPassword}