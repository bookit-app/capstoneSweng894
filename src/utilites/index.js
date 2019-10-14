
import React from 'react'
import { Alert } from 'react-native'
import api from '../api'
import firebase from 'firebase'
import { ButtonCustom, Spinner } from '../components/common'
import LogInBtn from '../components/styles/LogInBtn.styles'
import DeleteProfileBtn from '../components/styles/DeleteProfileBtn'

/**
 * On click handler for the Other account button that
 * either routes to Login or Signup depending on the auth value
 * @param {*} type - L for Log-In or other for Sign-Up 
 */ 
function onOtherAccount(type){
    console.log('onOtherAccount', type);
    
    this.setState({
        email:'',
        password: '',
        emailError: '',
        passwordError: '',
        uid: '',
        error: '', 
        loading: false
    }); 

    this.props.navigation.navigate(type === 'L'?'Login': 'SignUp')
}

/**
 * On click button that launches the On Log In function 
 * with a Log-In or Sign-up api call
 * @param {*} type - L for Log-In or other for Sign-Up
 */
function onLogInButton(type){
    console.log('onLogInButton', type);
    
    if(this.state.loading){
        return <Spinner size="small" />
    }

    return (    
        <ButtonCustom
            onPress={() => this.onLogInSub(type)}
            buttonStyle={LogInBtn.buttonStyle}
            textStyle={LogInBtn.textStyle}
        >
            {type === 'L'?'Log-In': 'Sign-Up'}
        </ButtonCustom>
    )
}

/**
 * On success handler from api which clears all the state
 * values and routes to the profile and dipatches user information
 * to redux
 * @param {*} type - L for Log-In or other for Sign-Up
 */
async function onLogInSuccess(user, type){
    console.log('onLogInSuccess');
    
    this.setState({
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        uid: '',
        error: '', 
        loading: false
    }); 

    if(type === 'L'){
        this.props.navigation.navigate('Profile', {'_uid': user.uid})
    } else {
        this.props.navigation.navigate('Login')
    }
}

/**
 * On Failure handler from api which sets error message after failing
 * @param {*} type - L for Log-In or other for Sign-Up
 */
function onLogInFail(error){
    console.log('onLogInFail',error);
    
    this.setState({
        error: error.message,
        loading: false
    })
}

/**
 * On click handler that either create or logs into a firebase account
 * @param {*} type - L for Log-In or other for Sign-Up
 */
function onLogInSub(type){
    console.log('onLogInSub', type);
    
    const { email, password, emailError, passwordError } = this.state;

    if(!emailError && !passwordError && email && password){            
        this.setState({ error: '', loading: true})
        
        console.log('onLogInSub');

        if(type === 'L'){
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((data) => {            
                    var emailVerified = data.user.emailVerified
                    console.log('emailVerified: ', emailVerified);
                    
                    if(emailVerified) {
                        var user = data.user;
                        this.onLogInSuccess(user, type);
                    } else {
                        this.setState({
                            loading: false
                        })

                        alert('Email is not valid. Please verify email before loggin in.')
                        this.props.navigation.navigate('LogIn with Email')
                    }
                })
                .catch((error) => {
                    this.onLogInFail(error);
                    console.log(error);
                })
        } else {
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then((data) => {
                    var user = data.user;

                    user.sendEmailVerification()
                        .then(a => {
                            console.log('Email Verification send');
                        }).catch(e => {
                            console.log('Failed to verification email'); 
                        })

                    this.onLogInSuccess(user, type);
                })
                .catch((error) => {
                    this.onLogInFail(error);
                    console.log(error);
                })
        }
    } else {
        if(!email){
            this.setState({
                emailError: 'Please provide email'
            })
        }

        if(!password){
            this.setState({
                passwordError: 'Please provide password'
            })
        }
    }
}

/**
 * Handler that deleted the profile then the firebase account 
 * NOTE: User is prompt with alert
 */
function onPrfileDelete(){
    console.log('Delete profile: ', this.state._token);
    Alert.alert(
        'Delete Account',
        'Are you sure you want to delete your account? ',
        [
            {text: 'Cancel', onPress: () => {return null}},
            {text: 'Confirm', onPress: () => {                
                api.deletedProfileById(firebase.auth().currentUser.uid, this.state._token)
                    .then(a => {
                        console.log('deleted profile: ', a);
                        
                        firebase.auth().currentUser.delete()
                            .then(b => {
                                console.log('deleted account: ', a);
                                
                                alert('You account has been deleted')
                            }).catch(error =>{
                                console.log('error: ', error);
                            })
                    }).catch(error => {
                        console.log('error: ', error);
                    })
            }}
        ]
    )
}

/**
 * on click handler for delete profile button
 */
function onRenderProfileDelete(){
    return (
        <ButtonCustom
            onPress={() => this.onPrfileDelete()}
            buttonStyle={DeleteProfileBtn.buttonStyle}
            textStyle={DeleteProfileBtn.textStyle}
        >
            {'Delete Profile'}
        </ButtonCustom>
    )
}

/**
 * on click handler for profile submit button
 */
function onRenderProfileButton(){
    if(this.state.loading){
        return <Spinner size="small" />
    }

    return (    
        <ButtonCustom
            onPress={this.onProfileSub.bind(this)}
            buttonStyle={LogInBtn.buttonStyle}
            textStyle={LogInBtn.textStyle}
        >
            {'Submit'}
        </ButtonCustom>
    )
}

/**
 * On profile creation failure handler
 * @param {*} error 
 */
function onProfileCreateFailed(error){
    console.log('onProfileCreateFailed');
    
    this.setState({
        error: error.message,
        loading: false
    })
}

