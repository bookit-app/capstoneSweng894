import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Input } from '../common'
import styles from '../styles/General.styles'

const AccountForgotPassword = (props) => {
    return (
        <ScrollView>
            <View style={styles.Row}>
                <Text style={styles.labelStyle}>{props.header}</Text>
            </View>
            <View>
                <Input
                    placeholder="user.email@dummy.com"
                    label="Email: "
                    value={props.email}
                    onChangeText={props.emailOnChge}
                    error={props.errorEmail}
                />
            </View>
            <View style={styles.Row}>
                <props.onPasswordReset/>
            </View>
        </ScrollView>
    )
}

export {AccountForgotPassword}