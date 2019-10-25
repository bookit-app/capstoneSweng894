import React from 'react'
import { Modal } from 'react-native'
import PreferenceShopResult from '../../components/preference/PreferenceShopResult'

class SettingPref2 extends React.Component {
    render(){
        return(
            <Modal visible={this.props.display} animationType='slide'>
                <this.props.onClose/>
                <PreferenceShopResult
                    headerText={"Here are some shop we thought you would like based on your previous selections"}
                    noRecordsFound={'No shops can be found with your Preferences'}
                    onItemConfirmed={'Home'}
                />
            </Modal>
        )
    }
}

export default SettingPref2