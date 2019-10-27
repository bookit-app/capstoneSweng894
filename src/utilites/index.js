import React from 'react'
import { Alert } from 'react-native'
import api from '../api'
import firebase from 'firebase'
import { Button, ButtonCustom, Spinner } from '../components/common'
import { DayOfWeek } from '../constant'
import LogInBtn from '../components/styles/LogInBtn.styles'
import DeleteProfileBtn from '../components/styles/DeleteProfileBtn'
import NavigationService from '../navigation/custom/NavigationService'

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
 */
async function onLogInSuccess(type){
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

    this.props.navigation.navigate(type == 'S' ? 'Profile' : 'Home')
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
    // console.log('onLogInSub', type);
    
    const { email, password, emailError, passwordError } = this.state;

    if(!emailError && !passwordError && email && password){            
        this.setState({ error: '', loading: true})
        
        // console.log('onLogInSub');

        if(type === 'L'){
            this.props.settingPref(true)
            this.props.loggingIn(email,password)
        } else {
            this.props.settingPref(false)
            this.props.signingUp(email,password)
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
 *  Profile functions -- Start
 */

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
function onProfileCreateSucccess(type){
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
        alreadyExist: false,
        prefAlreadyExit: false
    })
    
    NavigationService.navigate(type =='S'? 'Pref1' : 'Home')
}

/**
 * On Profile Not Found either on re-render or etc...
 */
function onProfileNotFound(){
    console.log('Account was not found');   

    this.setState({
        alreadyExist: false,
        prefAlreadyExit: false,
        loading: false
    })
}

/**
 * On Profile re-rendering and populate set again
 * @param {*} profile 
 */
function onProfileRec(profile){
    this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        dob: profile.birthday,
        email: profile.email,
        telephone: profile.phoneNumber,
        gender: profile.gender == 'M'? 'Male': profile.gender == 'F' ? 'Female' : 'Other',
        street: !isEmpty(profile.address) ? profile.address.streetAddress : '',
        city: profile.address.city,
        state_: profile.address.state,
        zip: profile.address.zip,
        isProvide: profile.isProvider ? 'Yes' : 'No',
        isProvider: profile.isProvider,
        alreadyExist: true,
        prefAlreadyExit: profile.preferences ? true : false,
        loading: false
    })

    console.log('onProfileRec Preference: ' + profile.preferences ? true : false);
}

/**
 * Handles that retreives profile information if it exists
 */
