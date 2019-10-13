import React from 'react'
import { View, Text } from 'react-native'
import { Input } from '../common'
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
            <AccountLogIn
                emailValue={props.email}
                emailOnChange={props.onEmailChge}
                errorEmail={props.errorEmail}
                passwordValue={props.password}
                passwordOnChge={props.onPasswordChge}
                errorPassword={props.errorPassword}
            /> 
        )   
    } else {
        return <Text>{props.Creation}</Text>
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
                <Input
                    placeholder="first.name"
                    label="First Name: "
                    value={props.firstName}
                    onChangeText={props.onFirstNameChge}
                    error={props.errorFirstName}
                />
                <Input
                    placeholder="last.name"
                    label="Last Name: "
                    value={props.lastName}
                    onChangeText={props.onLastNameChge}
                    error={props.errorLastName}
                />
            </View>
            <View style={styles.Row}>
                {onUserCreation(props)}
            </View>
            <View style={styles.Row}>
                <Input
                    placeholder="telephone"
                    label="Telephone: "
                    value={props.telephone}
                    onChangeText={props.onTelephoneChge}
                    error={props.errorTelephone}
                />
                <Input
                    placeholder="dob"
                    label="Date of Birth: "
                    value={props.dob}
                    onChangeText={props.ondobChge}
                    error={props.errorDob}
                />
            </View>
            <View style={styles.Row}>
                <Input 
                    placeholder="gender"
                    label="Gender: "
                    value={props.gender}
                    onChangeText={props.onGenderChge}
                    error={props.errorGender}
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
            <View style={styles.RowBtn}>
                <props.onDelete />
            </View>
        </View>
    )
}

export default AccountDetails