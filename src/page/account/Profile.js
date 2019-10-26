import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles/Profile.styles'
import { View, ScrollView } from 'react-native'
import validation from '../../validation'
import utilites from '../../utilites'
import AccountDetails from '../../components/account/AccountDetails'
import { Spinner } from '../../components/common'
import { NavigationEvents } from 'react-navigation'

import { preference, profile } from '../../actions'

/**
 * Profile Page 
 */
class Profile extends React.Component {   
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            firstNameError: '',
            lastName:'',
            lastNameError: '',
            email:'',
            emailError: '',
            password: '',
            passwordError: '',
            telephone:'',
            telephoneError: '',
            dob:'',
            dobError: '',
            gender:'',
            genderError: '',
            street:'',
            streetError: '',
            city:'',
            cityError: '',
            state_:'',
            state_Error: '',
            zip: '',
            zipError: '',
            error: '', 
            isSocial: false,
            isProvide: '',
            isProvider: false,
            isProviderError: '',
            loading: true,
            _uid: '',
            _token: '',
            alreadyExist: false,
            prefAlreadyExit: false,
            onType: false,
        }

        this.verifyEmail = validation.verifyEmail.bind(this)
        this.verifyPassword = validation.verifyPassword.bind(this)
        this.verifyFirstName = validation.verifyFirstName.bind(this)
        this.verifyLastName = validation.verifyLastName.bind(this)
        this.verifyTelephone = validation.verifyTelephone.bind(this)
        this.verifyDate = validation.verifyDate.bind(this)
        this.verifyGender = validation.verifyGender.bind(this)
        this.verifyIsProvider = validation.verifyIsProvider.bind(this)
        this.verifyStreet = validation.verifyStreet.bind(this)
        this.verifyCity = validation.verifyCity.bind(this)
        this.verifyState = validation.verifyState.bind(this)
        this.verifyZip = validation.verifyZip.bind(this)

        this.onPrfileDelete = utilites.onPrfileDelete.bind(this)
        this.onRenderProfileDelete = utilites.onRenderProfileDelete.bind(this)
        this.onRenderProfileButton = utilites.onRenderProfileButton.bind(this)
        this.onProfileCreateFailed = utilites.onProfileCreateFailed.bind(this)
        this.onProfileCreateSucccess = utilites.onProfileCreateSucccess.bind(this)
        this.onProfileNotFound = utilites.onProfileNotFound.bind(this)
        this.onProfileRec = utilites.onProfileRec.bind(this)
        this.onProfileRefresh = utilites.onProfileRefresh.bind(this)
        this.onProfileSub = utilites.onProfileSub.bind(this)
        this.onRenderPreference = utilites.onRenderPreference.bind(this)   
    }
    
    async componentDidMount(){
        this.onProfileRefresh() 
    }

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     if(nextProps.loading != this.props.loading){
    //         console.log(nextProps.profile);
    //         // console.log(this.props.profile);
            
    //         this.onProfileRec(nextProps.profile)
    //     }
    // }

    render(){
        if(this.props.loading){
            return <Spinner size="large" />
        }

        return(
            <ScrollView style={styles.scrollView}>
                <NavigationEvents
                    onDidBlur={() => this.onProfileRefresh()}
                />
                <View>
                    <AccountDetails
                        Creation={false}
                        Deletion={this.state.alreadyExist}
                        Preference={this.state.alreadyExist}
                        firstName={this.state.firstName}
                        onFirstNameChge={firstName => this.verifyFirstName( firstName )}
                        errorFirstName={this.state.firstNameError}
                        lastName={this.state.lastName}
                        onLastNameChge={lastName => this.verifyLastName( lastName )}
                        errorLastName={this.state.lastNameError}
                        email={this.state.email}
                        onEmailChge={email => this.verifyEmail( email )}
                        errorEmail={this.state.emailError}
                        password={this.state.password}
                        onPasswordChge={password => this.verifyPassword( password )}
                        errorPassword={this.state.passwordError}
                        telephone={this.state.telephone}
                        onTelephoneChge={telephone => this.verifyTelephone( telephone )}
                        errorTelephone={this.state.telephoneError}
                        dob={this.state.dob}
                        ondobChge={dob => this.verifyDate( dob )}
                        errorDob={this.state.dobError}
                        gender={this.state.gender}
                        onGenderChge={gender => this.verifyGender( gender )}
                        errorGender={this.state.genderError}
                        address={this.state.street}
                        onAddressChge={ street => this.verifyStreet( street )}
                        errorAddress={this.state.streetError}
                        city={this.state.city}
                        onCityChge={city => this.verifyCity( city )}
                        errorCity={this.state.cityError}
                        state={this.state.state_}
                        onStateChge={state_ => this.verifyState( state_ )}
                        errorState={this.state.state_Error}
                        zip={this.state.zip}
                        onZipChge={zip => this.verifyZip( zip )}
                        errorZip={this.state.zipError}
                        isProvider={this.state.isProvide}
                        onProviderChge={isProvide => this.verifyIsProvider( isProvide )}
                        errorIsProvider={this.state.isProviderError}
                        error={this.state.error}
                        onSubmit={() => this.onRenderProfileButton()}
                        onDelete={() => this.onRenderProfileDelete()}
                        onPref={() => this.onRenderPreference()}
                    />
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        preference: state.preference.preference,
        profile: state.profile.profile,
        loading: state.profile.loading,
        errorMessage: state.profile.errorMessage,
        userId: state.auth.userId,
        token: state.auth.token,
        pref: state.preference.pref
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPreference: (prefer) => dispatch(preference.setPreference(prefer)),
        setProfile: (prof) => dispatch(profile.setProfile(prof))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)