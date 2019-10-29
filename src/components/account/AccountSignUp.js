import React from 'react'
import { View, Text } from 'react-native'
import { Input, InputCustom } from '../common'
import CustomInputStyles from '../styles/CustomInputStyles'

/**
 * Account Log-In/Sign-Up user & password fields 
 * 
 * @param {*} props 
 */
const  AccountSignUp = (props) => {
    return(
        <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="First Name"
                    label="First Name: "         
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle} 
                />
                 <InputCustom
                    secureTextEntry
                    placeholder="Last Name"
                    label={"Last Name: "}
                    inputStyle = {CustomInputStyles.inputStyleRight}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {CustomInputStyles.errorStyleRight}

                />
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    secureTextEntry
                    placeholder="Email"
                    label={"Email: "}
                    value={props.emailValue}
                    onChangeText={props.emailOnChge}
                     error={props.errorEmail}   
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
                 <InputCustom
                    secureTextEntry
                    placeholder="Password"
                    label={"Password:"}
                    value={props.passwordValue}
                    onChangeText={props.passwordOnChge}
                    error={props.errorPassword} 
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="Telephone"
                    label="Telephone: "         
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle} 
                />
                 <InputCustom
                 //This needs to be a drop box not a CustomInput 
                    secureTextEntry
                    placeholder="Gender"
                    label={"Gender: "}
                    inputStyle = {CustomInputStyles.inputStyleRight}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {CustomInputStyles.errorStyleRight}

                />
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    secureTextEntry
                    placeholder="Address"
                    label={"Address: "}
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
                 <InputCustom
                    secureTextEntry
                    placeholder="City"
                    label={"City:"}
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    secureTextEntry
                    placeholder="State"
                    label={"State: "}
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
                 <InputCustom
                    secureTextEntry
                    placeholder="Zipcode"
                    label={"Zipcode:"}
                    inputStyle = {CustomInputStyles.inputStyleLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.errorStyle}

                />
            </View>
    
        </View>
    )
}

export default AccountSignUp