/**
 * On Profile creation success handler
 */
function onProfileCreateSucccess(){
    console.log('onProfileCreateSuccess');
    this.setState({
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
        isProvide: false,
        loading: false,
        _uid: '',
        _token: '',
        alreadyExist: false
    })
    
    this.props.navigation.navigate('Home')
}

/**
 * On Profile Not Found either on re-render or etc...
 */
function onProfileNotFound(){
    console.log('Account was not found');   

    this.setState({
        alreadyExist: false
    })
}

/**
 * On Profile re-rendering and populate set again
 * @param {*} profile 
 */
function onProfileRec(profile){
    console.log('onProfileRec', profile);
    this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        dob: profile.birthday,
        email: profile.email,
        telephone: profile.phoneNumber,
        gender: profile.gender == 'M'? 'Male': profile.gender == 'F' ? 'Female' : 'Other',
        street: profile.address.streetAddress,
        city: profile.address.city,
        state_: profile.address.state,
        zip: profile.address.zip,
        isProvide: profile.isProvider ? 'Yes' : 'No',
        isProvider: profile.isProvider,
        alreadyExist: true
    })
}

/**
 * Handles that retreives profile information if it exists
 */
function onRefresh(){
    try{        
        var _uid = JSON.stringify(this.props.navigation.getParam('_uid', 'NO-ID'))

        console.log(_uid);
        

        firebase.auth().currentUser.getIdToken().then(
            (token) => {
                this.setState({
                    _token: token
                })

                api.getProfileById(firebase.auth().currentUser.uid, token)
                    .then(userData => {
                            var profile = userData.data
                            console.log(profile);
                            
                            this.onProfileRec(profile) 
                        }
                    ).catch( (error) => {
                        this.onProfileNotFound.bind(this)
                        console.log('error: ', error);
                    })
                }
        )
    } catch (error){
        console.log('UNSAFE_componentWillMount: ', error);   
    } 
}

/**
 * Handles either inserting/updating profile information
 */
function onProfileSub(){
    const { _uid, _token, firstName, lastName, gender, dob,  telephone, street, city, state_, zip, isSocial,  isProvide, isProvider, alreadyExist } = this.state
    const { firstNameError, lastNameError, genderError, dobError, telephoneError, streetError, cityError, state_Error, isProviderError } = this.state
    console.log('onProfileSub - Before in');
    

    this.setState({
        error: '',
        loading: true
    })

    var uid = firebase.auth().currentUser.uid

    if(!firstNameError && !lastNameError && !genderError && !dobError && !telephoneError && !streetError && !cityError && !state_Error && !isProviderError
        && firstName && lastName && gender && dob && telephone && street && city && state_ && isProvider ) {
       
        if(!alreadyExist){
            console.log('onProfileSub - insert');

            const payload = {
                "uid": uid,
                "firstName": firstName,
                "lastName": lastName,
                "gender": gender.charAt(0).toUpperCase(),
                "email": firebase.auth().currentUser.email,
                "birthday": dob,
                "phoneNumber": telephone,
                "address":{
                    "streetAddress": street,
                    "city": city,
                    "state": state_,
                    "zip": zip
                },
                "isSocial": isSocial,
                "isProvider": isProvider,
            }                

            api.insertProfile(payload, _token)
                .then((data) => {
                    var user = firebase.auth().currentUser
                    
                    user.updateProfile({
                            displayName: firstName + ' ' + lastName
                        }).then(b => {
                            console.log('Display Name is Updated');
                        }).catch(f => {
                            console.log('Failed to update dispaly name');
                        })
                    this.onProfileCreateSucccess()
                })
                .catch((error) => {
                    this.onProfileCreateFailed(error)                
                })
        } else {
            console.log('onProfileSub - updated');

            const payload = {
                "uid": uid,
                "phoneNumber": telephone,
                "isSocial": isSocial,
                "isProvider": isProvider,
                "gender": gender.charAt(0).toUpperCase(),
                "birthday": dob,
                "address":{
                    "streetAddress": street,
                    "city": city,
                    "state": state_,
                    "zip": zip
                },
            }                

            api.updateProfileById(payload, _token)
            .then((user) => {
                this.onProfileCreateSucccess()
            })
            .catch((error) => {
                this.onProfileCreateFailed(error)                   
            })
        }          
    } else {
        
        this.setState({
            error: 'Please fill out the profile',
            loading: false
        })

        if(!firstName){
            this.setState({
                firstNameError: 'Please provide first name'
            })
        }
        
        if(!lastName) {
            this.setState({
                lastNameError: 'Please provide last name'
            })
        } 
        
        if(!gender){
            this.setState({
                genderError: 'Please provide gender'
            })
        } 
        
        if(!dob){
            this.setState({
                dobError: 'Please provide Date of Birth'
            })
        } 
        
        if(!telephone){
            this.setState({
                telephoneError: 'Please provide telephone number'
            })
        } 
        
        if(!street){
            this.setState({
                streetError: 'Please provide street address'
            })
        } 
        
        if(!city){
            this.setState({
                cityError: 'Please provide city name'
            })
        } 
        
        if(!state_){
            this.setState({
                state_Error: 'Please provide state 2 character letters'
            })
        }

        if(!zip){
            this.setState({
                zipError: 'Please provide zip'
            })
        }
    }     
}

export default {
    onOtherAccount,
    onLogInButton,
    onLogInSuccess,
    onLogInFail,
    onLogInSub,

    onPrfileDelete,
    onRenderProfileDelete,
    onRenderProfileButton,
    onProfileCreateFailed,
    onProfileCreateSucccess,
    onProfileNotFound,
    onProfileRec,
    onRefresh,
    onProfileSub
}