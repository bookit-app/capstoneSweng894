import React from 'react'
import { View, Text, Platform } from 'react-native'
import { InputCustom, InputNumberCustom } from '../common'
import CustomInputStyles from '../styles/CustomInputStyles'
import { CustomPicker } from 'react-native-custom-picker'

/**
 * CustomPicker - Individual field component
 * @param {*} settings 
 */
const renderPickerField = (settings) => { 
    const { selectedItem, defaultText, getLabel} = settings

    return (
        <View>
            <View style={CustomInputStyles.containerStyleRight}>
            {!selectedItem && <Text style={styles.inputStyle, { color: 'grey' }}>{defaultText}</Text>}
            {selectedItem && (
                <View style={Platform.OS === 'android' ? CustomInputStyles.inputStyleAndroid : CustomInputStyles.inputStyleLeft }>
                    <Text>
                        {getLabel(selectedItem)}
                    </Text>
                    <Text/>{/* Not necessary but makes the form match City, State may want to remove  */}
                </View>
            )}
            </View>
        </View>
    )
}

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
                    inputStyle = {CustomInputStyles.inputStyleOsLeft }
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.error} 
                    textAlign= {CustomInputStyles.inputTextAlignment}

                />
                 <InputCustom
                    placeholder="i.e. Jackson"
                    label={"Last Name: "}
                    value={props.lastNameValue}
                    onChangeText={props.lastNameChge}
                    error={props.errorLastName}
                    inputStyle = {CustomInputStyles.inputStyleOsRight}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {CustomInputStyles.error } 
                    textAlign= {CustomInputStyles.inputTextAlignment}

                />
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. e@dummy.com"
                    label={"Email: "}
                    value={props.emailValue}
                    onChangeText={props.emailOnChge}
                    error={props.errorEmail}   
                    inputStyle = {CustomInputStyles.inputStyleOsLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}       
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.error} 
                    textAlign= {CustomInputStyles.inputTextAlignment}

                />
                 <InputCustom
                    secureTextEntry
                    placeholder="Password"
                    label={"Password:"}
                    value={props.passwordValue}
                    onChangeText={props.passwordOnChge}
                    error={props.errorPassword} 
                    inputStyle = {CustomInputStyles.inputStyleOsRight }
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {CustomInputStyles.error} 
                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                    <InputCustom
                        placeholder="i.e. 123-123-1234"
                        label="Telephone: " 
                        value={props.telephoneValue}
                        onChangeText={props.telephoneOnChge}
                        error={props.errorTelephone}        
                        inputStyle = {CustomInputStyles.inputStyleOsLeft }
                        containerStyle = {CustomInputStyles.containerStyleLeft}      
                        labelStyle = {CustomInputStyles.labelStyle}
                        errorStyle = {CustomInputStyles.error } 
                        textAlign= {CustomInputStyles.inputTextAlignment}

                    />
                </View>
                <View style={CustomInputStyles.containerStyleRight}>
                    <Text>{"Gender: "}</Text>
                    <CustomPicker
                        placeholder={"i.e. Male"}
                        fieldTemplate={renderPickerField}
                        options={props.genderItem}
                        onValueChange={props.genderOnChge}
                        defaultValue={"i.e. Male"}
                        value={props.genderValue}
                    />
                    <Text style={CustomInputStyles.error }>{props.errorGender}</Text>
                </View>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. 100 North Street"
                    label={"Address: "}
                    value={props.streetValue}
                    onChangeText={props.streetOnChge}
                    error={props.errorStreet}
                    inputStyle = {CustomInputStyles.inputStyleOsLeft }
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.error } 
                    textAlign= {CustomInputStyles.inputTextAlignment}


                />
                 <InputCustom
                    placeholder="i.e. Miami"
                    label={"City:"}
                    value={props.cityValue}
                    onChangeText={props.cityOnChge}
                    error={props.errorCity}
                    inputStyle = {CustomInputStyles.inputStyleOsLeft}
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {CustomInputStyles.error} 

                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. PA"
                    label={"State: "}
                    value={props.stateValue}
                    onChangeText={props.stateOnChge}
                    error={props.errorState}
                    inputStyle = { CustomInputStyles.inputStyleOsLeft }
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.error } 
                    textAlign= {CustomInputStyles.inputTextAlignment}


                />
                <InputNumberCustom
                    placeholder="i.e. 19475"
                    label="Zipcode: "
                    value={props.zip}
                    onChangeText={props.onZipChge}
                    error={props.errorZip}
                    inputStyle = {CustomInputStyles.inputStyleOsRight}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {CustomInputStyles.error} 
                    textAlign= {CustomInputStyles.inputTextAlignment}

                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. 1987-01-01"
                    label={"Date of Birth: "}
                    value={props.dobValue}
                    onChangeText={props.dobChge}
                    error={props.errordob}
                    inputStyle = {CustomInputStyles.inputStyleOsLong }
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {CustomInputStyles.error } 
                    textAlign= {CustomInputStyles.inputTextAlignment}

               />
            </View>
        </View>
    )
}

export default AccountSignUp