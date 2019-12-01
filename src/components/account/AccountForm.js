import React from 'react'
import {
    View,
    Text,
    ScrollView,
} from 'react-native'
import styles from '../styles/AccountForm.styles'
import ClearBtnSty from '../styles/ClearBtnSty.styles'
import ErrorText from '../styles/ErrorText.styles'
import BottomBtnSty from '../styles/BottomBtn.styles'
import AccountImage from './AccountImage'
import AccountLogIn from './AccountLogIn'
import AccountOptions from './AccountOptions'
import { ButtonCustom } from '../common'

/**
 * Forgot password fields depending on field
 * 
 * @param {*} props 
 */
const ForgotPassword = (props) => {
    if(props.fgLogic){
        return ( 
            <ButtonCustom
                onPress={props.onForgotClick}
                buttonStyle={ClearBtnSty.btnBtmStyle}
                textStyle={ClearBtnSty.txtBtnStyle}
            >
                {props.forgotTxt}
            </ButtonCustom>
        )
    } else {
        return <Text />
    }
}

/**
 * Account creation form (email/password) 
 * ONLY field necessary for firestore account creation
 * 
 * @param {*} props 
 */
const AccountForm = (props) => {
    return (
        <ScrollView 
            testID="AccountFnScroll"
            style={styles.scrollView}>
            <View style={styles.imgSty}>
                <AccountImage
                    testID="AccontFnImage"
                    imageHolder={props.imageHolder}
                    placeholder={props.placeholder}
                    image={props.image}
                />
            </View>
            <AccountLogIn
                testID="AccountFnLogin"
                emailValue={props.email}
                emailOnChge={props.onEmailChge}
                errorEmail={props.errorEmail}
                passwordValue={props.password}
                passwordOnChge={props.onPasswordChge}
                errorPassword={props.errorPassword}
            />   
            <View style={styles.Column}>
                <Text style={ErrorText.errorTextStyle}>
                    {props.error}
                </Text>
                <props.onLogInButton />
                <ForgotPassword
                   fgLogic={props.fgLogic}
                   onForgotClick={props.onForgotClick}
                   forgotTxt={props.forgotTxt}
                />
            </View>
            <View>
                <AccountOptions
                    onPress={props.onOtherAccountOptionClick}
                    buttonStyle={BottomBtnSty.btnBtmStyle}
                    textStyle={BottomBtnSty.txtBtnStyle}
                    viewStyle={BottomBtnSty.bottomView}
                    children={props.otherAccountTxt}
                />
            </View>
        </ScrollView>
    )
}

export default AccountForm