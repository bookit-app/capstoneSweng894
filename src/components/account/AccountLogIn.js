import React from 'react'
import { View } from 'react-native'
import { Input, CardSection } from '../common'

const  AccountLogIn = (props) => {
    return(
        <View>
            <Input
                placeholder="user.email@dummy.com"
                label="Email: "
                value={props.emailValue}
                onChangeText={props.emailOnChange}
            />
            <Input
                secureTextEntry
                placeholder="***************"
                label={"Password: "}
                value={props.pdValue}
                onChangeText={props.pdOnChange}
            />
        </View>
    )
}
export default AccountLogIn