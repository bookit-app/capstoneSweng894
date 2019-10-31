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
import AccountOptions from './AccountOptions'
import { ButtonCustom } from '../common'
import AccountSignUp from './AccountSignUp'

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
const AccountSignUpForm = (props) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.imgSty}>
                <AccountImage
                    imageHolder={props.imageHolder}
                    placeholder={props.placeholder}
                    image={props.image}
                />
            </View>
            <AccountSignUp
                firstNameValue={props.firstName}
                firstNameChge={props.firstNameChge}
                errorFirstName={props.firstNameError}
                lastNameValue={props.lastName}
                lastNameChge={props.lastNameChge}
                errorLastName={props.lastNameError}
                emailValue={props.email}
                emailOnChge={props.onEmailChge}
                errorEmail={props.emailError}
                passwordValue={props.password}
                passwordOnChge={props.onPasswordChge}
                errorPassword={props.passwordError}
                telephoneValue={props.telephone}
                telephoneOnChge={props.telephoneOnChge}
                errorTelephone={props.telephoneError} 
                genderOnChge={props.genderOnChge}
                genderItem={props.genderItem}
                genderValue={props.gender}
                errorGender={props.genderError}
                dobValue={props.dob}
                dobChge={props.dobOnChge}
                errordob={props.dobError}
                streetValue={props.street}
                streetOnChge={props.streetOnChge}
                errorStreet={props.streetError}
                cityValue={props.city}
                cityOnChge={props.cityOnChge}
                errorCity={props.cityError}
                stateValue={props.stateValue}
                stateOnChge={props.stateOnChge}
                errorState={props.stateError}
                zip={props.zip}
                onZipChge={props.onZipChge}
                errorZip={props.zipError}
                
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

export default AccountSignUpForm