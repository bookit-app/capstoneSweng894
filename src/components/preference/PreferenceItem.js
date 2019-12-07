import React from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'
import styles from '../../page/styles/Preference.styles'
/**
 * Presentation item
 * @param {*} props 
 */
const PreferenceItem = (props) => {
    return(
        <View style={styles.Item}>
            <TouchableOpacity onPress={props.onProviderSelect}>
                <View style={styles.RowItem}>
                    <Image
                        style={styles.ItemimgSty}
                        source={require('../../image/BookIt_Tall.png')}
                    />   
                    <Text>{props.businessName ? props.businessName :''}</Text>
                    {/* TEXT SHOULD GO HERE TO ADD MORE ITEMS TO TABLEVIEW*/}
                </View>
            </TouchableOpacity> 
        </View>
    )
}

export {PreferenceItem}