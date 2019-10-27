import React from 'react'
import { connect } from 'react-redux'
import { preference, provider} from '../../actions'

import PreferenceForm from '../../components/preference/PreferenceForm'

class ProfilePref1 extends React.Component {
    render(){
        return (
            <PreferenceForm
                header={'Hi!'}
                subHeader={"Let's start by setting up appointment preferences"}
                sectionHeader={'You want'}
                btnOption1={'Hair Dresser'}
                btnOption2={'Barber'}
                resultSectionHeader={'Where do you prefer to book ?'}
                onContiune={'Pref2'}
                onRemoveSkipBtn={false}
                onSkip={'Pref2'}
            />
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        token: state.auth.token,
        preference: state.preference.preference,
        profile: state.profile.profile,
        providerResults: state.provider.providerSearchResult
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setPreference: (prefer) => dispatch(preference.setPreference(prefer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePref1)