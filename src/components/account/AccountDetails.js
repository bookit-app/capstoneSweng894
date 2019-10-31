import React from 'react'
import { View, Text, Platform } from 'react-native'
import { InputCustom } from '../common'
import CustomInputStyles from '../styles/CustomInputStyles'
import ErrorText from '../styles/ErrorText.styles'
import styles from '../styles/AccountDetails.styles'
import AccountLogIn from './AccountLogIn'
import AccountAddress from './AccountAddress'

/**
 * Account Log-In/Sign-Up fields depending on flag
 * 
 * @param {*} props 
 */
const onUserCreation = (props) => {
    if(props.Creation)  {
        return(       
            <View style={styles.Row}>       
                <AccountLogIn
                    emailValue={props.email}
                    emailOnChange={props.onEmailChge}
                    errorEmail={props.errorEmail}
                    passwordValue={props.password}
                    passwordOnChge={props.onPasswordChge}
                    errorPassword={props.errorPassword}
                /> 
            </View>
        )   
    }
}

/**
 * Account Deleted button depending on flag
 * @param {*} props 
 */
const onUserDeleted = (props) => {
    if(props.Deletion){
        return (
            <View style={styles.RowBtn}>
                <props.onDelete />
            </View>
        )
    }
}

/**
 * Account Preference button depending on flage
 * @param {*} props 
 */
const onUserPreference = (props) => {
    if(props.Preference){   
        return (
            <View style={styles.RowBtn}>
                <props.onPref />
            </View>
        )
    }
}

/**
 * Account profile form
 * 
 * @param {*} props 
 */
const AccountDetails = (props) => {
    return(
        <View style={styles.Column}>
            <View style={styles.Row}>
                <InputCustom
                    placeholder="i.e. John"
                    label="First Name: "
                    value={props.firstName}
                    onChangeText={props.onFirstNameChge}
                    error={props.errorFirstName}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
                <InputCustom
                    placeholder="i.e. Williams"
                    label="Last Name: "
                    value={props.lastName}
                    onChangeText={props.onLastNameChge}
                    error={props.errorLastName}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
            {onUserCreation(props)}
            <View style={styles.Row}>
                <InputCustom
                    placeholder="i.e. 111-111-1111"
                    label="Telephone: "
                    value={props.telephone}
                    onChangeText={props.onTelephoneChge}
                    error={props.errorTelephone}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
                <InputCustom
                    placeholder="i.ei 1987-01-01"
                    label="Date of Birth: "
                    value={props.dob}
                    onChangeText={props.ondobChge}
                    error={props.errorDob}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
            <View style={styles.Row}>
                <InputCustom 
                    placeholder="i.e. Male"
                    label="Gender: "
                    value={props.gender}
                    onChangeText={props.onGenderChge}
                    error={props.errorGender}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />

                <InputCustom 
                    placeholder="i.e. Yes/No"
                    label="Is Provider: "
                    value={props.isProvider}
                    onChangeText={props.onProviderChge}
                    error={props.errorIsProvider}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
            <AccountAddress
                address={props.address}
                onAddressChge={props.onAddressChge}
                errorAddress={props.errorAddress}
                city={props.city}
                onCityChge={props.onCityChge}
                errorCity={props.errorCity}
                state={props.state}
                onStateChge={props.onStateChge}
                errorState={props.errorState}
                zip={props.zip}
                onZipChge={props.onZipChge}
                errorZip={props.errorZip}
            />
            <View style={styles.Column}>
                <Text style={ErrorText.errorTextStyle}>
                    {props.error}
                </Text>
            </View>
            <View style={styles.RowBtn}>
                <props.onSubmit />
            </View>
            {onUserDeleted(props)}
            {onUserPreference(props)}
        </View>
    )
}

export default AccountDetails