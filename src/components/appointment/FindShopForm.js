import React from 'react'
import {
    View, Text, ScrollView,
} from 'react-native'
import styles from '../styles/AccountForm.styles'
import CustomInput  from '../../components/common/CustomInput'
import CustomInputStyles from '../../components/styles/CustomInputStyles'


const FindShopForm = (props) => {
    return (
        <View>
        <View>
        <CustomInput
        placeholder ="Zip,City,or Sate"
        value={this.props.userLocationInput}
        onChangeText={props.locationOnChge}
        inputStyle = {CustomInputStyles.inputStyleOsLong}
        containerStyle={CustomInputStyles.containerStyleLeft}
        textAlign = {CustomInputStyles.inputTextAlignment}
        />
    </View>
    </View>
    )
}

export default FindShopForm