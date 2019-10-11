import React from 'react'
import api from '../../api'
import firebase from 'firebase'
import { auth } from '../../config/firebaseConfig'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { 
    View,
    ScrollView,
    AsyncStorage 
} from 'react-native'
import validation from '../../validation'
import LogInBtn from '../../components/styles/LogInBtn'
import AccountDetails from '../../components/account/AccountDetails'

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

    UNSAFE_componentWillMount(){
        api.getProfileById(auth.currentUser.uid)
            .then(userData => {
                    var profile = userData.data
                    this.onProfileRec(profile)
                }
            ).catch(this.onProfileNotFound.bind(this))
    }

    onProfileRec(profile){
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
        const { _uid, firstName, lastName, email, gender, dob,  telephone, street, city, state_, zip, isSocial,  isProvide, alreadyExist } = this.state
       
        this.setState({
            error: '',
            loading: true
        })
 
        const payload = {
            "uid": auth.currentUser.uid,
            "firstName": firstName,
            "lastName": lastName,
            "email": auth.currentUser.email,
            "gender": gender,
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

        console.log(_uid);
        console.log(payload);

        if(!alreadyExist){
            api.insertProfile(payload)
                .then(this.onProfileCreateSucccess(_uid))
                .catch(this.onProfileCreateFailed.bind(this))
        } else {
            api.updateProfileById(_uid, payload)
                .then(this.onProfileCreateSucccess(_uid))
                .then(this.onProfileCreateFailed(_uid))
        }
    }
    
    onSignUpCreateFailed(){
        this.setState({
            error: 'Account Creation Failed',
            loading: false
        })
    }

    onProfileCreateSucccess = async(_uid) => {
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
        
        this.props.navigation.navigate('Home')
    }

    onProfileCreateFailed(){
        this.setState({
            error: 'Profile Creation Failed',
            loading: false
        })
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
                        onSubmit={() => this.onRenderProfileButton()}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    Row: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    Column: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    scrollView: {
      marginHorizontal: 20,
    },
    View: {
      justifyContent: 'center'
    }
}
  
export default Profile