function onProfileRefresh(){
    try{               
        // console.log('onProfileRefresh', this.props);        
        if(!this.props.profile){
            console.log('onProfileRefresh',this.propps.userId);
            
            firebase.auth().currentUser.getIdToken()
                .then((token) => {
                    api.getProfileById(firebase.auth().currentUser.uid, token)
                        .then(userData => {
                                var profile = userData.data      
                                console.log('onProfileRefresh',profile);
                                                  
                                this.onProfileRec(profile) 
                                this.props.setPreference(profile.preferences)
                            }
                        ).catch( (error) => {
                            console.log('error: ', error);
                            this.onProfileNotFound.bind(this)
                            this.setState({
                                loading: false
                            })
                        })
                })
        } else {    
            console.log('onProfileRefresh', this.props.profile);
            console.log('onProfileRefresh', this.props.preferences ? this.props.preference : this.props.profile.preferences);
            
            this.onProfileRec(this.props.profile)
            this.props.setPreference(this.props.preferences ? this.props.preference : this.props.profile.preferences)
        }
    } catch (error){
        this.setState({
            loading: false
        })
        console.log('onProfileRefresh: ', error);   
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

    console.log('onProfileSub', this.state);

    if(!firstNameError && !lastNameError && !genderError && !dobError && !telephoneError && !streetError && !cityError && !state_Error && !isProviderError
        && firstName && lastName && gender && dob && telephone && street && city && state_) {
       
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

            console.log('onProfileSub - insert',payload);
            
            api.insertProfile(payload, this.props.token)
                .then((data) => {
                    var user = firebase.auth().currentUser
                    
                    user.updateProfile({
                            displayName: firstName + ' ' + lastName
                        }).then(b => {
                            console.log('Display Name is Updated');
                        }).catch(f => {
                            console.log('Failed to update dispaly name');
                        })

                    this.props.setProfile(payload)
                    this.onProfileCreateSucccess('S')
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
            
            console.log('onProfileSub - updated',payload);

            api.updateProfileById(payload,this.props.token)
            .then((user) => {
                this.props.setProfile(payload)
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

/**
 * Handles retrive profile info -- NOT WORKING 
 */
function getProfile(){
    console.log('getProfile');
    
    try {
        firebase.auth().currentUser.getIdToken().then(
            (token) => {
                api.getProfileById(firebase.auth().currentUser.uid, token)
                    .then(userData => {
                            var profile = userData.data
                            console.log('getProfile successfully', profile);
                            return profile;
                        }
                    ).catch( (error) => {
                        return error
                    })
                }
        )
    } catch(error) {
        return null
    }
}

/**
 *  Profile functions -- End
 */

/**
 * Handles route from profile to preference 
 */
function onRenderPreference(){
    return (    
        <Button
            onPress={() => this.props.navigation.navigate('Preference')}
        >
            {'Preference'}
        </Button>
    )
}

/**
 * Preference
 */

 /**
  * Saving Preferences to Profiles without favor Provider yet
  */
function onPreferencePage1Confirmed(navNext){
    const { day, styleOn, styleOnType, staffClassification, time, cityState} = this.state
    this.setState({
        loading_Submit: true
    })

    // console.log('onPreferencePage1Confirmed', day);
    // console.log('onPreferencePage1Confirmed', styleOn);
    // console.log('onPreferencePage1Confirmed', styleOnType);
    // console.log('onPreferencePage1Confirmed', staffClassification);
    // console.log('onPreferencePage1Confirmed', time);
    // console.log('onPreferencePage1Confirmed', cityState);
    
    if(day && styleOnType && styleOn && staffClassification && time && cityState) {
        var city = cityState.split(',')[0].trim() 
        var state_ = cityState.split(',')[1].trim()
        var actualyDay = DayOfWeek.filter(i => i.Name == day)[0].Value

        var payload = {
            "preferences": {
                day: parseInt(actualyDay),
                hairStyle: {
                    "style": styleOn,
                    "type": styleOnType
                },
                staffClassification: staffClassification,
                time: time.toUpperCase(),
                city: city,
                state: state_
            }
        }

        // console.log('onPreferencePage1Confirmed', payload);

        api.updateProfileById(payload, this.props.token)
            .then(i => {   
                // console.log('onPreferencePage1Confirmed', 'OnSuccess');

                NavigationService.navigate(navNext)
                this.props.setPreference(payload)
                
                var filterType = {
                    city: city,
                    state: state_,
                    // styles: styleOn
                }
                
                var filter = filterGenerate(filterType)

                console.log('onPreferencePage1Confirmed', filter);
                
                this.props.getProviderResult(filter,this.props.token)

                this.setState({ loading_Submit: false })
            }).catch(e => {
                console.log('error: ', e);

                this.setState({
                    error: e.message,
                    loading_Submit: false
                })
            })
    } else {

        // console.log('onPreferencePage1Confirmed', 'error');
        
        this.setState({
            error: 'Please populate all the fields',
            loading_Submit: false
        })
    }
}


/**
 * Handles setting the Style and Type based on the style selection
 * @param {*} value 
 */
function setStyleType(value){
    this.setState({
        styleOn: this.state.styleLists.filter(i => i.Value == value )[0].style,
        styleOnType: value
    })
}

/**
 * Refresh the state data for the first page of Preferences
 */
function onPreferenceRefresh(){
    try {
        api.getConfiguration("styles", this.props.token)
        .then((sty) => {
            var styles_ = sty.data 

            styles_.hairStyles[1].types.map(i => {
                
                var single = {}
                single['Id'] = this.state.hairDresserList.length
                single['Name'] = i
                single['Value'] = i
                single['style'] =  styles_.hairStyles[1].style
                single['staffclassification'] = 'Hair Dresser'  
                
                // console.log(this.props.preference);     

                if(!isEmpty(this.props.preference)){
                    if(isEmpty(this.props.preference.hairStyle)){
                        
                    } else {
                        if(i == this.props.preference.hairStyle.type){
                            this.state.styleSelected.push(single)
                            this.state.styleOnType = styles_.hairStyles[1].style
                        }
                    }
                } else {
                    this.state.styleSelected.push(single)
                }

                this.state.hairDresserList.push(single)
            })

            styles_.hairStyles[0].types.map(i => {
                
                var single = {}
                single['Id'] = this.state.barberList.length
                single['Name'] = i
                single['Value'] = i
                single['style'] =  styles_.hairStyles[0].style
                single['staffclassification'] = 'Barber'              

                // console.log('onPreferenceRefresh',this.props.preference);                

                if(!isEmpty(this.props.preference)){  
                    if(isEmpty(this.props.preference.hairStyle)){
                        
                    } else {
                        if(i == this.props.preference.hairStyle.type){
                            this.state.styleSelected.push(single)
                            this.state.styleOnType = styles_.hairStyles[0].style
                        } 
                    }  
                } else {
                    this.state.styleSelected.push(single)
                }
                this.state.barberList.push(single)
            })

            // console.log('barberList', this.state.barberList);
            // console.log(('hairDress'), this.state.hairDresserList);            

            if(!isEmpty(this.props.preference)){
                this.setState({
                    staffClassification: this.props.preference.staffClassification,
                    styleOn: isEmpty(this.props.preference.hairStyle) ? '' : this.props.preference.hairStyle.style,
                    styleOnType: isEmpty(this.props.preference.hairStyle) ? '' : this.props.preference.hairStyle.type,
                    styleLists: this.state.hairDresserList.filter(i => i.style == isEmpty(this.props.preference.hairStyle) ? this.props.preference.hairStyle.style :'').length > 1 ? this.state.hairDresserList : this.state.barberList,
                    day: DayOfWeek.filter(i => i.Value == parseInt(this.props.preference.day)).map(j => j.Name),
                    time: this.props.preference.time,
                    cityState: this.props.preference.city +', ' +this.props.preference.state,
                    loading: false
                })
            } else {
                this.setState({
                    loading: false,
                    styleLists: this.state.barberList,
                    staffClassification: this.state.barberList[0].staffclassification
                })
            }
        }).catch((error) => {
            console.log('getConfiguration ProfilePref1', error);
            this.setState({
                loading: false
            })
        })
    } catch (error) {
        console.log('Profile Pref Catch error', error);    
    }
}

/**
 * Handle contiune button click rendering 
 */
function onSubmitPrefPage1(navNext){
    if(this.state.loading_Submit){
        return <Spinner size="large" />
    }

    return (
        <Button
            onPress={() => this.onPreferencePage1Confirmed(navNext)}
        >
            {'Continue'}
        </Button>
    )

}


/**
 * Handles moving to the next preference Page
 */
function onSkipClick(onSkip){
    // this.props.navigation.navigate(onSkip)
    NavigationService.navigate(onSkip)
}

/**
 * Generates the necessary filter option for the provider servers
 * @param {*} filterType 
 */
function filterGenerate(filterType){
    var fvi = null;
    var filters = null
    // console.log('filterGenerate', filterType);
    
    for(fvi of Object.entries(filterType)){

        var filter = null
        // console.log('filterGenerate filter inital', filter);
        // console.log('filterGenerate filters intial', filters);
        
        var label = fvi[0]
        var value = fvi[1]
        // console.log('filterGenerate label',label);
        // console.log('filterGenerate value',value);

        if(value){
            filter = label + '=' + value
            // console.log('filterGenerate filter', filter);
            
            filters = !filters ? filter : filters + '&' + filter
            // console.log('filterGenerate filters', filters);
        }
    }  
    
    console.log('filterGenerate filters final',filters);

    return filters
}

/**
 * Pass filter object then will 
 * @param {*} filterType 
 */
function resultsFromFilterPreference(filterType){    

    var filter = filterGenerate(filterType)

    api.searchProviderByFilter(filter, this.props.token)
        .then((result) => {
            // console.log('resultsFromFilterPreference', result);
            // console.log('resultsFromFilterPreference', result.data);
            
            this.props.setProviderSearch(result.data)
        }).catch((error) => {
            console.log('searchProviderByFilter', error);
            
        })
}

/**
 * Check is a given Object is empty
 * @param {*} obj 
 */
function isEmpty(obj) {
    // console.log('isEmpty',obj);

    for(var key in obj) {
        // console.log('isEmpty',key);
        
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

/**
 * Handles Password Reset button click event
 */
function onPasswordResetClick(){
    if(this.state.loading){
        return <Spinner size="large"/>
    }

    return (
        <ButtonCustom
            onPress={() => this.onPasswordReset()}
            buttonStyle={LogInBtn.buttonStyle}
            textStyle={LogInBtn.textStyle}
        >
            {'Reset Password'}
        </ButtonCustom>
    )
}

/**
 * Handles triggering Firebase reset password email
 */
function onPasswordReset(){
    const { email } = this.state
    Alert.alert(
        'Reset Password',
        'Are you sure you want to reset your account password? ',
        [
            {text: 'Cancel', onPress: () => {return null}},
            {text: 'Confirm', onPress: () => {                
                firebase.auth().sendPasswordResetEmail(email)
                .then((email) => {
                    firebase.auth().signOut()
                        .then(this.onSuccessfullLogOut.bind(this))
                        .catch(this.onFailuredLogOut.bind(this))
                })
            }}
        ]
    )
}

/**
 * On Success handler
 */
function onSuccessfullLogOut(){
    console.log("Success Log Out of Account");
    // this.props.navigation.navigate('Login')
     NavigationService.navigate('Login')
} 

/**
 * On Failured handler
 */
function onFailuredLogOut(){
    alert('Failure to Log out of Account')
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
    onProfileRefresh,
    onProfileSub,
    getProfile,

    onRenderPreference,

    onPreferencePage1Confirmed,
    setStyleType,
    onPreferenceRefresh,
    onSubmitPrefPage1,
    onSkipClick,

    filterGenerate,
    resultsFromFilterPreference,
    isEmpty,

    onPasswordReset,
    onPasswordResetClick,
    onSuccessfullLogOut,
    onFailuredLogOut
}