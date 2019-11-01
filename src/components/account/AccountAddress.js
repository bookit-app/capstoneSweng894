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
            <View style={styles.Row}>
                <InputCustom
                    placeholder="i.e. 100 Main Street"
                    label="Address: "
                    value={props.address}
                    onChangeText={props.onAddressChge}
                    error={props.errorAddress}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
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
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
             <View style={styles.Row}>   
                 <InputCustom
                    placeholder="i.e. PA"
                    label="State: "
                    value={props.state}
                    onChangeText={props.onStateChge}
                    error={props.errorState}
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
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
                    inputStyle = {Platform.Os === 'ios' ? CustomInputStyles.inputStyleLeft : CustomInputStyles.inputStyleAndroid}
                    containerStyle = {CustomInputStyles.containerStyleLeft}      
                    labelStyle = {CustomInputStyles.labelStyle}
                    errorStyle = {Platform.Os === 'ios' ? CustomInputStyles.error : CustomInputStyles.errorAndroid} 
                />
            </View>
        </View>
    )
}

export default AccountAddress