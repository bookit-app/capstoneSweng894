import React from 'react'
import { Text, View } from 'react-native'
import { SkipNav } from '../../components/preference' 
import style from '../styles/PreferencePage1.styles'

class SettingPref1 extends React.Component {
    render(){
        return(
            <View>
                <View style={style.topView}>
                    <SkipNav
                        onClickMoveToNext={() => this.props.navigation.navigate('SettingPref2')} 
                    />
                </View>
                <Text>{'Setting Pref 1'}</Text>
            </View>
        )
    }
}

export default SettingPref1