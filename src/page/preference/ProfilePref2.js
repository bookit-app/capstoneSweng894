import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { ButtonCustom } from '../../components/common'
import { preference } from '../../actions'

class ProfilePref1 extends React.Component {
    onMoveToTab(){
        this.props.settingPref(true)
        this.props.navigation.navigate('Profile')
    }
    render(){
        return(
            <View>
                <Text>{'Profile Pref 1'}</Text>
                <View>
                    <ButtonCustom
                        onPress={this.onMoveToTab.bind(this)}
                    >
                        {'Move to Tabs'}
                    </ButtonCustom>
                </View>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        settingPref: (pref) => dispatch(preference.settingPref(pref))
    }
}

export default connect(null, mapDispatchToProps)(ProfilePref1)