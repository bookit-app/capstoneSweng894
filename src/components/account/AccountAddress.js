import React from 'react'
import { View } from 'react-native'
import { Input, InputNumber } from '../common'
import styles from '../styles/AccountAddress.styles'

const AccountAddress = (props) => {
    return (
        <View>
            <View style={styles.Row}>
                <Input
                    placeholder="i.e. 100 Main Street"
                    label="Address: "
                    value={props.address}
                    onChangeText={props.onAddressChge}
                    error={props.errorAddress}
                />
                <Input
                    placeholder="i.e. Malven"
                    label="City: "
                    value={props.city}
                    onChangeText={props.onCityChge}
                    error={props.errorCity}
                />
            </View>
             <View style={styles.Row}>   
                 <Input
                    placeholder="i.e. PA"
                    label="State: "
                    value={props.state}
                    onChangeText={props.onStateChge}
                    error={props.errorState}
                /> 
                <InputNumber
                    placeholder="i.e. 19901"
                    label="Zip: "
                    value={props.zip}
                    onChangeText={props.onZipChge}
                    error={props.errorZip}
                />
            </View>
        </View>
    )
}

export default AccountAddress