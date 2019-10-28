import React from 'react'
import { View, Text } from 'react-native'
import { Input, InputCustom } from '../common'

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
                  
                />
            </View>
            <View>
                <Input
                    secureTextEntry
                    placeholder="*******************"
                    label={"Password: "}
                    value={props.passwordValue}
                    onChangeText={props.passwordOnChge}
                    error={props.errorPassword}
                />
            </View>
        </View>
    )
}

export default AccountLogIn