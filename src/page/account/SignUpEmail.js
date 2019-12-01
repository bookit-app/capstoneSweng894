import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import validation from '../../validation'
import utilites from '../../utilites'
import AccountSignUpForm from '../../components/account/AccountSignUpForm'
import { signUp, signUpWithProfile } from '../../store'
import { auth, preference } from '../../actions'
import { GenderV2 } from '../../constant'

/**
 * Sign-Up page with Email/Password Only
 */
class SignUpEmail extends React.Component {
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
            gender:"i.e. Male",
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
            loading: false,
            _uid: '',
            _token: '',
            alreadyExist: false,
            prefAlreadyExit: false,
            onType: false,
        }
        
        this.verifyFirstName = validation.verifyFirstName.bind(this)
        this.verifyLastName = validation.verifyLastName.bind(this)
        this.verifyEmail = validation.verifyEmail.bind(this)
        this.verifyPassword = validation.verifyPassword.bind(this)
        this.verifyTelephone = validation.verifyTelephone.bind(this)
        this.verifyDate = validation.verifyDate.bind(this)
        this.verifyGender = validation.verifyGender.bind(this)
        this.verifyStreet = validation.verifyStreet.bind(this)
        this.verifyCity = validation.verifyCity.bind(this)
        this.verifyState = validation.verifyState.bind(this)
        this.verifyZip = validation.verifyZip.bind(this)

        this.onOtherAccount = utilites.onOtherAccount.bind(this)
        this.onLogInButton = utilites.onLogInButton.bind(this)
        this.onLogInSuccess = utilites.onLogInSuccess.bind(this)
        this.onLogInFail = utilites.onLogInFail.bind(this)
        this.onLogInSub = utilites.onLogInSub.bind(this)
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){        
        if(!nextProps.loading && nextProps.error){
            this.onLogInFail(nextProps.error.message)
            this.props.settingPref(false)
         } else {
            if(!nextProps.error && nextProps.userId){
                this.onLogInSuccess('S')
                this.props.settingPref(false)
             } else {
                this.props.userAuthError('')
             }
         }
     }

    render(){
        return(
            <View>
                <AccountSignUpForm
                    testID='AccountSignForm'
                    imageHolder={false}
                    placeholder={require('../../image/Placeholder150.png')}
                    image={require('../../image/Placeholder150.png')} 
                    firstName = {this.state.firstName}
                    firstNameChge={firstName => this.verifyFirstName( firstName)}
                    firstNameError = {this.state.firstNameError}
                    lastName = {this.state.lastName}
                    lastNameChge={lastName => this.verifyLastName( lastName )}
                    lastNameError = {this.state.lastNameError}
                    email={this.state.email}
                    onEmailChge={email => this.verifyEmail( email )}
                    emailError={this.state.emailError}
                    password={this.state.password}
                    onPasswordChge={password => this.verifyPassword( password )}
                    passwordError={this.state.passwordError}
                    telephone = {this.state.telephone}
                    telephoneOnChge={telephone => this.verifyTelephone( telephone )}
                    telephoneError = {this.state.telephoneError}
                    gender = {this.state.gender}
                    genderItem={GenderV2.map(a => a.Name)}
                    genderOnChge={gender => this.verifyGender( gender )}
                    genderError = {this.state.genderError}
                    dob={this.state.dob}
                    dobOnChge={ dob => this.verifyDate(dob)}
                    dobError = {this.state.dobError}
                    street = {this.state.street}
                    streetOnChge={street => this.verifyStreet( street )}
                    streetError = {this.state.streetError}
                    city = {this.state.city}
                    cityOnChge={city => this.verifyCity(city)}
                    cityError = {this.state.cityError}
                    stateValue = {this.state.state_}
                    stateOnChge={state_ => this.verifyState( state_)}
                    stateError = {this.state.state_Error}
                    zip = {this.state.zip}
                    onZipChge={zip => this.verifyZip( zip )}
                    zipError = {this.state.zipError}
                    error={this.state.error}
                    onLogInButton={() => this.onLogInButton('S')}
                    fgLogic={false}
                    onOtherAccountOptionClick={() => this.onOtherAccount("L")}
                    otherAccountTxt={'Already have an Account? Login'}  
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSet: (user) => dispatch(auth.userSet(user)),
        userAuthError: (error) => dispatch(auth.userAuthError(error)),
        settingPref: (pref) => dispatch(preference.settingPref(pref)),
        signingUp: (email,password) => dispatch(signUp(email, password)),
        signUpWithProfile: (email, password, payload) => dispatch(signUpWithProfile(email, password, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpEmail)