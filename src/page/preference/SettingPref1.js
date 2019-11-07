import React from 'react'
import { Modal } from 'react-native'
import PreferenceForm from '../../components/preference/PreferenceForm'

class SettingPref1 extends React.Component {
    render(){
        return (
            <Modal visible={ this.props.display} animationType='fade'>
                <this.props.onClose/>
                <PreferenceForm
                    header={'Hi!'}
                    subHeader={"Let's start by setting up appointment preferences"}
                    sectionHeader={'You want'}
                    btnOption1={'Hair Dresser'}
                    btnOption2={'Barber'}
                    resultSectionHeader={'Where do you prefer to book ?'}
                    onContiune={'SettingPref1'}
                    onRemoveSkipBtn={true}
                    onSkip={'SettingPref1'}
                />
            </Modal>
        )
    }
}

export default SettingPref1