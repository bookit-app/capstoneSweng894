import React from 'react'
import { Text, View } from 'react-native'
import SkipNav from '../../components/preference/SkipNav'
import style from '../styles/PreferencePage1.styles'

class PreferencePage1 extends React.Component {
    render(){
        return(
            <View>
                <View style={style.topView}>
                    <SkipNav
                        onClickMoveToNext={() => this.props.navigation.navigate('SettingPref2')} 
                    />
                </View>
                <Text>{'PreferencePage1'}</Text>
            </View>
        )
    }
}

export default PreferencePage1