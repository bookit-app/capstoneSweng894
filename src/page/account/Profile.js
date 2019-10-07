import React from 'react'
import api from '../../api'
import { auth } from '../../config/firebaseConfig'
import { ScrollView } from 'react-native'
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
        address:'',
        city:'',
        state_:'',
        zip: '',
        error: '', 
        isSocial: false,
        isProvide: false,
        loading: false 
    }

    UNSAFE_componentWillMount(){
        api.getProfileById(auth.currentUser.uid)
            .then(userData => {
                    var profile = userData.data
                    this.onProfileRec(profile)
                }
            )
            .catch(this.onProfileNotUpdate.bind(this))
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


    onProfileNotUpdate(){
        console.log('on Profile Not Updated');
        alert('On Profile Not Updated')
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
                    address={this.state.address}
                    onAddressChge={ address => this.setState({ address })}
                    city={this.state.city}
                    onCityChge={city => this.setState({ city })}
                    state={this.state.state_}
                    onStateChge={state_ => this.setState({ state_ })}
                    zip={this.state.zip}
                    onZipChge={zip => this.setState({ zip })}
                />
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

export default Profile