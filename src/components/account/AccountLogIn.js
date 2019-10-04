import React from 'react'
import { View } from 'react-native'
import { Input, CardSection } from '../common'

const  AccountLogIn = (props) => {
    return(
        <View>
            <CardSection>
                <Input
                    placeholder="user.email@dummy.com"
                    label="Email: "
                    value={props.emailValue}
                    onChangeText={props.emailOnChange}
                />
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    placeholder="***************"
                    label={"Password: "}
                    value={props.pdValue}
                    onChangeText={props.pdOnChange}
                />
            </CardSection>
        </View>
    )
}
export default AccountLogIn