import React from 'react'
import { View, Text, Platform } from 'react-native'
import { InputCustom, InputNumberCustom } from '../common'
import CustomInputStyles from '../styles/CustomInputStyles'
import { CustomPicker } from 'react-native-custom-picker'

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
                    placeholder="i.e. William"
                    label="First Name: "     
                    value={props.firstNameValue}
                    onChangeText={props.firstNameChge}
                    error={props.errorFirstName}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
                 <InputCustom
                    placeholder="i.e. Jackson"
                    label={"Last Name: "}
                    value={props.lastNameValue}
                    onChangeText={props.lastNameChge}
                    error={props.errorLastName}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleOsRight : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. 1987-01-01"
                    label={"Date of Birth: "}
                    value={props.dobValue}
                    onChangeText={props.dobChge}
                    error={props.errordob}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleOsRight : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
               />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. e@dummy.com"
                    label={"Email: "}
                    value={props.emailValue}
                    onChangeText={props.emailOnChge}
                    error={props.errorEmail}   
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}       
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
                 <InputCustom
                    secureTextEntry
                    placeholder="Password"
                    label={"Password:"}
                    value={props.passwordValue}
                    onChangeText={props.passwordOnChge}
                    error={props.errorPassword} 
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleOsRight : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. 123-123-1234"
                    label="Telephone: " 
                    value={props.telephoneValue}
                    onChangeText={props.telephoneOnChge}
                    error={props.errorTelephone}        
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}       
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
                <View style={CustomInputStyles.containerStyleRight}>
                    <Text>{"Gender: "}</Text>
                    <CustomPicker
                        placeholder={"i.e. Male"}
                        options={props.genderItem}
                        onValueChange={props.genderOnChge}
                        defaultValue={"i.e. Male"}
                        value={props.genderValue}
                    />
                    <Text style={Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid}>{props.errorGender}</Text>
                </View>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. 100 North Street"
                    label={"Address: "}
                    value={props.streetValue}
                    onChangeText={props.streetOnChge}
                    error={props.errorStreet}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 

                />
                 <InputCustom
                    placeholder="i.e. Philadelphia"
                    label={"City:"}
                    value={props.cityValue}
                    onChangeText={props.cityOnChge}
                    error={props.errorCity}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 

                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. PA"
                    label={"State: "}
                    value={props.stateValue}
                    onChangeText={props.stateOnChge}
                    error={props.errorState}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleOsRight : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 

                />
                <InputNumberCustom
                    placeholder="i.e. 19475"
                    label="Zipcode: "
                    value={props.zip}
                    onChangeText={props.onZipChge}
                    error={props.errorZip}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleOsRight : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
        </View>
    )
}

export default AccountSignUp