import React from 'react'
import api from '../../api'
import { connect } from 'react-redux'
import firebase from 'firebase'
import auth from '../../repository/auth'
import styles from '../styles/Profile.styles'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { 
    View,
    ScrollView,
    AsyncStorage 
} from 'react-native'
import validation from '../../validation'
import LogInBtn from '../../components/styles/LogInBtn.styles'
import DeleteProfileBtn from '../../components/styles/DeleteProfileBtn'
import AccountDetails from '../../components/account/AccountDetails'
import { Spinner } from '../../components/common'

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
            isProvide: false,
            loading: false,
            _uid: '',
            _token: '',
            alreadyExist: false
        }

        this.verifyEmail = validation.verifyEmail.bind(this)
        this.verifyPassword = validation.verifyPassword.bind(this)
        this.verifyFirstName = validation.verifyFirstName.bind(this)
        this.verifyLastName = validation.verifyLastName.bind(this)
        this.verifyTelephone = validation.verifyTelephone.bind(this)
        this.verifyDate = validation.verifyDate.bind(this)
        this.verifyGender = validation.verifyGender.bind(this)
        this.verifyStreet = validation.verifyStreet.bind(this)
        this.verifyCity = validation.verifyCity.bind(this)
        this.verifyState = validation.verifyState.bind(this)
        this.verifyZip = validation.verifyZip.bind(this)
    }

    async UNSAFE_componentWillMount(){
        try{        
            firebase.auth().currentUser.getIdToken().then(
                (token) => {
                    this.setState({
                        _token: token
                    })

                    api.getProfileById(firebase.auth().currentUser.uid, token)
                        .then(userData => {
                                var profile = userData.data
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

    onProfileRec(profile){
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
            alreadyExist: true
        })
    }
    
    onProfileNotFound(){
        console.log('Account was not found');   

        this.setState({
            alreadyExist: false
        })
    }

    onProfileSub(){
        const { _uid, _token, firstName, lastName, gender, dob,  telephone, street, city, state_, zip, isSocial,  isProvide, alreadyExist } = this.state
        const { firstNameError, lastNameError, genderError, dobError, telephoneError, streetError, cityError, state_Error } = this.state
        console.log('onProfileSub - Before in');
        

        this.setState({
            error: '',
            loading: true
        })

        var uid = firebase.auth().currentUser.uid

        if(!firstNameError && !lastNameError && !genderError && !dobError && !telephoneError && !streetError && !cityError && !state_Error
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
                    "isProvider": isProvide,
                }                

                api.insertProfile(payload, _token)
                    .then((user) => {
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
                    "isProvider": isProvide,
                    "gender": gender.charAt(0).toUpperCase(),
                    "birthday": dob,
                    "address":{
                        "streetAddress": street,
                        "city": city,
                        "state": state_,
                        "zip": zip
                    },
                }                

                api.updateProfileById(uid, payload, _token)
                .then((user) => {
                    this.onProfileCreateSucccess()
                })
                .catch((error) => {
                    this.onProfileCreateFailed(error)
                    // console.log('onError: ', error);                    
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

    onProfileCreateSucccess(){
        this.setState({
            firstName: '',
            lastName:'',
            email:'',
            password: '',
            telephone:'',
            dob:'',
            gender:'',
            address:'',
            city:'',
            state_:'',
            error: '', 
            isSocial: false,
            isProvide: false,
            loading: false 
        })
        
        console.log('onProfileCreateSuccess');
        
        this.props.navigation.navigate('Home')
    }

    onProfileCreateFailed(error){
        console.log('onProfileCreateFailed');
        
        this.setState({
            error: error.message,
            loading: false
        })
    }

    onPrfileDelete(){
        // api.deletedProfileById()
        console.log('Delete profile');
        
    }

    onRenderProfileButton(){
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

    onRenderProfileDelete(){
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

    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <View>
                    <AccountDetails
                        Creation={false}
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
                        error={this.state.error}
                        onSubmit={() => this.onRenderProfileButton()}
                        onDelete={() => this.onRenderProfileDelete()}
                    />
                </View>
            </ScrollView>
        )
    }
}
  

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
        token: state.token
    }
}

export default connect(mapStateToProps,null)(Profile)