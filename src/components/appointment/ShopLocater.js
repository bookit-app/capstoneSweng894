import React from 'react'
import {View, Platform} from 'react-native'
import {InputCustom}  from '../../components/common/InputCustom'
import CustomInputStyles from '../../components/styles/CustomInputStyles'

/*Setups the Input Field for User Location 
 * @param {*} props 
*/

const ShopLocater = (props) => {
    return (
        <View>
            <View>
                <InputCustom
                    placeholder ="Zip,City,or Sate"
                    value={props.userLocationInput}
                    onChangeText={props.locationOnChge}
                    inputStyle = {CustomInputStyles.inputStyleOsLong}
                    containerStyle={CustomInputStyles.containerStyleLeft}
                    textAlign = {CustomInputStyles.inputTextAlignment}
        />
    </View>
    </View>
    )
}

export default (ShopLocater)