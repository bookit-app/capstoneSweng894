import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { ButtonCustom } from '../../components/common'
import { settingPref } from '../../actions/setting-action'

class SettingPref2 extends React.Component {
    onMoveToTab(){
        this.props.settingPref(true)
        this.props.navigation.navigate('App')
    }
    render(){
        return(
            <View>
                <Text>{'Setting Pref 2'}</Text>
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
        settingPref: (pref) => dispatch(settingPref(pref))
    }
}

export default connect(null, mapDispatchToProps)(SettingPref2)