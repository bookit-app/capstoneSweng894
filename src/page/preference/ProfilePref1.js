import React from 'react'
import { Text, View } from 'react-native'
import {SkipNav, PrefTop} from '../../components/preference'
import style from '../styles/PreferencePage1.styles'

class ProfilePref1 extends React.Component {
    render(){
        return(
            <View>
                <View style={style.topView}>
                    <SkipNav
                        onClickMoveToNext={() => this.props.navigation.navigate('Pref2')} 
                    />
                    <PrefTop>
                        {'Testing Testing'}
                    </PrefTop>
                </View>
                <Text>{'ProfilePref1'}</Text>
            </View>
        )
    }
}

export default ProfilePref1