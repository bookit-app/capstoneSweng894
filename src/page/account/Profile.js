import React from 'react'
import api from '../../api'
import { auth } from '../../config/firebaseConfig'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { 
    ScrollView,
    AsyncStorage 
} from 'react-native'
import AccountDetails from '../../components/account/AccountDetails'

class Profile extends React.Component {   
    state = {
        firstName: '',
        lastName:'',
        email:'',
        password: '',
        telephone:'',
        dob:'',
        gender:'',
        street:'',
        city:'',
        state_:'',
        zip: '',
        error: '', 
        isSocial: false,
        isProvide: false,
        loading: false,
        _uid: ''
    }

    UNSAFE_componentWillMount(){
        const { navigation } = this.props;

        //need to find a way to get this information from the LogIn/SignUp Email
        //Redux or Mobx applicant state
        this.setState({
            _uid: JSON.stringify(navigation.getParam('CurrentUserId', '')).toString(),
            email: JSON.stringify(navigation.getParam('email', '')).toString()
        })

        api.getProfileById(auth.currentUser.uid)//JSON.stringify(navigation.getParam('CurrentUserId', '')).toString())
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
            address: profile.address.streetAddress,
            city: profile.address.city,
            state_: profile.address.state,
            zip: profile.address.zip
        })
    }
    
    onProfileNotFound(){
        console.log('Account was not found');
        
    }

    onProfileSub(){
        const { _uid, firstName, lastName, email, gender, dob,  telephone, street, city, state_, zip, isSocial,  isProvide } = this.state
       
        this.setState({
            error: '',
            loading: true
        })
        
        const { navigation } = this.props;
 
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

        api.insertProfile(payload)
            .then(this.onProfileCreateSucccess(_uid))
            .catch(this.onProfileCreateFailed.bind(this))
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
    
        if(_uid !== null){
            await AsyncStorage.setItem('CurrentUserId', _uid)
        }
        
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
                buttonStyle={LogInBtnSty.buttonStyle}
                textStyle={LogInBtnSty.textStyle}
            >
                {'Submit'}
            </ButtonCustom>
        )
    }

    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <AccountDetails
                    Creation={false}
                    firstName={this.state.firstName}
                    onFirstNameChge={firstName => this.setState({ firstName })}
                    lastName={this.state.lastName}
                    onLastNameChge={lastName => this.setState({ lastName })}
                    email={this.state.email}
                    onEmailChge={email => this.setState({ email })}
                    password={this.state.password}
                    onPasswordChge={password => this.setState({ password })}
                    telephone={this.state.telephone}
                    onTelephoneChge={telephone => this.setState({ telephone })}
                    dob={this.state.dob}
                    ondobChge={dob => this.setState({ dob })}
                    gender={this.state.gender}
                    onGenderChge={gender => this.setState({ gender })}
                    address={this.state.street}
                    onAddressChge={ street => this.setState({ street })}
                    city={this.state.city}
                    onCityChge={city => this.setState({ city })}
                    state={this.state.state_}
                    onStateChge={state_ => this.setState({ state_ })}
                    zip={this.state.zip}
                    onZipChge={zip => this.setState({ zip })}
                />
                
                {this.onRenderProfileButton()}
            </ScrollView>
        )
    }
}

const styles = {
    Row:{
        display: 'flex',
        flewDirection: 'row',
    },
    Column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10
    },
    scrollView: {
      marginHorizontal: 20,
    },
}

const LogInBtnSty = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 5,
      paddingBottom: 5,        
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      flex: 1,
      backgroundColor:'#4FA6FD' ,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
      width: 250, 
      justifyContent: 'center',
      alignItems: 'center',
    }
  };
  
export default Profile