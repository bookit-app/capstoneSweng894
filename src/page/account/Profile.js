import React from 'react'
import { View, ScrollView, Text } from 'react-native'
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
        error: '', 
        isSocial: false,
        isProvide: false,
        loading: false 
    }

    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <AccountDetails
                    Creation={true}
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