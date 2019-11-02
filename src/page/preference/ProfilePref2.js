import React from 'react'
import { connect } from 'react-redux'
import { preference } from '../../actions'
import { GetProviderSearchResult } from '../../store'
import PreferenceShopResult from '../../components/preference/PreferenceShopResult'

/**
 * Preference Page 2 form - Access from profile preference click
 */
class ProfilePref2 extends React.Component {
    render(){
        return (
            <PreferenceShopResult
                headerText={'Here are some shop we thought you would like based on your previous selections'}
                noRecordsFound={'No shops can be found with your Preferences'}
                onItemConfirmed={'Profile'}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        preference: state.preference.preference,
        providerResults: state.provider.providerSearchResult,
        searchResult: state.provider.searchResult,
        errorMessage: state.provider.errorMessage,
        loading: state.provider.loading,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settingPref: (pref) => dispatch(preference.settingPref(pref)),
        setPreference: (prefer) => dispatch(preference.setPreference(prefer)),
        getProviderResult : (filter, token) => dispatch(GetProviderSearchResult(filter, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePref2)