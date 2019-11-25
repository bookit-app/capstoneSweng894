import React from 'react';
import {Platform,View,Text} from 'react-native';
 

const Header = ({}) => {
return (
<View style={styles.headerRow}>
<View style={{alignItems:'flex-start'}}>
    <Text style={styles.headerText}>{"Enter Your Location"}</Text>
</View>
</View>

);
};
export default {Header}