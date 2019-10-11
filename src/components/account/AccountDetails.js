import React from 'react'
import { View, Text } from 'react-native'
import { Input, InputNumber } from '../common'
import AccountLogIn from './AccountLogIn'

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
                <Input
                    placeholder="address"
                    label="Address: "
                    value={props.address}
                    onChangeText={props.onAddressChge}
                    error={props.errorAddress}
                />
            </View>
            <View style={styles.Row}>
                <Input
                    placeholder="city"
                    label="City: "
                    value={props.city}
                    onChangeText={props.onCityChge}
                    error={props.errorCity}
                />
                <Input
                    placeholder="state"
                    label="State: "
                    value={props.state}
                    onChangeText={props.onStateChge}
                    error={props.errorState}
                /> 
            </View>
            <View style={styles.Row}>   
                <InputNumber
                    placeholder="12345"
                    label="Zip: "
                    value={props.zip}
                    onChangeText={props.onZipChge}
                    error={props.errorZip}
                />
            </View>
            <View style={styles.Column}>
                <Text style={ErrorText.errorTextStyle}>
                    {props.error}
                </Text>
            </View>
            <View style={styles.RowBtn}>
                <props.onSubmit />
            </View>
            <View style={styles.RowBtn}>
                <props.onCancal />
            </View>
        </View>
    )
}

const styles = {
    Row: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    Column: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    RowBtn: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 15
    }  ,
    error: {
        marginTop: 10,
        position: "absolute",
        bottom: 0,
        color: "red",
        fontSize: 10,
        textAlign: 'center',
        backgroundColor:  '#ffffff'
    }
}

const ErrorText = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        backgroundColor:  '#ffffff',
        justifyContent: 'center'
      }
}

export default AccountDetails