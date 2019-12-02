import React from 'react'
import { View, Platform } from 'react-native'
import { InputCustom, InputNumberCustom } from '../common'
import styles from '../styles/AccountAddress.styles'
import CustomInputStyles from '../styles/CustomInputStyles'

/**
 * Account Address components
 * @param {*} props 
 */
const AccountAddress = (props) => {
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InputCustom
                    placeholder="i.e. 100 Main Street"
                    label="Address: "
                    value={props.address}
                    onChangeText={props.onAddressChge}
                    error={props.errorAddress}
                    inputStyle = {CustomInputStyles.inputStyleOsLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
                <InputCustom
                    placeholder="i.e. Malven"
                    label="City: "
                    value={props.city}
                    onChangeText={props.onCityChge}
                    error={props.errorCity}
                    inputStyle = {CustomInputStyles.inputStyleOsRight }
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
             <View style={{flex: 1, flexDirection: 'row'}}>   
                 <InputCustom
                    placeholder="i.e. PA"
                    label="State: "
                    value={props.state}
                    onChangeText={props.onStateChge}
                    error={props.errorState}
                    inputStyle = {CustomInputStyles.inputStyleOsLeft}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                /> 
                <InputNumberCustom
                    placeholder="i.e. 19901"
                    label="Zip: "
                    value={props.zip}
                    onChangeText={props.onZipChge}
                    error={props.errorZip}
                    inputStyle = {CustomInputStyles.inputStyleOsRight }
                    containerStyle = {CustomInputStyles.containerStyleRight}      
                    labelStyle = {CustomInputStyles.labelStyleRight}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
        </View>
    )
}

export default AccountAddress