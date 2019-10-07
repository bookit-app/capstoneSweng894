import React from 'react'
import { Platform, View, Text, TextInput } from 'react-native'
import { Input, InputNumber } from '../common'
import AccountLogIn from './AccountLogIn'

const onUserCreation = (props) => {
    if(props.Creation)  {
        return(              
            <AccountLogIn
                emailValue={props.email}
                emailOnChange={props.onEmailChge}
                pdValue={props.password}
                pdOnChange={props.onPasswordChge}
            /> 
        )   
    } else {
        return <Text>{props.Creation}</Text>
    }
}

const AccountDetails = (props) => {

    return(
        <View>
            <View style={styles.Row}>
                <Input
                    placeholder="first.name"
                    label="First Name: "
                    value={props.firstName}
                    onChangeText={props.onFirstNameChge}
                />
                <Input
                    placeholder="last.name"
                    label="Last Name: "
                    value={props.lastName}
                    onChangeText={props.onLastNameChge}
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
                />
            </View>
            <View style={styles.Row}>
                <Input
                    placeholder="dob"
                    label="Date of Birth: "
                    value={props.dob}
                    onChangeText={props.ondobChge}
                />
                <Input 
                    placeholder="gender"
                    label="Gender: "
                    value={props.gender}
                    onChangeText={props.onGenderChge}
                />
            </View>
            <View style={styles.Row}>
                <Input
                    placeholder="address"
                    label="Address: "
                    value={props.address}
                    onChangeText={props.onAddressChge}
                />
                <Input
                    placeholder="city"
                    label="City: "
                    value={props.city}
                    onChangeText={props.onCityChge}
                />
            </View>
            <View>
                <Input
                    placeholder="state"
                    label="State: "
                    value={props.state}
                    onChangeText={props.onStateChge}
                />    
                <InputNumber
                    placeholder="12345"
                    label="Zip: "
                    value={props.zip}
                    onChangeText={props.onZipChge}
                />
            </View>
        </View>
    )
}

const styles = {
    Row:{
        display: 'flex',
        flewDirection: 'row',
    },
    Column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10
    },
    TextInputStyle: {  
        textAlign: 'center',  
        height: 40,  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#009688',  
        marginBottom: 10  
    }  
}

export default AccountDetails